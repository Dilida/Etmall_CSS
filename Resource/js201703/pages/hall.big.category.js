
$(function(){

	// middle category page invoke
    showLeftCategory('hallCategory'); 
    // small category page invoke
    showLeftCategory('bigCategory'); 

    // build hall banner nav text
    function hallBanner() {
    	if (!document.getElementById('hallBanner')) return false;

    	var hallBanner = document.getElementById('hallBanner');

        var $hallBanner = $(hallBanner);
        var $hallBnWrap = $hallBanner.find('.n-hall__pic');
        var hallBnImg = $hallBnWrap.find('img');
        var $hallNav = $('#hallNav');
        var hallNavTemp = '';
        var hallImgAlt = [];

        // get banner alt text
        var hallImgAlt = hallBnImg.map(function() {
            return $(this).attr('alt');
        });

        // build banner nav text
        for (var i = 0; i < hallImgAlt.length; i++) {
            hallNavTemp += '<li><a href="#" title="' + hallImgAlt[i] + '">' + hallImgAlt[i] + '</a></li>';
        }
        $hallNav.append(hallNavTemp);

        // Main banner invoke Cycle effect with nav has text funtion
        cycleEffectNavText( 'hallBanner' , '.n-hall__slider', '#hallNav' );

    }
    hallBanner();

	// rank block Call switch tab funtion
    switchTabEffect('hallRankTab');

    // rank block Call switch tab funtion
    switchTabEffect('bigRankTab');

});
