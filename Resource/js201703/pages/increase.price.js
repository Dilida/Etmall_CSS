'use strict';
$(function () {

    // build increase price fn
    function buildLayout(data) {
        if (!document.getElementById('increasePrice')) return false;

        // fake data variable
        const itemsDatas = 'Resource/js201703/common/items-data.json';

        const $increaseWrap = $('.n-increase__wrap');
        const $increaseBox = $increaseWrap.find('.n-increase__box');
        const $increaseBoxUl = $increaseBox.find('.n-purchase__list');

        $.getJSON(itemsDatas, buildHtml).fail(function () {
            console.log("error");
        });

        function buildHtml(data) {
            let itemHtml = '';
            itemHtml = `<section class="n-l-colmb15">
							     <div class="n-l-bgw-md n-increase__box">
								     <ul class="n-purchase__list n-hover--img">`;

            for (let i = 0; i < data.length / 3; i++) {

                if (data.slice(5,10)) {
                    itemHtml += `<li data-key="${data[i].key}">
                                <a href=" ${data[i].url} " title=" ${data[i].name} " target="_blank">
                                    <div class="n-pic"><img src=" ${data[i].src} " title=" ${data[i].name} " width="234" height="234"></div>
                                </a>
                                <p class="n-name"> ${data[i].name} </p>
                                <p class="n-price__wrap"> 
                                    <span class="n-price--normal"> ${data[i].normalPrice} </span>
                                    <span class="n-price--16"> 
                                        <span>$ </span>
                                        <span>${data[i].price}</span>
                                    </span>
                                </p>
                                <a class="n-btn n-btn--black" href="" title="選購">選購</a>
                                <div class="n-select__spec">
                                    <ul class="n-form-aligned">
                                        <li>
                                            <label class="n-caption">顏色：</label>
                                            <select class="n-form--control" name="selectColor">
                                            <option value="1">共同</option>
                                            <option value="2">共同2</option>
                                        </select>
                                        </li>
                                        <li>
                                            <label class="n-caption">樣式：</label>
                                            <select class="n-form--control" name="selectCtyle">
                                            <option value="1">64G</option>
                                            <option value="1">128G</option>
                                        </select>
                                        </li>
                                        <li>
                                            <label class="n-caption">數量：</label>
                                            <select class="n-form--control" name="quantity">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                        </li>
                                    </ul>
                                    <button class="n-btn n-btn--primary" type="submit">確定</button>
                                </div>
                            </li>`;
                }

                
            }

            itemHtml += `</ul>`

            $increaseWrap.append(itemHtml);

        }

    }

    // Selcet product add to basket
    function selectProductToBasket() {
        if (!document.getElementById('increasePrice')) return false;

        // basket variable
        const $increaseProdBody = $('.n-increase__pord-body');
        const $increaseProdBodyUl = $increaseProdBody.find('> ul');
        const $increaseProdBodyLi = $increaseProdBody.find('> ul > li');

        // products variable
        const $purchaseList = $('.n-purchase__list');
        const $selectBtn = $purchaseList.find('>li .n-btn--black');

        // specs variable
        const $selectSpec = $('.n-select__spec');
        const $specBtn = $selectSpec.find('> .n-btn--primary');

        // store specs value
        let specsArray = [];

        // build html varibal
        let basket;

        // trigger specs items
        $selectBtn.on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            $this.siblings('.n-select__spec').addClass('n-active');
        });

        // get value , build basket html
        $specBtn.on('click', function (e) {
            e.preventDefault();
            const $this = $(this);

            // get specs text
            specsArray.push($this.closest('li').find('.n-pic > img').attr('src'));
            specsArray.push($this.siblings('.n-form-aligned').find('[name=selectColor] option:selected').text());
            specsArray.push($this.siblings('.n-form-aligned').find('[name=selectCtyle] option:selected').text());
            specsArray.push($this.siblings('.n-form-aligned').find('[name=quantity] option:selected').text());

            // build basket html
            basket = `<li class="n-increase__pord-item n-effect--show"><img class="n-pic" src=" ${specsArray[0]} " width="180" height="180">
                        <div class="n-increase__pord-tool n-effect--hide">
                            <a class="n-edit" href="#" title="修改">修改</a>
                            <a class="n-del" href="#" title="刪除">刪除</a>
                        </div>
                        <div class="n-select__spec">
                            <ul class="n-form-aligned">
                                <li>
                                    <label class="n-caption">顏色：</label>
                                    <select class="n-form--control" name="">
                                        <option value="1"> ${specsArray[1]} </option>
                                        <option value="2">共同1</option>
                                    </select>
                                </li>
                                <li>
                                    <label class="n-caption">樣式：</label>
                                    <select class="n-form--control" name="">
                                        <option value="1"> ${specsArray[2]} </option>
                                    </select>
                                </li>
                                <li>
                                    <label class="n-caption">數量：</label>
                                    <select class="n-form--control" name="">
                                        <option value="1">${specsArray[3]}</option>
                                    </select>
                                </li>
                            </ul>
                            <button class="n-btn n-btn--primary" type="submit">確定</button>
                        </div>
                    </li>`;

            $increaseProdBodyUl.prepend(basket);

            $this.parent('.n-select__spec').removeClass('n-active');
            $this.closest('li').addClass('n-selected');
            // clear array 
            specsArray.length = 0;

            // basket li length
            let basketLiLength = $this.closest('.n-increase').find('.n-increase__item > .n-increase__pord > .n-increase__pord-body > ul > li').length;

            switch (basketLiLength) {
                case 4:
                    $increaseProdBodyUl.find('.n-increase__pord-add-more').removeClass('n-is--hide');
                    break;
                case 5:
                    $increaseProdBodyUl.find('.n-increase__pord-add-item').addClass('n-is--hide');
                    break;
            }
        });

        // click show specs option of basket block
        $increaseProdBodyUl.on('click', 'li .n-increase__pord-tool .n-edit', function (e) {
            e.preventDefault();
            const $this = $(this);

            $this.parent('.n-increase__pord-tool').siblings('.n-select__spec').addClass('n-active');

        });

        // click hide specs option of basket block
        $increaseProdBodyUl.on('click', 'li .n-select__spec .n-btn--primary', function (e) {
            e.preventDefault();
            const $this = $(this);

            $this.parent('.n-select__spec').removeClass('n-active');

        });

        // click delete item of basket block
    }
    selectProductToBasket();

    // Scroll to product top
    function scrollToProductTop() {
        if (!document.getElementById('increasePrice')) return false;

        const $increaseProdBody = $('.n-increase__pord-body');
        const $pleasePickItemBtn = $increaseProdBody.find('.n-increase__pord-add-item > a');
        const $increaseItem = $('.n-increase__item');
        const _increaseItemTop = $increaseItem.offset().top;

        $pleasePickItemBtn.on('click', function (e) {
            e.preventDefault();
            $htmlBody.animate({
                scrollTop: _increaseItemTop + 120
            }, 500);
        });

    }
    scrollToProductTop();

    // Open bottom itme detail effect
    function bottomDetailSwitch() {
        if (!document.getElementById('increasePrice')) return false;

        const $increaseFixedWrap = $('.n-increase__fixed');
        const $btnSwitch = $increaseFixedWrap.find('.n-increase__fixed-head > .n-increase__fixed-left > a.n-left');

        var _opetTxt = '展開明細';
        var _closeTxt = '收合明細';

        $btnSwitch.on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            const _currentTxt = $btnSwitch.find('span').eq(2).text();

            // change text
            if (_currentTxt === _opetTxt) {
                $this.find('span').eq(2).text('').text(_closeTxt)
            } else if (_currentTxt === _closeTxt) {
                $this.find('span').eq(2).text('').text(_opetTxt)
            }
            // change icon display
            $this.toggleClass('n-is--open');
            $this.closest('.n-increase__fixed-head').siblings('.n-increase__fixed-body').stop(false, true).slideToggle(300);
        });

    }
    bottomDetailSwitch();

});