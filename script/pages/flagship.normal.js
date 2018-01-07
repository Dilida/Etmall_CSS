'use strict';
$(function () {
    function flagshipBnCycle() {
        if (!document.getElementById('flagshipBn')) return false;

        const flagshipBn = document.getElementById('flagshipBn');
        const $flagshipBn = $(flagshipBn);

        cycleEffectNavText( 'flagshipBn' , '.n-flagship__visual-box', '#flagshipBnNav');

    }

    function showPopUpInfo() {
        if (!document.getElementById('brandInfo')) return false;

        const $brandInfo = $('#brandInfo');
        const $flagshipTextLink = $('#flagshipText > a');
        const $flagshipIntroBn = $('#flagshipIntroBn');
        const $ovearlayFlagship = $('#ovearlayFlagship');
        const $ovearlayFlagshipMember = $('#ovearlayFlagshipMember');

        $brandInfo.on('click', function (e) {
            e.preventDefault();
            $.magnificPopup.open({
                items: {
                    src: $ovearlayFlagship,
                    type: 'inline'
                }
            });
        });

        $flagshipTextLink.on('click', function(e) {
            e.preventDefault();
            $.magnificPopup.open({
                items: {
                    src: $ovearlayFlagshipMember,
                    type: 'inline'
                }
            });
        });

        $flagshipIntroBn.on('click', function(e) {
            e.preventDefault();
            $flagshipTextLink.trigger( 'click' );
        });

    }

    flagshipBnCycle();
    showPopUpInfo();
});