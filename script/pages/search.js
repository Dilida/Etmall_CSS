
$(function(){

    // switch dispaly mode, list style and square style
    function listDisplayMode() {
        if (!document.getElementById('searchDispalyMode') && !document.getElementById('searchResult')) return false;
        
        var $searchDispalyMode = $('#searchDispalyMode');
        var $searchResult = $('#searchResult');
        var $resultUl = $searchResult.find('ul');
        var $btnCollect = $resultUl.find('li > .n-card__box > .n-card__btn > .n-btn--card-icon');

        // switch dispaly mode, square or list
        $searchDispalyMode.on('click', function(e){
            e.preventDefault();
            var $this = $(this);

            // change display icon
            $this.find('.n-icon--list').toggleClass('n-icon--square');

            // change search result display mode
            $searchResult.find('.n-card__list').toggleClass('n-card--list');

            // change search result price size
            $searchResult.find('.n-price--16').toggleClass('n-price--18');

        });

    }
    listDisplayMode();
});
