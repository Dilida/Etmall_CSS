'use strict';
$(function(){

    // index login demo
    function loginEffect() {
        if ( !document.getElementById('rightTopNavs') ) return false;

        var $rightTopNavs = $('#rightTopNavs');
        var $rightTopli = $rightTopNavs.find('li');
        var $rightTopA =  $rightTopli.find('a');
        var $memInfoBox = $('#memInfoBox');
        var signOut = '登出';

        $rightTopA.eq(1).on('click', function(e) {
        	e.preventDefault();
        	var $this = $(this);

            if ($this.text() === '登入') {
                $this.text('登出');
                $memInfoBox.find('.n-mem-info__box').addClass('n-is--hide');
                $memInfoBox.find('.n-mem-info__signed').removeClass('n-is--hide');
            } else if($this.text() === '登出') {
            	$this.text('登入');
            	$memInfoBox.find('.n-mem-info__signed').addClass('n-is--hide');
                $memInfoBox.find('.n-mem-info__box').removeClass('n-is--hide');
            }

        });

    }
    loginEffect();

    // topic page demo
    function selectTemp() {
        if ( !document.getElementById('selectTemp') ) return false;

        var $selectTemp = $('#selectTemp');
        var $topicTempl1 = $('#topicTempl1');
        var $topicTempl2 = $('#topicTempl2');
        var $topicTempl3 = $('#topicTempl3');

        // console.log($topicTempl2, $topicTempl3)

        $selectTemp.on('change', function() {
            // console.log($('input[name=template]:checked', $selectTemp).val());

            if( $('input[name=template]:checked', $selectTemp).val() === '2' ) {
                $topicTempl1.hide();
                $topicTempl3.hide();
                $topicTempl2.show();
            }
            if( $('input[name=template]:checked', $selectTemp).val() === '3' ) {
                $topicTempl1.hide();
                $topicTempl3.show();
                $topicTempl2.hide();
            }
            if( $('input[name=template]:checked', $selectTemp).val() === '1' ) {
                $topicTempl1.show();
                $topicTempl3.hide();
                $topicTempl2.hide();
            }

        });
    }
    selectTemp();

    // product page demo
    function prodSelectTemp() {
        if ( !document.getElementById('productDetail') ) return false;

        const $selectProdTemp = $('#selectProdTemp');
        const $productDetail = $('#productDetail');
        const $chooseWrap = $productDetail.find('.n-choose__wrap');
        const $chooseLi = $chooseWrap.find('> li'); 
        const $chooseDelivery = $chooseWrap.find('> .n-choose__radio'); 
        const $chooseSpecs = $chooseWrap.find('> .n-choose__spec');

        const prodTemp1 = '<li class="n-choose__spec"> <ul> <li> <label for="s1">顏色：</label> <select class="n-form--control" id="s1"> <option value="1435_0">黑色</option> <option value="1503_0">灰色</option> </select> </li> <li> <label for="s2">樣式：</label> <select class="n-form--control" id="s2"> <option value="1306_0">M</option> <option value="1307_0">L</option> </select> </li> <li> <label for="s3">數量：</label> <select class="n-form--control" id="s3"> <option value="1">1</option> </select> </li> </ul> </li> <li class="n-choose__btn"> <div class="n-left"> <button class="n-btn n-btn--primary" type="button">立即結帳</button> <button class="n-btn n-btn--lv2" type="button"> <i class="n-icon--cart"></i>加入購物車</button> </div> <ul class="n-left n-list--disc"> <li><a class="n-blue--link" href="" title="任選兩件350 搶購">任選兩件350 搶購</a></li> <li><a class="n-blue--link" href="" title="滿千現折＄100 ">滿千現折＄100 </a></li> </ul> </li>';

        const prodTemp2 = '<li class="n-choose__spec n-choose--kit"> <div class="n-choose--caption n-title--13">夏朵小香風精品羊毛軟呢褲</div> <ul> <li> <label for="s1">顏色：</label> <select class="n-form--control" id="s1"> <option value="1435_0">黑色</option> <option value="1503_0">灰色</option> </select> </li> <li> <label for="s2">樣式：</label> <select class="n-form--control" id="s2"> <option value="1306_0">M</option> <option value="1307_0">L</option> </select> </li> <li> <label for="s3">數量：</label> <select class="n-form--control" id="s3"> <option value="1">1</option> </select> </li> </ul> <div class="n-choose--caption n-title--13">夏朵小香風精品羊毛軟呢外套</div> <ul> <li> <label for="s-1">顏色：</label> <select class="n-form--control" id="s-1"> <option value="1435_0">黑色</option> <option value="1503_0">灰色</option> </select> </li> <li> <label for="s-2">樣式：</label> <select class="n-form--control" id="s-2"> <option value="1306_0">M</option> <option value="1307_0">L</option> </select> </li> <li> <label for="s-3">數量：</label> <select class="n-form--control" id="s-3"> <option value="1">1</option> </select> </li> </ul> </li> <li class="n-choose__btn"> <div class="n-left"><a class="n-btn n-btn--disabled" href="#" title="銷售一空">銷售一空</a> <button class="n-btn n-btn--normal" type="button"> <i class="n-icon--mail"></i>貨到通知我</button> </div> <ul class="n-left n-list--disc"> <li><a class="n-blue--link" href="" title="任選兩件350 搶購">任選兩件350 搶購</a></li> <li><a class="n-blue--link" href="" title="滿千現折＄100 ">滿千現折＄100 </a></li> </ul> </li>';

        const prodTemp3 = '<li class="n-choose__spec"> <ul> <li> <label for="s1">顏色：</label> <select class="n-form--control" id="s1"> <option value="1435_0">黑色</option> <option value="1503_0">灰色</option> </select> </li> <li> <label for="s2">樣式：</label> <select class="n-form--control" id="s2"> <option value="1306_0">M</option> <option value="1307_0">L</option> </select> </li> <li> <label for="s3">數量：</label> <select class="n-form--control" id="s3"> <option value="1">1</option> </select> </li> </ul> </li> <li class="n-increase__result"> <div class="n-title--13">已選取加價購的商品</div> <div class="n-increase__box"> <div class="n-left"> <p class="n-increase__head"><span class="n-increase__name">愛運動 -前拉式運動背心~專業防震透氣美型性感上</span><span class="n-price--16">$<span>1,111,680</span></span></p> <p class="n-increase__spec"><span>顏色：藍色</span><span>樣式：S</span><span>數量：1</span></p> </div><a class="n-right" href="" title="刪除此商品"><i class="n-icon--close"></i></a> </div> <div class="n-increase__box"> <div class="n-left"> <p class="n-increase__head"><span class="n-increase__name">愛運動 -前拉式運動背心~專業防震透氣美型性感上</span><span class="n-price--16">$<span>1,111,680</span></span></p> <p class="n-increase__spec"><span>顏色：藍色</span><span>樣式：S</span><span>數量：1</span></p> </div><a class="n-right" href="" title="刪除此商品"><i class="n-icon--close"></i></a> </div> <div class="n-increase__box"> <div class="n-left"> <p class="n-increase__head"><span class="n-increase__name">愛運動 -前拉式運動背心~專業防震透氣美型性感上</span><span class="n-price--16">$<span>1,111,680</span></span></p> <p class="n-increase__spec"><span>顏色：藍色</span><span>樣式：S</span><span>數量：1</span></p> </div><a class="n-right" href="" title="刪除此商品"><i class="n-icon--close"></i></a> </div> </li> <li class="n-choose__btn"> <div class="n-left"> <button class="n-btn n-btn--disabled" type="button">尚未開賣</button> </div> <ul class="n-left n-list--disc"> <li><a class="n-blue--link" href="" title="任選兩件350 搶購">任選兩件350 搶購</a></li> <li><a class="n-blue--link" href="" title="滿千現折＄100 ">滿千現折＄100 </a></li> </ul> </li>';


        $selectProdTemp.on('change', function() {
            let selectVal = $('input[name=template]:checked', $selectProdTemp).val();

            switch( selectVal ) {
                case '1': 

                    if ( $chooseWrap.find('.n-choose--kit').length !== 0 ) {
                        console.log(1);
                        $chooseWrap.find('.n-choose--kit').remove();
                        $chooseWrap.find('.n-choose__btn').remove();
                        $chooseWrap.append(prodTemp1);
                    }

                    if ( $chooseWrap.find('.n-increase__result').length !== 0 ) {
                        console.log(21);
                        $chooseWrap.find('.n-choose__spec').remove();
                        $chooseWrap.find('.n-increase__result').remove();
                        $chooseWrap.find('.n-choose__btn').remove();
                        $chooseWrap.append(prodTemp1);
                    }
                    
                    break;

                case '2': 
                    
                    if( $chooseWrap.find('.n-increase__result').length !== 0 ) {
                        $chooseWrap.find('.n-increase__result').remove(); 
                    }

                    $chooseWrap.find('.n-choose__spec').remove();
                    $chooseWrap.find('.n-choose__btn').remove();
                    $chooseWrap.append( prodTemp2 );

                    break;

                case '3': 
                    
                    $chooseWrap.find('.n-choose__spec').remove();
                    $chooseWrap.find('.n-choose__btn').remove();
                    $chooseWrap.append( prodTemp3 );

                    break;

            }
            
        });

    }
    prodSelectTemp();

    function selectRegisterTemplate() {
        if ( !document.getElementById('registerDone') ) return false;

        const registerDone = document.getElementById('registerDone');
        const doneStyle1 = registerDone.querySelectorAll('.n-reg__body .n-doneStyle-1')[0];
        const doneStyle2 = registerDone.querySelectorAll('.n-reg__body .n-doneStyle-2')[0];;


        const radioStyle1 = document.getElementsByName('template')[0];
        const radioStyle2 = document.getElementsByName('template')[1];

        console.log(doneStyle1, doneStyle2);

        radioStyle2.addEventListener('click', function() {
            if( this.value === '2' ) {
                doneStyle1.classList.add('n-is--hide');
                doneStyle2.classList.remove('n-is--hide');
            }
        });

        radioStyle1.addEventListener('click', function() {
            if( this.value === '1' ) {
                doneStyle2.classList.add('n-is--hide');
                doneStyle1.classList.remove('n-is--hide');
            }
        });




    }
    selectRegisterTemplate();
    
});
