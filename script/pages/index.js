'use strict';
$(function(){

    // main five banner slider
    function mainBanner() {
        if (!document.getElementById('mainBanner')) return false;

        var mainBanner = document.getElementById('mainBanner');
        var $mainBanner = $(mainBanner);
        var $bnWrap = $mainBanner.find('.n-banner__wrap');
        var bnImg = $bnWrap.find('img');
        var $bnNav = $('#bnNav');
        var navTemp = '';
        var imgAlt = [];
        
        // get banner alt text
        var imgAlt = bnImg.map(function() {
            return $(this).attr('alt');
        });
        
        // build banner nav text
        for (var i = 0; i < imgAlt.length; i++) {
            navTemp += '<li><a href="#" title="' + imgAlt[i] + '">' + imgAlt[i] + '</a></li>';
        }
        $bnNav.append(navTemp);

        // Main banner invoke Cycle effect with nav has text funtion
        cycleEffectNavText( 'funBn' , '.n-banner__wrap', '#bnNav');

    }
    mainBanner();

    // film block Call switch tab funtion
    switchTabEffect('filmTab');

    // Rank list block Call switch tab funtion
    switchTabEffect('rankTab');
    
    // Channer Promo block Call cycleEffectNavText funtion
    cycleEffectNavText('bnChannel', '.n-bannerad__box', '#channelTab');

    // Event Promo block Call ycleEffectNavText funtion
    cycleEffectNavText('bnEvent', '.n-bannerad__box', '#eventTab');

    // Setting index full cover bg
    function fullBgCover() {
        if (!document.getElementById('coverBgWrap')) return false;

        var $topFiveBanner = $('#topFiveBanner');
        var $coverBgWrap = $('#coverBgWrap');
        var $bgLeft = $coverBgWrap.find('.n-cover--bg-l');
        var $bgRight = $coverBgWrap.find('.n-cover--bg-r');
        var $footer = $('.n-footer');
        
        var _windowWidth = _window.outerWidth();
        var _pageWidth = 1260;
        var _footerHeight = $footer.outerHeight();
        var _coverBgWidth = Math.floor(( _windowWidth - _pageWidth ) / 2);

        $bgLeft.css({
            width: _coverBgWidth,
            left: _pageWidth + _coverBgWidth + 10
        });
        $bgRight.css({
            width: _coverBgWidth,
            right: _pageWidth + _coverBgWidth + 10
        });

        // console.log($topFiveBanner.offset().left);

    }
    fullBgCover();

    // show crazy ad film
    function showCrazyAdFilm() {
        if (!document.getElementById('crazyAdFilm')) return false;

        // load youtube api
        // let scriptTag = document.createElement('script');
        //     scriptTag.src = 'https://www.youtube.com/player_api';

        // const bodyTag = document.getElementsByTagName('body')[0];
        //     bodyTag.insertBefore(scriptTag, bodyTag.childNodes[0]);

        // console.log(bodyTag.childNodes[0])

        // build utube html
        const utubeFilm = document.getElementById('utubeFilm');
        let utubePlayer;

        utubePlayer = new YT.Player(utubeFilm, {
            videoId: 'LpMeDfHQQag',
            width: 460,
            height: 259,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'showinfo': 1,
                'modestbranding': 0,
                'loop': 0
            },
            events: {
                'onReady': onPlayerReady
            }
        });

        function onPlayerReady(e) {
            e.target.playVideo();
            utubePlayer.mute();
        }


        // show film intro to the screen
        const crazyAdFilm = document.getElementById('crazyAdFilm');
        const closeFilmBtn = crazyAdFilm.querySelectorAll('.n-overlay__box .n-crazy-ad__film-box .n-close__film')[0];

        // film enter screen
        crazyAdFilm.classList.add('n-crazy-ad--show');

        // close film
        closeFilmBtn.addEventListener('click', function(e) {
            e.preventDefault();
            crazyAdFilm.classList.remove('n-crazy-ad--show');
        });

    }
    // showCrazyAdFilm();

    function showOvearlayCoupon() {
        if (!document.getElementById('OvearlayCoupon')) return false;

        const $OvearlayCoupon = $('#OvearlayCoupon');

        $.magnificPopup.open({
            items: {
                src: $OvearlayCoupon,
                type: 'inline'
            },
            mainClass: 'n-disable--bg-color',
            fixedContentPos: false
        });
    }
    showOvearlayCoupon();

});
