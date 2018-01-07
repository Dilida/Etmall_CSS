'use strict';
$(function(){
	// Cart common variable
	var $cartStep1 = $('#cartStep1');

	// Cart step1 deliver nav, call switch tab funtion
    switchTabEffect('deliverTab');

    // Cart step1 select discount block, call switch tab funtion
    switchTabEffect('selectDiscountTab');

    function showDiscount() {
        if ( !document.getElementById('cartStep1') ) return false;

        // use coupons variable
        const $cartBox = $('.n-cart__box');
        const $cartTable = $cartBox.find('.n-cart__table');
        const $useCoupons = $cartTable.find('.n-btn--lv3');

        // popup discount page variable
        const $selectDiscountOverlay = $('#selectDiscountOverlay');
        const $confirmBtn = $selectDiscountOverlay.find('.n-select__body .n-select__box .n-btn--primary');

        // magnific opts
        const popupOpts = {
            items: {
                    src: '#selectDiscountOverlay',
                    type: 'inline'
                }
        }
        
        // btns text variable
        let useDiscountTxt;
        const cancelUseDiscount = '<a class="n-btn n-btn--normal" href="#" title="取消折價券">取消折價券</a>'; 

        // show discount, and get use discount btn text
        $useCoupons.on('click', function(e) {
            e.preventDefault();
            const $this = $(this);
            useDiscountTxt = $this.attr('title');
            $.magnificPopup.open(popupOpts);
            
        });

        // close popup and build cancel discount btn
        $confirmBtn.on('click', function(e) {
            e.preventDefault();
            $.magnificPopup.close(popupOpts);

            const $this = $(this);
            const _btnNormalLength = $this.closest('.n-theme--gr2-lighter').find('.n-wrapper .n-layout--lg .n-cart__body .n-cart__box .n-cart__table .n-btn--normal').length;

            $this.closest('.n-theme--gr2-lighter').find('.n-wrapper .n-layout--lg .n-cart__body .n-cart__box .n-cart__table .n-btn--lv3').text('').text('更換折價券');

            if ( _btnNormalLength === 0 ) {
                $this.closest('.n-theme--gr2-lighter').find('.n-wrapper .n-layout--lg .n-cart__body .n-cart__box .n-cart__table .n-btn--lv3').after(cancelUseDiscount);
            }
        
        });

        // cancel use discount btn
        $cartTable.on('click', '.n-btn--normal', function(e) {
            e.preventDefault();

            const $this = $(this);
            
            $this.siblings('.n-btn--lv3').text(' ').text( useDiscountTxt );
            this.remove(this);
        });

    }
    showDiscount();

    // Cart step1 popup select discount
    function popupDiscount() {
    	if ( !document.getElementById('cartStep1') ) return false;

    	var $carTable1 = $cartStep1.find('#cartTable1');
    	var $tableUls = $carTable1.find('table .n-operating');
    	var $tableLis = $tableUls.find('li');
    	var $tableLisLabels = $tableUls.find('label');

    	var getLabelsText;
    	var LabelsText = [];

    	// get Labels teext
        for( var i = 0; i < $tableLisLabels.length; i++ ) {
        	getLabelsText = $tableLisLabels.eq(i).text();
        	getLabelsText = $.trim(getLabelsText);

        	LabelsText.push(getLabelsText);
        }

        // trigger popup
        for( var j = 0; j < LabelsText.length; j++) {
        	// console.log(LabelsText[j]);
        	if ( LabelsText[j] === '使用折價券' ) {
        		$tableLisLabels.eq(j).on('click', function(e) {
        			e.preventDefault();

        			var $this = $(this);
        			$this.parent('li').addClass('n-active');
        			$this.siblings('input:radio').prop('checked', true);
        		});
        		
                $tableLisLabels.eq(j).magnificPopup({
                    items: {
                        src: '#selectDiscountOverlay',
                        type: 'inline'
                    }
                });


        	}
        }

    }
    // popupDiscount();

    // use gift card display effect 
    // Cart step1 use gift card demo
    function useGiftDemo() {
        if (!document.getElementById('useGift')) return false;

        var $useGift = $('#useGift');
        var $giftTable = $useGift.find('.n-d-table');
        var $tableLastTr = $useGift.find('.n-d-table ul:last');
        var $giftDel = $giftTable.find('.n-del');
        var $fieldNum = $giftTable.find('input:text').eq(0);
        var $fieldPrice = $giftTable.find('input:text').eq(1);
        var $giftUse = $giftTable.find('.n-blue--link');

        // console.log($tableLastTr);
        var tableHtml = '';
        var tableDelMarkup = '<li class="n-edit"><a class="n-del" href="#" title="刪除"><i class="n-icon--close"></i></a></li>'

        // error info
        var overduvTxt = '此禮物卡已逾期';
        var errorTxt = '序號錯誤';

        // store input fields
        var storeGiftNum;
        var storePirce;

        // test variables
        var correctNum = '111111111';
        var overduvNum = '222222222';
        var errorNum = '333333333'

        var priceArray = ['3278', '1688', '687', '913', '3789'];

        function getRand() {
            return priceArray[Math.floor(Math.random() * priceArray.length)];
        }

        // console.log(getRand())

        // detect gift num input value , then show info
        $fieldNum.on('keyup', function(e) {
            e.preventDefault();
            let $this = $(this);

            // clear field empty
            if ($this.val() === '') {
                $this.removeClass('n-form--error-field');
                $this.siblings('.fields--info').hide();
                $this.siblings('.n-icon--correct').hide();
            } 

            // display error info
            if ($this.val() === errorNum) {
                $this.siblings('.n-icon--correct').hide();
                $this.siblings('.fields--info').hide();
                $this.addClass('n-form--error-field');
                $this.siblings('.n-form--error').text(errorTxt).show();
            }

            // display overduv info
            if ($this.val() === overduvNum) {
                $this.siblings('.n-icon--correct').hide();
                $this.siblings('.fields--info').hide();
                $this.addClass('n-form--error-field');
                $this.siblings('.n-form--error').text(overduvTxt).show();
            }

            // display correct info
            if ($this.val() === correctNum) {
                $this.siblings('.n-form--error').hide();
                $this.removeClass('n-form--error-field');
                $this.siblings('.fields--info').show();
                $this.siblings('.n-icon--correct').show();
            }

        });

        // build available price
        $giftUse.on('click', function(e) {
            e.preventDefault();
            let $this = $(this);

            let $thisFieldNum = $this.parent('li').siblings('li').children('input:text').eq(0); // gift num input
            
            // show success info, if success build html
            if ($thisFieldNum.val() !== '') {

                // clear build variable
                if( tableHtml !== '' ) {
                    tableHtml = '';
                }

                // display alert info
                let alertData = [{
                    alertInfo: '全家禮物卡金額$1000，已使用$300，剩餘$700元，將存入您的『禮券』帳戶。'
                }];
                $.magnificPopup.open({
                    key: 'alert-with-btn',
                    enableEscapeKey: false,
                    closeBtnInside: true,
                    type: 'inline',
                    items: alertData,
                    inline: {
                        markup: `<div class="n-overlay">
                                    <div class="n-overlay__box n-alert__wrap n-alert--small">
                                        <div class="n-alert__body">
                                            <p class="mfp-alertInfo"></p>
                                        </div>
                                        <div class="mfp-markupBtns">
                                            <div class="n-alert__foot n-align-c">
                                                <a class="n-btn n-btn--primary" href="#" title="確定">確定</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`  
                    },
                    callbacks: {
                        open: function() {
                                this.content.find('.n-btn--primary').on('click', function(e) {
                                    e.preventDefault();
                                    $.magnificPopup.close();
                                });
                            }
                    }

                });

                // build gift html
                storeGiftNum = $thisFieldNum.val();
                storePirce = getRand();

                tableHtml += '<ul class="n-d-table__body-row">';
                tableHtml += '<li>' + storeGiftNum + '</li>';
                tableHtml += '<li>' + '$ ' + numberWithCommas(storePirce) + '</li>';
                tableHtml += tableDelMarkup;
                tableHtml += '</ul>';

                $tableLastTr.before(tableHtml);
                $thisFieldNum.val('');

            }
        });


        // Event delegation, delete gift num and gift price
        $giftTable.on('click', '.n-del', function(e) {
            e.preventDefault();
            var $this = $(this);

            $this.closest('ul').remove();

        });


    }
    useGiftDemo();

    // Cart step1 display purchase spec effect
    function purchaseShowSpec() {
    	if ( !document.getElementById('purchaseWrap') ) return false;

    	var $purchaseWrap = $('#purchaseWrap');
    	var $purchaseBtn = $purchaseWrap.find('ul > li .n-btn--black');
    	var $purchaseSpec = $purchaseWrap.find('.n-select__spec');
    	var $specBtn = $purchaseSpec.find(':submit');

    	// show purchase spec
    	$purchaseBtn.on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);

    		$this.closest('li').siblings('li').children('.n-select__spec').removeClass('n-active');
    		$this.siblings('.n-select__spec').addClass('n-active')

    	});

    	// when spec selected
    	$specBtn.on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);

    		$this.parent('.n-select__spec').removeClass('n-active');
    		$this.closest('li').addClass('n-selected');
    	});

    }
    purchaseShowSpec();

    // Cart step2 show product detail
    function showProductDetail() {
        if ( !document.getElementById('cartStep2') ) return false;

        var $cartStep2 = $('#cartStep2');
        var $prodDetail = $cartStep2.find('.n-cart--prod-detail');
        var $prodTable = $prodDetail.find('.n-d-table');
        var $tableBtn = $prodTable.find('.n-cart--detail-total > a');

        var _opetnTxt = '展開購物明細';
        var _closeTxt = '收合購物明細';


        $tableBtn.on('click', function(e){
            e.preventDefault();
            var $this = $(this);
            var _currentTxt = $tableBtn.find('span').eq(2).text();

            // change text
            if ( _currentTxt === _opetnTxt ){
                $this.find('span').eq(2).text('').text(_closeTxt)
            } else if ( _currentTxt === _closeTxt ) {
                $this.find('span').eq(2).text('').text(_opetnTxt)
            }

            // change icon display
            $this.toggleClass('n-is--open');

            if($this.parents('.n-d-table__foot').siblings('.n-d-table__wrap').hasClass('n-is--hide') === true) {
                $this.parents('.n-d-table__foot').siblings('.n-d-table__wrap').removeClass('n-is--hide');
            } else {
                $this.parents('.n-d-table__foot').siblings('.n-d-table__wrap').addClass('n-is--hide');
            }      

        });

    }
    showProductDetail();

    // Cart step2 select payment method, call switch tab funtion
    switchTabEffect('payTab');

    // Cart step2 overseas tab, call switch tab funtion
    switchTabEffect('pay2Tab');

    // Cart step2, add new credit card
    function addNewCreditCard() {
        if ( !document.getElementById('cartStep2') ) return false;

        var $cartStep2 = $('#cartStep2');
        var $payItem1 = $('#payItem1');
        var $cardList = $payItem1 .find('.n-card__list');
        var $cardListLi = $cardList.find('> li');
        var $cardListA = $cardList.find('> li > a');

        // card variable
        var $cardAdded = $payItem1.find('.n-card__added');
        var $inputFields = $payItem1.find('[type="text"]');
        var $inputNum1 = $cardAdded.find('#cardNumber1');
        var $inputNum2 = $cardAdded.find('#cardNumber2');
        var $inputNum3 = $cardAdded.find('#cardNumber3');
        var $inputNum4 = $cardAdded.find('#cardNumber4');
        var $deadlineMobth = $cardAdded.find('#deadlineMobth');
        var $deadlineYear = $cardAdded.find('#deadlineYear');
        var $authCode = $cardAdded.find('#authCode');
        var $resetBtn = $cardAdded.find('.n-btn--normal');
        var $confirmBtn = $cardAdded.find('.n-btn--primary');
        
        // card empty html and html markup variable
        var cardBody = '';
        var cardHead = '<div class="n-card__head"><img class="n-pic" src="Resource/img201703/cart/bank_logo@1x_ctbc.png" alt="玉山銀行"><span>玉山銀行</span><a class="n-right n-card__close" href="" title="關閉"><i class="n-icon--close"></i></a></div>';
        var cardFoot = '<div class="n-card__foot"><span class="n-pr--medium">有效期期限已過 </span><img class="n-right" src="Resource/img201703/cart/visa.png" alt="visa"></div>';

        // show card input fields
        $cardListLi.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            if(!$this.hasClass('n-has--data')){
                // show add new card
                $this.siblings('li').removeClass('current');
                $this.addClass('current');
                $this.parent('.n-card__list').siblings('.n-card__added').children('.n-l-colmb15').removeClass('n-is--hide');
                $this.parent('.n-card__list').siblings('.n-card__added').removeClass('n-is--hide');
            } else {
                // show enter auth code
                $this.parent('.n-card__list').siblings('.n-card__added').children('.n-l-colmb15').not('.n-card--auth').addClass('n-is--hide');
                $this.siblings('li').removeClass('current');
                $this.addClass('current');
                $this.parent('.n-card__list').siblings('.n-card__added').removeClass('n-is--hide');
            }

        });

        // auto jump next input fields
        $inputFields.on('keyup', function() {
            var $this = $(this);

            if( this.value.length === this.maxLength ) {
                $this.parent('.n-form__box').next('.n-form__box').children('[type="text"]').focus();
            }

        });

        // reset card input and close 
        $resetBtn.on('click', function(e) {
            var $this = $(this);
            $this.parents('.n-card__added').addClass('n-is--hide');
            $this.closest('.n-cart--second-box').children('.n-card__list').children('li').removeClass('current');
        });

        // build card html
        $confirmBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            
            // get this value
            var _thisInput1 = $this.closest('.n-card__added').children('.n-l-colmb15').children('.n-form__box').children('#cardNumber1').val();
            var _thisInput2 = $this.closest('.n-card__added').children('.n-l-colmb15').children('.n-form__box').children('#cardNumber2').val();
            var _thisInput3 = $this.closest('.n-card__added').children('.n-l-colmb15').children('.n-form__box').children('#cardNumber3').val();
            var _thisInput4 = $this.closest('.n-card__added').children('.n-l-colmb15').children('.n-form__box').children('#cardNumber4').val();

            cardBody += cardHead;
            cardBody += '<div class="n-card__body">';
            cardBody += '<span>' + _thisInput1 + '</span>';
            cardBody += '<span>' + _thisInput2 + '</span>';
            cardBody += '<span>' + _thisInput3 + '</span>';
            cardBody += '<span>' + _thisInput4 + '</span>';
            cardBody += '</div>';
            cardBody += cardFoot;
            
            // remove n-card__list li below html
            $this.closest('.n-cart--second-box').children('.n-card__list').children('li').not('.n-has--data').children().remove();
            // build card info
            $this.closest('.n-cart--second-box').children('.n-card__list').children('li').not('.n-has--data').append(cardBody);
            // add card style class name
            $this.closest('.n-cart--second-box').children('.n-card__list').children('li').addClass('n-has--data');

            // reset input field
            _thisInput1 = $this.closest('.n-card__added').children('.n-l-colmb15').children('.n-form__box').children('#cardNumber1').val('');
            _thisInput2 = $this.closest('.n-card__added').children('.n-l-colmb15').children('.n-form__box').children('#cardNumber2').val('');
            _thisInput3 = $this.closest('.n-card__added').children('.n-l-colmb15').children('.n-form__box').children('#cardNumber3').val('');
            _thisInput4 = $this.closest('.n-card__added').children('.n-l-colmb15').children('.n-form__box').children('#cardNumber4').val('');

            // hide card input block
            $this.closest('.n-card__added').addClass('n-is--hide');

        });


    }
    addNewCreditCard();

    // Cart step2, add new addressee
    function addNewAddressee() {
        if ( !document.getElementById('cartStep2') ) return false;

        var $cartStep2 = $('#cartStep2');
        var $addresseeInfo = $cartStep2.find('.n-cart--addressee-info');
        var $addedTable = $addresseeInfo.find('.n-d-table');
        var $addedTableWrap = $addedTable.find('.n-d-table__wrap');
        var $addedBtn = $addresseeInfo.find('.n-btn--primary').eq(0);
        var $resetBtn = $addresseeInfo.find('.n-btn--normal');
        var $confirmBtn = $addresseeInfo.find('.n-btn--primary').eq(1);

        var clicks = 0;
        var tableHtml = '';
        var tableRadioMarkup = '<li><input id="addresseeList" type="radio" name="addresseeList"></li>';
        var tableDelMarkup = '<li><a class="n-edit__text" href="" title="編輯"><i class="n-icon--edit"></i>編輯</a></li>'

        // open added blcok
        $addedBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            $this.siblings('.n-add__wrap').removeClass('n-is--hide');

        });

        // reset add input and close 
        $resetBtn.on('click', function() {
            var $this = $(this);
            $this.parents('.n-add__wrap').addClass('n-is--hide');
        });

        // build addressee list
        $confirmBtn.on('click', function(e) {
            e.preventDefault();

            clicks += 1;
            var $this = $(this);

            // get this value
            var _thisReceiveName = $this.closest('.n-cart--enter-field').children().find('#addReceiveName').val();
            var _thisMobilePhone = $this.closest('.n-cart--enter-field').children().find('#mobilePhone').val();
            var _thisReceiveTel = $this.closest('.n-cart--enter-field').children().find('#receiveTel').val();
            var _thisReceivePhone = $this.closest('.n-cart--enter-field').children().find('#receivePhone').val();
            var _thisCountry = $this.closest('.n-cart--enter-field').children().find('#country').val().split(',')[1];
            var _thisCity = $this.closest('.n-cart--enter-field').children().find('#city').val().split(',')[1];
            var _thisCanton = $this.closest('.n-cart--enter-field').children().find('#canton').val().split(',')[1];
            var _thisAddress = $this.closest('.n-cart--enter-field').children().find('#address').val();

            // show error info
            if( _thisReceiveName === '' ) {
                $this.closest('.n-cart--enter-field').children().find('#addReceiveName').siblings('.n-form--error').show(200);
            }

            if( _thisMobilePhone === '' ) {
                $this.closest('.n-cart--enter-field').children().find('#mobilePhone').siblings('.n-form--error').show(200);
            }

            if( _thisAddress === '') {
                $this.closest('.n-cart--enter-field').children('.n-form--address').find('.n-form--error').show(200);
            }

            // build addressee list
            if (_thisReceiveName && _thisMobilePhone && _thisReceiveTel && _thisReceivePhone && _thisCountry && _thisCity && _thisCanton && _thisAddress !== '') {

                $this.closest('.n-cart--enter-field').children().find('#addReceiveName').siblings('.n-form--error').hide(200);
                $this.closest('.n-cart--enter-field').children().find('#mobilePhone').siblings('.n-form--error').hide(200);
                $this.closest('.n-cart--enter-field').children().find('.n-form--error').hide(200);
               
                tableHtml += '<div class="n-d-table__body">';
                tableHtml += '<ul class="n-d-table__body-row">';
                tableHtml += '<li><input id="addresseeList' + clicks + '" type="radio" name="addresseeList"></li>';
                tableHtml += '<li>' + _thisReceiveName + '</li>';
                tableHtml += '<li>' + _thisCanton.split(' ')[1] + '</li>';
                tableHtml += '<li>' + _thisCity + _thisCanton.split(' ')[0] + _thisAddress + '</li>';
                tableHtml += '<li>' + _thisReceiveTel + '-' + _thisReceivePhone + '</li>';
                tableHtml += '<li>' + _thisMobilePhone.slice(0, 4) + '-' + _thisMobilePhone.slice(4, 10) + '</li>';
                tableHtml += tableDelMarkup;
                tableHtml += '</ul>';
                tableHtml += '</div>';

                $addedTableWrap.append(tableHtml);

                // open table list
                $this.closest('.n-l-colmb15').siblings('.n-d-table').removeClass('n-is--hide');

                // reset input field
                $this.closest('.n-cart--enter-field').children().find('#addReceiveName').val('');
                $this.closest('.n-cart--enter-field').children().find('#mobilePhone').val('');
                $this.closest('.n-cart--enter-field').children().find('#receiveTel').val('');
                $this.closest('.n-cart--enter-field').children().find('#receivePhone').val('');
                $this.closest('.n-cart--enter-field').children().find('#country').val('');
                $this.closest('.n-cart--enter-field').children().find('#city').val('');
                $this.closest('.n-cart--enter-field').children().find('#canton').val('');
                $this.closest('.n-cart--enter-field').children().find('#address').val('');

                // hide add wrap
                
                $this.closest('.n-add__wrap').addClass('n-is--hide');

            }

        });

    }
    addNewAddressee();

    // Cart step2, Invoice options Or Deliver time
    function selectInvoiceOrDeliver(step2Id, classElems) {
        if ( !document.getElementById(step2Id) ) return false;

        var cartStep2 = document.getElementById(step2Id);

        var $cartStep2 = $(cartStep2);
        var $classElems = $cartStep2.find(classElems);
        var $cartCtrlGroup = $classElems.find('.n-form__ctrlgroup');
        var $ctrlRadioBtn = $cartCtrlGroup.find('input:radio');

        // console.log(classElems)

        $ctrlRadioBtn.on('click', function() {

            var $this = $(this);

            // if class name is n-cart--invoice show invoice title block
            if (this.getAttribute('id') === 'invoice3') {
                $this.parents('.n-form__ctrlgroup').siblings('.n-form__box').removeClass('n-is--hide');
            }

            // hide displayed element
            $this.parents('li').siblings('li').removeClass('current');
            $this.parents('li').siblings('li').children('.n-form--subbox').addClass('n-is--hide');

            // show element
            $this.parent('.n-form__box').siblings('.n-form--subbox').removeClass('n-is--hide');
            $this.parents('li').addClass('current').prop('checked', true);

        });

    }
    selectInvoiceOrDeliver('cartStep2', '.n-cart--invoice'); // Invoice options use
    selectInvoiceOrDeliver('cartStep2', '.n-cart--deliver'); // Deliver time use



    // Cart step2, common textarea, call Words Count fn
    wordsCount('cartTypeFields', 'cartCountTxt', 15);

});
