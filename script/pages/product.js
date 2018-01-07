
$(function(){

    // product detail main slider effect
    function prodSlider() {
        if (!document.getElementById('prodSlider') && !document.getElementById('prodPager')) return false;

        var prodSlider = document.getElementById('prodSlider');
        var $prodSlider = $(prodSlider);
        var $prodPager = $('#prodPager');

        // product banner invoke Cycle effect with nav has text funtion
        cycleEffectNavText( 'prodSlider' , '.n-prod__content', '#prodPager');

    }
    prodSlider();

	// add product to collect
    function addToCollect() {
        if (!document.getElementById('productDetail')) return false;

        var $productDetail = $('#productDetail');
        var $priceBlock = $productDetail.find('.n-price__block');
        var $collectBtn = $priceBlock.find('.n-prod__collect');

        $collectBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            $this.toggleClass('n-prod--add');

        });
       
    }
    // addToCollect();

    // show discount 
    function showDiscount() {
        if (!document.getElementById('productDetail')) return false;

        // top head right nav
        var $rightTopNavs = $('#rightTopNavs');
        var $topLisLogin = $rightTopNavs.find('li').eq(1);

        // console.log($topLisLogin.text())

        // discount's variable
        var $productDetail = $('#productDetail');
        var $priceBlock = $productDetail.find('.n-price__block');
        var $couponsBtn = $priceBlock.find('#couponsBtn');
        var $coupon = $priceBlock.find('.n-coupon');
        var $closeCoupon = $coupon.find('.n-coupon__head > .n-right');

        // show discount table or alert info
        $couponsBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            // get top head right nav text
            var topRightNavLiTxt = $.trim($this.closest('.n-wrapper').children().children().children().children('#rightTopNavs').find('li').eq(1).text());

            // call alertPopup fn, show alert info
            if (topRightNavLiTxt === '登入') {
                alertWithBtns(
                    '請先登入會員',
                    '您登入會員後，小幫手依據會員折價券帳戶中的折價券試算，提供給您參考商品可適用折抵金額。',
                );

            }
            
            // show discount table
            if( topRightNavLiTxt === '登出' ) {
                $this.siblings('.n-coupon').removeClass('n-is--hide');
            }

        });

        // close discount table
        $closeCoupon.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            $this.closest('.n-coupon').addClass('n-is--hide');

        });

    }
    showDiscount();

    // show pay method
    function showPayMethod() {
        if (!document.getElementById('productDetail')) return false;

        var $productDetail = $('#productDetail');
        var $payMethod = $productDetail.find('.n-pay-method');
        var $installmentList = $payMethod.find('.n-installment__list');
        var $installmentListA = $installmentList.find('a');
        var $installment = $productDetail.find('.n-installment');
        var $installmentHeadA = $installment.find('.n-installment__head > .n-right > .n-right');
        var $installmentTableA = $installment.find('.table .n-blue--link');
        
        // show Pay Method table
        $installmentListA.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.closest('.n-pay-method').siblings('.n-installment').removeClass('n-is--hide');
        });


        // close Pay Method table
        $installmentHeadA.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.closest('.n-installment').addClass('n-is--hide');
        });

        // show bank list
        $installmentTableA.on({
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
    showPayMethod();

    // show sale report
    function showSaleReport() {
        if (!document.getElementById('productDetail')) return false;

        var $productDetail = $('#productDetail');
        var $payMethodWrap = $productDetail.find('.n-pay-method__wrap');
        var $reportBtn = $payMethodWrap.find('.n-sold__report');
        var _btnOffsetTop = $reportBtn.offset().top;
        var $saleReport = $productDetail.find('#saleReport');
        var $reportClose = $saleReport.find('.n-prod__report-head > .n-right');

        // show report
        $reportBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            // scroll to report btn offset top
            $htmlBody.animate({
                scrollTop: _btnOffsetTop 
            }, 500);

            $this.siblings('.n-prod__report').removeClass('n-is--hide');
        });

        // close report
        $reportClose.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.closest('.n-prod__report').addClass('n-is--hide');
        });

    }
    showSaleReport();

    // show not yet sold info
    function showNotYetSoldInfo() {
        if (!document.getElementById('productDetail')) return false;

        const $productDetail = $('#productDetail');
        const $chooseWrap = $productDetail.find('.n-choose__wrap');        

        $chooseWrap.on('click', '.n-choose__btn .n-btn', function(e) {
            e.preventDefault();
            var $this = $(this);

            if($.trim($this.text()) === '尚未開賣') {
                // alertPopup();
            }
            

        });


    }
    showNotYetSoldInfo();

    // increase list effect
    function increaseShowEffect() {
        if (!document.getElementById('increaseList')) return false;

        var $increaseList = $('#increaseList');
        var $increaseLi = $increaseList.find('li');
        var $increaseBlackBtn = $increaseLi.find('.n-btn--black');
        var $selectSpec = $increaseLi.find('.n-select__spec');
        var $selectSpecBtn = $selectSpec.find('.n-btn--primary');
        
        // show spec block
        $increaseBlackBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            // hide other spec block
            $this.closest('li').siblings('li').children('.n-select__spec').removeClass('n-active');

            $this.siblings('.n-select__spec').addClass('n-active');

        });

        // hide speck blcok and and selecte style
        $selectSpecBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            $this.parent('.n-select__spec').removeClass('n-active');
            $this.closest('li').addClass('n-selected');

        });

    }
    increaseShowEffect();

    // hot promo slider banner
    function bnPromo() {
        if (!document.getElementById('bnPromo')) return false;

        var bnPromo = document.getElementById('bnPromo');
        var $bnPromo = $(bnPromo);

        // product banner invoke Cycle effect with nav has text funtion
        cycleEffectNavText( 'bnPromo' , 'a', '#bnPromoNav');

    }
    bnPromo();
});
