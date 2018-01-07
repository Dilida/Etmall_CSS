
$(function(){

    // rank block Call switch tab funtion
    switchTabEffect('middleRankTab');

    // middle category page invoke
    showLeftCategory('middleCategory'); 
    // small category page invoke
    showLeftCategory('smallCategory'); 


    // product list effect, switch square or list and add love
    function tooggleDispalyStyle( categoryListId ) {
        if (!document.getElementById( categoryListId )) return false;

        var categoryId = document.getElementById( categoryListId );

        var $categoryId = $(categoryId);
        var $categoryTool = $categoryId.find('.n-category--tool');
        var $toolSwitchBtn = $categoryTool.find('.n-operating');
        var $cardList = $categoryId.find('.n-card__list');
        var $loveBtn = $cardList.find('li > .n-card__box > .n-card__btn > .n-btn--card-icon');

        // switch display icon and display layout
        $toolSwitchBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            $this.closest('.n-category--tool').siblings('.n-category__body').children('.n-card__list').toggleClass('n-card--list');
            $this.children('.n-icon--list').toggleClass('n-icon--square');

        });

    }
    tooggleDispalyStyle('middleCategory');
    tooggleDispalyStyle('smallCategory');

});
