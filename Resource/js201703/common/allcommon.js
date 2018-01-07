'use strict';
//Global Variable Setting
const _window = $(window);
const _document = $(document);
const $htmlBody = $('html, body');

//Common Effect fn
//write below

//go top effect
const goTopEffect = function(selectors) {
    selectors.on('click', function(e) {
        e.preventDefault();
        $htmlBody.animate({
            scrollTop: 0
        }, 500);
    });
};

//click out side hide effect
const clickOutSide = function(hideElems) {

    var $hideBox = $(hideElems);

    _document.on('mouseup', function(e) {

        if (!$hideBox.is(e.target) && $hideBox.has(e.target).length === 0) {

            $hideBox.hide();
        }

        if ($hideBox.attr('class') == 'n-search__catalog-drop') {

            $hideBox.closest('.n-search__catalog').removeClass('is--drop');

        }

    });
};


// tab switch effect
const switchTabEffect = function(tabId) {

    if (!document.getElementById(tabId)) return false;

    var tabId = document.getElementById(tabId);
    var $tabUl = $(tabId);
    var $tabUlLi = $tabUl.find('li')
    var $tabUlLiA = $tabUlLi.find('a');

    $tabUlLiA.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var clickHref = $this.attr('href');

        //tab nav highlight effect
        $this.closest('li').addClass('current').siblings().removeClass("current");
        $this.closest('li').addClass('current');

        if ( $this.parent().parent().parent('div').length === 1 ) {
            console.log('style1');
            if ( $this.parent().parent('#deliverTab').length === 1 || $this.parent().parent('#forgetTab').length === 1 ) {
                $(clickHref).fadeIn(200).siblings('div').hide();
            } else {
                $(clickHref).fadeIn(200).siblings('div').hide();
                $(clickHref).siblings('div').eq(0).show();
                $(clickHref).siblings().children('.n-tab__sub-lv3').parent().show();
            }
        }

        if( $this.parent().parent().parent('div').length === 0 ) {
            console.log('style2');
            $(clickHref).fadeIn(200).siblings('div').hide();
            $(clickHref).siblings('div').eq(0).show();
        }
        
    });

};

// Cycle effect with nav has text
const cycleEffectNavText = function(elemId, slidesElems, pagerElems) {
    if (!document.getElementById(elemId)) return false;

    var elemId = document.getElementById(elemId);
    var $elemId = $(elemId);

    var cycleOption = {
        slides: slidesElems,
        slideCss: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        speed: 500,
        timeout: 3000,
        pauseOnHover: true,
        pagerEvent: 'mouseover',
        pager: pagerElems,
        pagerActiveClass: 'current',
        pagerTemplate: ''
    };
    
    var elemIdName = $elemId[0].id;

    const baseCycle = function() {
        $elemId.cycle(cycleOption);
    }

    const topBnCycle = function() {
        cycleOption['pagerTemplate'] = '<a href="#"></a>';
        $elemId.cycle(cycleOption);
    }
    
    const autoHeightWithoutNav = function() {
        cycleOption['autoHeight'] = 'container';
        $elemId.cycle(cycleOption);
    }

    const autoHeightCycle = function() {
        cycleOption.slideCss = undefined;
        cycleOption['autoHeight'] = 'container';
        cycleOption['pagerTemplate'] = '<a href="#"></a>';
        $elemId.cycle(cycleOption);
    }

    const cycleWithoutTimeout = function() {
        cycleOption.timeout = 0;
        $elemId.cycle(cycleOption);
    }

    switch (elemIdName) {
        case 'topFiveBanner':
            topBnCycle();
            break;
        case 'bnChannel':
        case 'bnEvent':
            cycleWithoutTimeout();
            break;
        case 'bnPromo':
            autoHeightCycle();
            break;
        case 'prodSlider':
            autoHeightWithoutNav();
            break;
        default:
            baseCycle();
    }

    // let triggerCycle = {
    //     'bnChannel': cycleWithoutTimeout(),
    //     'bnEvent': cycleWithoutTimeout(),
    //     'bnPromo': autoHeightCycle(),
    //     'prodSlider': autoHeightWithoutNav()
    // }

    // triggerCycle[elemIdName];

    // var func1 = function(){
    //     cycleOption.timeout = 0;
    //     $elemId.cycle( cycleOption);
    // }

    // var func2 = function(){
    //     console.log('fhgjdhfgkjdfh');
    //     cycleOption.slideCss = undefined;
    //     cycleOption['autoHeight'] = 'container';
    //     cycleOption['pagerTemplate'] = '<a href="#"></a>';
    //     $elemId.cycle( cycleOption ); 
    // }
    // var func = {
    //         'bnChannel' : func1(),
    //         'bnEvent' : func2(),
    //     }

    // elemIdName = 'bnEvent';
    // func.bnEvent;
    // func['bnEvent'];
 
};


// generate price commas
const numberWithCommas = function( price ) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};  

// Character countdown
const wordsCount = function(fieldId, countId, countNum) {
    if (!document.getElementById(fieldId) && !document.getElementById(countId)) return false;

    var fieldId = document.getElementById(fieldId);
    var countId = document.getElementById(countId);

    var $writeMsg = $('#writeMsg');
    var $fieldId = $(fieldId);
    var $countId = $(countId);
    var _countLength = countNum;

    var _count = null;
    var _countWordFirst = '剩餘字數：';
    var _countWordLast = '字';

    _count = _countWordFirst + _countLength + _countWordLast;

    $countId.html(_count);

    // setting textarea max length
    $fieldId.attr('maxlength', _countLength);

    // Calculate how many words are entered
    $fieldId.on('keyup', function(e) {
        e.preventDefault();
        var $this = $(this);
        var _thisLength = $this.val().length;
        var _thisRemaining = _countLength - _thisLength;

        $countId.html(_countWordFirst + _thisRemaining + _countWordLast);
    });

};

// alert modules block
const alertModuleOpts = {
    enableEscapeKey: false,
    closeBtnInside: true,
    type: 'inline',
}

const alertModule = function( alertTitle, alertInfo, callbackFn ) {
    let alertData = [{
        alertTitle: alertTitle,
        alertInfo: alertInfo
    }];
    $.magnificPopup.open({
        key: 'alet-pop',
        alertModuleOpts,
        items: alertData,
        inline: {
            markup: `<div class="n-overlay">
                        <div class="n-overlay__box n-alert__wrap n-alert--small">
                            <div class="n-alert__body">
                                <p class="n-title--15 mfp-alertTitle"></p>
                                <p class="mfp-alertInfo"></p>
                            </div>
                        </div>
                    </div>` 
        },
        callbacks: {
            open: callbackFn
        }
    });
};

const alertWithBtns = function( alertTitle, alertInfo) {
    let alertData = [{
        alertTitle: alertTitle,
        alertInfo: alertInfo
    }];
    $.magnificPopup.open({
        key: 'alert-with-btn',
        alertModuleOpts,
        items: alertData,
        inline: {
            markup: `<div class="n-overlay n-select__wrap">
                        <div class="n-overlay__box n-alert__wrap">
                            <div class="n-alert__body">
                                <p class="n-title--15 mfp-alertTitle"></p>
                                <p class="mfp-alertInfo"></p>
                            </div>
                            <div class="mfp-markupBtns">
                                <div class="n-alert__foot n-align-c">
                                    <a class="n-btn n-btn--lv3" href="#" title="取消">取消</a> 
                                    <a class="n-btn n-btn--primary" href="#" title="確定">確定</a>
                                </div>
                            </div>
                        </div>
                    </div>`  
        },
        callbacks: {
            open: function() {
                    this.content.find('.n-btn--lv3').on('click', function(e) {
                        e.preventDefault();
                        $.magnificPopup.close();
                    });
                }
        }
    });
}

// show hide category left side of the nav
function showLeftCategory( categoryId ) {

    if ( !document.getElementById(categoryId) ) return false;

    var categoryId = document.getElementById(categoryId);

    var $categoryId = $(categoryId);
    var $leftGrayNav = $categoryId.find('.n-aside__category');
    var $leftAsideMore = $categoryId.find('.n-aside__more');
   
   // click more btn show other nav itme
    $leftAsideMore.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);

        // hide nav itme
        $this.closest('.n-aside__category').siblings('.n-aside__category').not('.n-aside--marketing').children('.n-aside__nav').children('li').removeClass('n-is--show');
        $this.closest('.n-aside__category').siblings('.n-aside__category').not('.n-aside--marketing').children('.n-aside__more').removeClass('n-is--open');

        // show nav itme
        $this.siblings('.n-aside__nav').children('li').addClass('n-is--show');
        $this.addClass('n-is--open');

    });

}

$(function(){

    // Top Ad  Call Cycle effect with nav has text funtion
    cycleEffectNavText('topFiveBanner', '>a', '#topBannerNav');

    // Inside pages hover menu effect
    function menuHoverSwitch() {
        if (!document.querySelector('.n-inside--head')) return false;

        const $header = $('.n-header');
        const $navWrap = $('.n-nav__wrap');
        const $navBox = $navWrap.find('.n-nav__box');
        
        let hoverEffect;

        $navBox.on({
            mouseenter: function () {
                const $this = $(this);
                hoverEffect = setTimeout(function () {
                    $this.find('.n-nav__list').removeClass('n-nav--hide');
                }, 300);
            },
            mouseleave: function () {
                const $this = $(this);
                $this.find('.n-nav__list').addClass('n-nav--hide');
                clearTimeout(hoverEffect);
            }
        });
        

    }
    menuHoverSwitch();

    // Scroll page over height 960 dispaly fixed search
    function scrollDisplaySearch() {
        if (!document.getElementById('mainNav')) return false;

        var mainNav = document.getElementById('mainNav');
        var $wrapper = $('.n-wrapper');
        var $header = $('.n-header');
        var $headerTop = $('.n-header__top');
        var $headerBody = $('.n-header__body');
        var $navWrap = $('.n-nav__wrap');
        var $headLogo = $headerBody.find('.n-layout--lg > .n-left > a');

        var _headerHeight = $header.outerHeight()

        var _insideHead = $header.attr('class').split(' ')[1];
        var stopStopSellHead = $header.attr('id');

        _window.on('scroll', function() {

            if( stopStopSellHead === 'stopSellHead' ) {
                if ( _document.scrollTop() >= _headerHeight ) {
                    $('.n-nav__list').addClass('n-nav--hide');
                } else {
                    $('.n-nav__list').removeClass('n-nav--hide');
                }
            }

            switch( _insideHead ) {
                case 'n-inside--head' :

                    if ( _document.scrollTop() >= _headerHeight ) {
                        $wrapper.addClass('n-inside--has-fixed');
                        $headerTop.addClass('n-inside--fixed');
                        $headerBody.addClass('n-inside--fixed');
                        $navWrap.addClass('n-inside--fixed');
                    } else {
                        $wrapper.removeClass('n-inside--has-fixed');
                        $headerTop.removeClass('n-inside--fixed');
                        $headerBody.removeClass('n-inside--fixed');
                        $navWrap.removeClass('n-inside--fixed');
                    }

                    break;

                default: 

                    if ($headLogo.hasClass('n-ehs--logo-newyear') === true) {

                        if (_document.scrollTop() >= 960) {
                            $headLogo.removeClass('n-ehs--logo-newyear');
                            $headerTop.addClass('n-fixed--elems');
                            $headerBody.addClass('n-is--fixed');
                        } else {
                            $headLogo.addClass('n-ehs--logo-newyear');
                            $headerTop.removeClass('n-fixed--elems');
                            $headerBody.removeClass('n-is--fixed')
                        }

                    } else {

                        if (_document.scrollTop() >= 960) {
                            $headerTop.addClass('n-fixed--elems');
                            $headerBody.addClass('n-is--fixed');
                        } else {
                            $headerTop.removeClass('n-fixed--elems');
                            $headerBody.removeClass('n-is--fixed')
                        }

                    }

            }
        });

    }
    scrollDisplaySearch();

    // Detect current url, if index show menu else hide menu
    function hideMainNavHoverShow() {
        var $mainNav = $('#mainNav');
        var $navTitle = $mainNav.parent('.n-nav__box');
 
        // Get current url name
        var currentUrl = window.location.pathname.split('/');
            currentUrl = currentUrl[currentUrl.length - 1].split('.');
            currentUrl = currentUrl[0];
        
        if(currentUrl !== '') {
            // hide nav
            $mainNav.addClass('n-nav--hide');
            // trigger hover dispaly main nav
            $navTitle.addClass('n-nav--hover');
        }

    }
    // hideMainNavHoverShow();

    // first menu sub menu hover effect
    function flagshipHoverEffect() {
        if (!document.getElementById('navFlagship')) return false;

        var navFlagship = document.getElementById('navFlagship');
        var navFlagshipBox = document.getElementById('navFlagshipBox');

        var $navFlagship = $(navFlagship);
        var $navFlagshipBox = $(navFlagshipBox);
        var $navFlagshipUl = $navFlagshipBox.find('ul');

        // trigger menu hover
        $navFlagship.menuAim({
            activate: activeFlagshipMenu,
            exitMenu: function() {
                return true;
            }
        });

        // trigger menu hover, main function
        function activeFlagshipMenu( flagshipLi ){

            var $flagshipLi = $(flagshipLi);
            var liIndex = $flagshipLi.index();
            
            $flagshipLi.siblings('li').children('a').removeClass('current');
            $flagshipLi.children('a').addClass('current');

            $navFlagshipUl.eq(liIndex).siblings('ul').hide();
            $navFlagshipUl.eq(liIndex).show();

        }
    }

    //nav hover effect
    function mainNavHover() {

        if (!document.getElementById('mainNav')) return false;

        var mainNav = document.getElementById('mainNav');

        var $mainNav = $(mainNav);
        var $navLi = $mainNav.find('> li');
        var _liHeight = $navLi.outerHeight();

        // console.log( $navLi);
        
        //all main nav hover
        $mainNav.menuAim({
            activate: activeMenu,
            deactivate: deactiveMenu,
            exitMenu: function() {
                return true;
            }
        });

        // trigger menu hover, main function
        function activeMenu(li) {

            var $li = $(li);
            var $liHeight = $li.outerHeight();
            var $navSubMenu = $li.find('.n-nav-sub');

            $navSubMenu.css({
                display: 'block',
                top: 0
            }); 

            // Call First menu of sub menu hover effect
            flagshipHoverEffect();

            // menu display position

            $navLi.slice(-5).find('.n-nav-sub').css({

                top: 200

            });

        }

        // cancel menu hover
        function deactiveMenu(li) {
            var $li = $(li);
            $li.find('.n-nav-sub').css({
                display: 'none'
            });
        }

    }
    mainNavHover();

    // Global search autocomplate
    function globalSearch() {
        if (!document.getElementById('globalSearch')) return false;

        var autoSource = [
            {
                label: "NEOFLAM",
                value: "180",
                marked: ''
            }, 
            {
                label: "ike",
                value: "150",
                marked: 'n'
            }, 
            {
                label: "NEOFLAM 鍋",
                value: "1220",
                marked: ''
            },
            {
                label: "ike 女",
                value: "1220",
                marked: 'n'
            },
            {
                label: "ike 鞋",
                value: "1220",
                marked: 'n'
            },
        ];

        var $globalSearch = $('#globalSearch');
        var $searchInput = $globalSearch.find('[type=text]');

        $searchInput.autocomplete({
            minLength: 0,
            delay: 300,
            source: autoSource,
        }).autocomplete('instance')._renderItem = function(ul, autoSource) {
             return $('<li>')
                .append('<div>' + '<b>' + autoSource.marked + '</b>' + autoSource.label +  '<span class="n-right">' + autoSource.value + '</span>' + '</div>')
                .appendTo(ul);
        };
    }
    globalSearch();

    // Go to top 
    function goToTop() {
        if (!document.getElementById('goTop')) return false;

        var $goTop = $('#goTop');

        $goTop.on('click', function(e) {
            e.preventDefault();
            $htmlBody.animate({
                scrollTop: 0
            }, 500);
        });

        _window.on('scroll', function() {
            if(_document.scrollTop() >= 990) {
                $goTop.css({
                    opacity: 1
                });
            } else {
                $goTop.css({
                    opacity: 0
                });
            }
        });

    }
    goToTop();

    // full site effect, add collection then show message
    function addCollectionShowMsg() {
        if ( !document.getElementById('middleCategory') && !document.getElementById('smallCategory') && !document.getElementById('searchResult') && !document.getElementById('productDetail') && !document.getElementById('stopSellingProd') ) return false;

        // middle and small category page variable
        const $btnCollection = $('.n-btn--card-icon');

        // product page variable
        const $collectBtn = $('.n-prod__collect');

        // add product to collection variable
        let addedProductTitle = '加入收藏';
        let addedProductInfo = '此商品已經加入至您的蒐藏清單，您可以到會員中心查看此商品。';
        let addedProductCallbacksFn = function() {
                                            setTimeout(function() {
                                                $.magnificPopup.close();
                                            }, 2000)
                                        };
        let markup = `<div class="n-overlay">
                        <div class="n-overlay__box n-alert__wrap n-alert--small">
                            <div class="n-alert__body">
                                <p class="n-title--15 mfp-alertTitle"></p>
                                <p class="mfp-alertInfo"></p>
                            </div>
                        </div>
                    </div>` 



        // remove product fom collection variable
        let removeProductTitle = '移除蒐藏!';
        let removeProductInfo = '此商品已經自您的蒐藏清單移除，您蒐藏清單已無此商品。';
        let removeProductCallbacksFn = function() {
                                            setTimeout(function() {
                                                $.magnificPopup.close();
                                            }, 1500)
                                        };


        // search result, middle category, small category pages, collection btn
        $btnCollection.on('click', function(e) {
            let $this = $(this);

            if( $this.hasClass('n-btn--active') === false ){

                alertModule( addedProductTitle, addedProductInfo, addedProductCallbacksFn );

            } else {
                alertModule( removeProductTitle, removeProductInfo, removeProductCallbacksFn );
            }

        });

        // porduct page, collection btn
        $collectBtn.on('click', function(e) {
            let $this = $(this);

            if( $this.hasClass('n-prod--add') === false ){
                alertModule( addedProductTitle, addedProductInfo,  addedProductCallbacksFn );
            } else {
                alertModule( removeProductTitle, removeProductInfo, removeProductCallbacksFn );
            }

        });

    }
    addCollectionShowMsg();

    // full site effect, add collection icon
    function addCollection() {
        if ( !document.getElementById('middleCategory') && !document.getElementById('smallCategory') && !document.getElementById('searchResult') && !document.getElementById('productDetail')  && !document.getElementById('stopSellingProd')  ) return false;

        // middle and small category page variable
        const $btnCollection = $('.n-btn--card-icon');

        $btnCollection.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            $this.toggleClass('n-btn--active');
        });

        // product page variable
        const $collectBtn = $('.n-prod__collect');

        //  product page effect
        // if ( document.getElementById('productDetail') ) {

        //     $collectBtn.on('click', function(e) {
        //         e.preventDefault();
        //         var $this = $(this);

        //         $this.toggleClass('n-prod--add');
        //     });

        // } else {

        //     // middle and small category effect
        //     $btnCollection.on('click', function(e) {
        //         e.preventDefault();
        //         var $this = $(this);

        //         $this.toggleClass('n-btn--active');
        //     });

        // }

    }
    addCollection();

    // Product quick view page slider
    function quickViewCycly() {
        if( !document.getElementsByClassName('overlaySlider') ) return false;

        const overlaySlider = document.getElementsByClassName('overlaySlider');
        const $overlaySlider = $(overlaySlider);

        $overlaySlider.cycle({
            slides: '.n-prod__content',
            slideCss: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            speed: 500,
            timeout: 3000,
            pauseOnHover: true,
            autoHeight: 'container',
            pagerEvent: 'mouseover',
            pager: '.overlayPager',
            pagerActiveClass: 'current',
            pagerTemplate: ''
        });

    }
    quickViewCycly();

    // Product quick view page , show discount
    function showQuickViewDiscount() {
        if( !document.getElementsByClassName('overlayCouponsBtn') ) return false;

        const overlayCouponsBtn = document.getElementsByClassName('overlayCouponsBtn');
        const $overlayCouponsBtn = $(overlayCouponsBtn);
        const $closeCouponsBtn = $overlayCouponsBtn.siblings('.n-prod__pop').find('.n-coupon__head .n-right');

        $overlayCouponsBtn.on('click', function(e){
            e.preventDefault();
            var $this = $(this);
            $this.siblings('.n-prod__pop').removeClass('n-is--hide');

        });

        $closeCouponsBtn.on('click', function(e){
            e.preventDefault();
            var $this = $(this);
             $this.closest('.n-coupon').addClass('n-is--hide');
        });

    }
    showQuickViewDiscount();

     // Product quick view page , show pay method
    function showQuickViewPayMethod() {
        if( !document.getElementsByClassName('n-prod--overlay') ) return false;

        const prodOverlay = document.getElementsByClassName('n-prod--overlay');
        const $prodOverlay = $(prodOverlay);
        const $overlayInstallmentList = $prodOverlay.find('.n-installment__list');
        const $overlayInstallmentListA = $overlayInstallmentList.find('a');

        const $overlayInstallment = $prodOverlay.find('.n-installment');
        const $overlayInstallmentHeadA = $overlayInstallment.find('.n-installment__head > .n-right > .n-right');
        const $overlayInstallmentTableA = $overlayInstallment.find('.table .n-blue--link');

        // show Pay Method table
        $overlayInstallmentListA.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.closest('.n-pay-method').siblings('.n-installment').removeClass('n-is--hide');
        });

        // close Pay Method table
        $overlayInstallmentHeadA.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.closest('.n-installment').addClass('n-is--hide');
        });

        // show bank list
        $overlayInstallmentTableA.on({
            mouseenter: function() {
                var $this = $(this);
                $this.closest('.table').siblings('.n-prod__bank').removeClass('n-is--hide');
            },
            mouseleave: function() {
                var $this = $(this);
                $this.closest('.table').siblings('.n-prod__bank').addClass('n-is--hide');
            }
        });

    }
    showQuickViewPayMethod();

    function showQuickViewLayout() {
        if ( !document.getElementById('middleCategory') && 
             !document.getElementById('smallCategory') && 
             !document.getElementById('searchResult') && 
             !document.getElementById('productDetail') && 
             !document.getElementById('stopSellingProd') && 
             !document.getElementById('flagshipNormal') && 
             !document.getElementById('trackList1')  ) return false;

        const $pageCartBtn = $('.n-btn--card-red');

        $pageCartBtn.on('click', function(e){
            e.preventDefault();
            $.magnificPopup.open({
                items: {
                    src: '#quickViewLayout',
                    type: 'inline'
                }
            });
        });

    }
    showQuickViewLayout();

    function showArrivalNoticeMe() {
        if (
            !document.getElementById('middleCategory') && 
            !document.getElementById('smallCategory') && 
            !document.getElementById('searchResult') && 
            !document.getElementById('productDetail') && 
            !document.getElementById('stopSellingProd') && 
            !document.getElementById('flagshipNormal') &&
            !document.getElementById('trackList1') ) return false;

        const $arrivalNoticeBtn = $('.n-btn--normal');

        $arrivalNoticeBtn.on('click', function (e) {
            e.preventDefault();
            $.magnificPopup.open({
                items: {
                    src: '#productNotice',
                    type: 'inline'
                }
            });
        });
    }
    showArrivalNoticeMe();


    

});

$.validator.setDefaults({
    errorClass: 'n-form--error',
    errorElement: 'p',
    errorPlacement: function ( error, element ) {
        error.insertAfter( element );
    },
    highlight: function ( element, errorClass, validClass ) {
		$( element ).parents( '.n-form__box' ).addClass( 'n-has--error' ).removeClass( 'n-has-success' );
	},
	unhighlight: function (element, errorClass, validClass) {
		$( element ).parents( '.n-form__box' ).addClass( 'n-has-success').removeClass( 'n-has--error' );
	}
})