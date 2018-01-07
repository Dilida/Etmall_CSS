$(function(){
    function topicBn() {
        if (!document.getElementById('topicsBn')) return false;

        var topicsBn = document.getElementById('topicsBn');
        var $topicsBn = $(topicsBn);

        // topic banner invoke Cycle effect with nav has text funtion
        cycleEffectNavText( 'topicsBn' , 'a', '#topicsNav' );
    }
    topicBn();

    // Rank list block Call switch tab funtion
    switchTabEffect('rankTab');
    
});
