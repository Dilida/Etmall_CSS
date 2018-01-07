'use strict';
$(function(){

	// order return page Call, switch tab funtion
    switchTabEffect('reasonListNav');

    // discount page, Call switch tab funtion
    switchTabEffect('ticketListNav');

    // other page, Call switch tab funtion
    switchTabEffect('otherListNav');

    // track list01 page, Call switch tab funtion
    switchTabEffect('trackListtNav');

    // history list01 page, Call switch tab funtion
    switchTabEffect('historyListNav');

    // post02 page, Call switch tab funtion
    switchTabEffect('winnerListNav');

    // ponta list page, Call click out side hide effect funtion
    clickOutSide('.n-ponta__info');

    // immediate post
    function immediatePost() {
        if ( !document.getElementById('immediatePost') ) return false;

        const $immediatePost = $('#immediatePost');
        const $immediatePostA = $immediatePost.find('ul > li > a');
        const $ovearlayPost = $("#ovearlayPost");

        $immediatePostA.on('click', function(e) {
            e.preventDefault();
            const $this = $(this);
            
            if ($this.attr('href').split('.').pop() === '#ovearlayPost') {
                $.magnificPopup.open({
                    items: {
                        src: $ovearlayPost,
                        type: 'inline'
                    },
                    callbacks: {
                        open: function () {
                            this.content.find('.n-btn--primary').on('click', function (e) {
                                e.preventDefault();
                                $.magnificPopup.close();
                            });
                        }
                    }
                });
            } else {
                location.href = $this.attr('href')
            }

        });

    }
    immediatePost();

    // member left nav highlight
    function memberNavHighlight() {
        if ( !document.getElementById('memLeftNav') ) return false;

        // get left nav variable
        var memLeftNav = document.getElementById('memLeftNav');
        var $memLeftNav = $(memLeftNav);
        var $memNavSubliA = $memLeftNav.find('> li > ul > li > a');

        // get page nav variable
        var memberPageNav = document.getElementById('memberPageNav');
        var $memberPageNav = $(memberPageNav);
        var $pageNavA = $memberPageNav.find('> li > a');

        //console.log($pageNavA);

        // stored left nav variable
        var getLeftHref;
        var memLeftHref = [];

        // stored page nav variable
        var getPageHref;
        var memPageHref = [];

        // Get current url name
        var currentUrl = window.location.pathname.split('/');
            currentUrl = currentUrl[currentUrl.length - 1].split('.');
            currentUrl = currentUrl[0];

        // get left nav href
        for( var i = 0; i < $memNavSubliA.length; i++ ) {
            getLeftHref = $memNavSubliA[i].getAttribute('href').split('/');
            getLeftHref = getLeftHref[getLeftHref.length - 1].split('.');
            getLeftHref = getLeftHref[0];

            memLeftHref.push(getLeftHref);
        }

        // auto left nav highlight
        for( var j = 0; j < memLeftHref.length; j++ ) {
            if( currentUrl ===  memLeftHref[j] ) {
                $memNavSubliA.eq(j).parent().addClass('current');
            }
        }

        // get page nav href
        for( var k = 0; k < $pageNavA.length; k++ ) {
            getPageHref = $pageNavA[k].getAttribute('href').split('/');
            getPageHref = getPageHref[getPageHref.length - 1].split('.');
            getPageHref = getPageHref[0];

            memPageHref.push(getPageHref);
        }

        // auto page nav highlight
        for( var m = 0; m < memPageHref.length; m++ ) {
            if( currentUrl ===  memPageHref[m] ) {
                $pageNavA.eq(m).parent().addClass('current');
            }
        }

    }
    memberNavHighlight();

    // show return info
    function showAlertInfo() {
        if (!document.getElementById('orderList')) return false;

        var orderList = document.getElementById('orderList');

        var $orderList = $(orderList);
        var $listTable = $orderList.find('.n-mem-box .n-order__table');
        var $tableBtns = $listTable.find('.n-edit a');

        var confirmTxt = '您的商品有加價購商品，你確定要退貨嗎?';

        $tableBtns.on('click', function(e) {
            e.preventDefault();

            if ( this.getAttribute('title') === '我要退貨' ) {

                let alertData = [{
                    alertTitle: '我要退貨',
                    alertInfo: confirmTxt
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
                                this.content.find('.n-btn--primary').on('click', function() {
                                    $(this).attr('href', 'm1-order-return.html');
                                });
                                this.content.find('.n-btn--lv3').on('click', function(e) {
                                    e.preventDefault();
                                    $.magnificPopup.close();
                                });
                            }
                    }

                }); 
                
            } else {
                window.location.href = this.getAttribute('href');
            }

        });

    }
    showAlertInfo();

    function showSatisfactionForm() {
        if (!document.getElementById('ovearlaySatisfaction')) return false;

        const orderList = document.getElementById('orderList');

        const $orderList = $(orderList);
        const $listTable = $orderList.find('.n-mem-box .n-order__table');
        const $tableBtns = $listTable.find('.n-edit a');
        const $ovearlaySatisfaction = $('#ovearlaySatisfaction');

        $tableBtns.on('click', function(e) {
            e.preventDefault();
            
            if(this.getAttribute('title') === '滿意度調查表' ) {
                $.magnificPopup.open({
                    items: {
                        src: $ovearlaySatisfaction,
                        type: 'inline'
                    },
                    callbacks: {
                        open: function() {
                            this.content.find('.n-btn--primary').on('click', function() {
                                window.location.href = 'm1-order.html';
                            });
                            this.content.find('.n-btn--normal').on('click', function(e) {
                                e.preventDefault();
                                $.magnificPopup.close();
                            });
                        }
                    }
                });
            }

        });
    }
    showSatisfactionForm();
	// select cancel reason
	function selectCancelReason(orderReasonElems) {
		if (!document.getElementById(orderReasonElems)) return false;

		var orderReasonElems = document.getElementById(orderReasonElems);
		
		var $orderCancel = $(orderReasonElems);
		var $orderCheckBox = $orderCancel.find('.n-order__check-box');
		var $orderLabel = $orderCheckBox.find('label');
		var $orderTextarea = $orderCheckBox.find('.n-order__other-txt');
		var $orderRadio = $orderCheckBox.find('input[type=radio]');
	
		$orderLabel.on('click', function() {

			var $this = $(this);

			$this.parent().siblings().removeClass('current');
            $this.parent().addClass('current');

            if (orderReasonElems.id !== 'orderAsk') {
                if ($.trim($this.text()) === '其他') {
                    $orderTextarea.removeClass('n-is--hide');
                } else {
                    $orderTextarea.addClass('n-is--hide');
                }
            }

		});
	}
	selectCancelReason('orderCancel'); // order cancel page invoke
	selectCancelReason('orderReturn'); // order return page invoke
    selectCancelReason('orderAsk'); // order ask page invoke
   
    // ticket page, switch dispaly style
    function ticketSquareListSwitch() {
    	if (!document.getElementById('ticketSwitch') && !document.getElementById('ticketList1')) return false;

    	var $ticketSwitch = $('#ticketSwitch');
    	var $ticketLi = $ticketSwitch.find('li');
    	var $ticketLiA = $ticketLi.find('a');
		var $ticketList1 = $('#ticketList1');

		$ticketLiA.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			var _thisTitle = $this.attr('title');

			console.log(_thisTitle);

			$this.parent().siblings('li').removeClass('current');
			$this.parent('li').addClass('current');

			switch( _thisTitle ) {
				case '棋盤式':
                    $this.closest('.n-mem__tool-bar').siblings('#ticketList1').children('.n-ticket__wrap').addClass('n-ticket--square');
                    break;
                case '條列式':
                    $this.closest('.n-mem__tool-bar').siblings('#ticketList1').children('.n-ticket__wrap').removeClass('n-ticket--square');
                    break;
			}
		});

    }
    ticketSquareListSwitch();

    // Ponta info dispaly effect
    function pontaInfoDispalyEffect() {
    	if (!document.getElementById('pontaPoint')) return false;

    	var $pontaPoint = $('#pontaPoint');
    	var $pontBox = $pontaPoint.find('.n-ponta__box');
    	var $pontBoxA = $pontBox.find('a');

        $pontBoxA.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.parent().siblings('div').fadeIn(300);
        });

    }
    pontaInfoDispalyEffect();

    // show e-ticket in the new window
    function showEticket() {
        if (!document.getElementById('eTicket')) return false;

        const eTicket = document.getElementById('eTicket');
        const eTicketSerialNumA = eTicket.querySelectorAll('.n-ponta__box .table--bordered a');

        let ticketImgPath = 'Resource/img201703/member/eticket.jpg';

        for( let i = 0; i < eTicketSerialNumA.length; i++ ) {
            eTicketSerialNumA[i].addEventListener('click', function(e){
                e.preventDefault();
                window.open(ticketImgPath, 'name', 'width=305,height=406')
            });
        }

    }
    showEticket();

    // track list01 page, show or hide introduction block
    // history list01 page, show or hide introduction block
    // stock notice, show or hide introduction block
    function showHideIntro(hintsId) {
        if (!document.getElementById(hintsId)) return false;

        var hintsId = document.getElementById(hintsId);

        var $hintsId = $(hintsId);
        var $hintsWrap = $hintsId.find('.n-hints__wrap');
        var $hintsUl = $hintsWrap.find('ol');
        var $hintsClose = $hintsWrap.find('.n-note--close'); 

        var _hintsHeight = $hintsWrap.outerHeight();
        var _hintsCloseHeight = $hintsClose.outerHeight();
        var _hintsHeightCloseHeight = _hintsHeight - _hintsCloseHeight;
        var _hintsDispalyHeight = _hintsHeight - _hintsHeightCloseHeight;

        $hintsClose.on('click', function(e) {
            e.preventDefault();

            var $this = $(this);

            if( $hintsUl.is(':visible') ) {
                $this.addClass('n-note--active');
                $hintsWrap.stop().animate({
                    height: _hintsDispalyHeight
                });
                $hintsUl.slideUp(300);
            } else {
                $this.removeClass('n-note--active');
                $hintsWrap.stop().animate({
                    height: _hintsHeight
                });
                $hintsUl.slideDown(300);
            }
        });

    }
    showHideIntro('collectionList');
    showHideIntro('historyList');
    showHideIntro('stockNotice');

    // track list page , switch love icon
    // history list01 page ,  switch love icon
    function enableDisableFavorite(pageId) {
        if (!document.getElementById(pageId)) return false;

        var pageId = document.getElementById(pageId);

        var $pageId = $(pageId);
        var $collectBody = $pageId.find('.n-collect__body');
        var $collectUl = $collectBody.find('ul');
        var $collectLoveBtn = $collectUl.find('.n-btn--card-icon'); 

        var $trackBrand = $pageId.find('.n-track__brand');
        var $trackBrandLogo = $trackBrand.find('.n-track__brand-logo');
        var $trackBrandLoveBtn = $trackBrand.find('.n-btn--card-icon');


        $collectLoveBtn.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('n-btn--active');
        });

        // if page have track brand block , do this
        if($trackBrand.length) {
            $trackBrandLoveBtn.on('click', function(e) {
                e.preventDefault();
                $(this).toggleClass('n-btn--active');
            });
        }
    }
    enableDisableFavorite('collectionList');
    enableDisableFavorite('historyList');

    // m4 profile page
    function showChinaAddressFileds() {
        if (!document.getElementById('memProfile')) return false;

        const memProfile = document.getElementById('memProfile');

        const $memProfile = $(memProfile);
        const $selectCountry = $memProfile.find('#country');

        $selectCountry.on('change', function(){

            const $this = $(this);
            let _thisVal = $this.val();

            switch ( _thisVal ) {
                case 'China,中國大陸地區': 
                    $this.parent('.n-form__box').siblings('.col-10').not('.n-form--china').addClass('n-is--hide');
                    $this.parent('.n-form__box').siblings('.n-form--china').removeClass('n-is--hide');
                    break;
                case 'Taiwan,臺灣地區': 
                    $this.parent('.n-form__box').siblings('.n-form--china').addClass('n-is--hide');
                    $this.parent('.n-form__box').siblings('.col-10').not('.n-form--china').removeClass('n-is--hide');
                    break;
            }

        });

    }
    showChinaAddressFileds();


    // Open element effect, applied, add credit, add Addressee
    function addedSwitchEffect(addElems) {
    	if (!document.getElementById(addElems)) return false;

    	var addElems = document.getElementById(addElems);

    	var $addElems = $(addElems);
    	var $addBtn = $addElems.find('.n-btn').eq(0);
    	var $cancelBtn = $addElems.find('.n-btn').eq(1);

    	$addBtn.on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		$this.siblings('.n-add__wrap').removeClass('n-is--hide');
    	});

    	$cancelBtn.on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		$this.closest('.n-add__wrap').addClass('n-is--hide');
    	});
    }
    addedSwitchEffect('addCreditCard'); // trigger Add credit card
    addedSwitchEffect('addAddressee'); // trigger Add addAddressee

    // novice01 page, click expansion
    // novice04 page, click expansion
    function qAlistEffect(qaId) {
        if (!document.getElementById(qaId)) return false;

        var qaId = document.getElementById(qaId);

        var $qAlist = $(qaId);
        var $qaBox = $qAlist.find('.n-qa__box');
        var $qaCaption = $qaBox.find('.n-qa__caption');
        var $qaBody = $qaBox.find('.n-qa__body');

        $qaCaption.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var siblingsBodyHasOpened = $this.parent('.n-qa__box').siblings('.n-qa__box').children('.n-qa__body').is(':visible');

            $this.toggleClass('n-qa--active').siblings('.n-qa__body').slideToggle(300);

            if( siblingsBodyHasOpened ) {
                $this.parent('.n-qa__box').siblings('.n-qa__box').children('.n-qa__caption').removeClass('n-qa--active');
                $this.parent('.n-qa__box').siblings('.n-qa__box').children('.n-qa__body').slideUp(300);
            }

        });        

    }
    qAlistEffect('qAlist');
    qAlistEffect('pontaQaList');
 
	// Contact us, call Words Count fn
    wordsCount('userTypeFields', 'countTxt', 120); 

    // m2 open validate demo
    function validateOpenCard() {
        if (!document.getElementById('openCardNum')) return false;

        const openCardNum = document.getElementById('openCardNum')
        const $openCardNum = $(openCardNum);


        $openCardNum.validate({
            rules: {
                openNum: {
                    required: true
                },
                serialNum: {
                    required: true
                }
            },
            messages: {
                openNum: {
                    required: '請輸入開券碼'
                },
                serialNum: {
                    required: '請輸入流水號'
                }
            }
        });
        console.log(1)
    }
    validateOpenCard();

    // m4-profile01 page validate demo
    function validateMemberProfile() {
        if (!document.getElementById('memProfile')) return false;

        const memProfile = document.getElementById('memProfile');
        const $memProfile = $(memProfile);

        $memProfile.validate({
            rules: {
                userName: {
                    required: true
                },
                userMail: {
                    required: true
                },
                mobile: {
                    required: true
                },
                country: {
                    required: true
                },
                city: {
                    required: true
                },
                district: {
                    required: true
                },
                address: {
                    required: true
                }
            },
            messages: {
                userName: {
                    required: '此欄位為必填'
                },
                userMail: {
                    required: '此欄位為必填'
                },
                mobile: {
                    required: '此欄位為必填'
                },
                country: {
                    required: '此欄位為必填'
                },
                city: {
                    required: '此欄位為必填'
                },
                district: {
                    required: '此欄位為必填'
                },
                address: {
                    required: '此欄位為必填'
                }
            }
        });


    }
    validateMemberProfile();

    // m4-change page validate demo
    function validateChangePasswrod() {
        if (!document.getElementById('memChangePw')) return false;

        const memChangePw = document.getElementById('memChangePw');
        const $memChangePw = $(memChangePw);

        $memChangePw.validate({
            rules: {
                password: {
                    required: true,
                    minlength: 7,
                    maxlength: 12
                },
                newPassword: {
                    required: true,
                    minlength: 7,
                    maxlength: 12
                },
                RePassword: {
                    required: true,
                    minlength: 7,
                    maxlength: 12,
                    equalTo: "#newPassword"
                }
            },
            messages: {
                password: {
                    required: '該欄位為必填',
                    minlength: '密碼長度最少7個字元',
                    maxlength: '密碼長度最多12個字元',
                },
                newPassword: {
                    required: '該欄位為必填',
                    minlength: '密碼長度最少7個字元',
                    maxlength: '密碼長度最多12個字元',
                },
                RePassword: {
                    required: '該欄位為必填',
                    minlength: '密碼長度最少7個字元',
                    maxlength: '密碼長度最多12個字元',
                    equalTo: "您的密碼和上面不相符"
                }
            }
            
        });

    }
    validateChangePasswrod();

    // m4-credit page validate demo
    function validateAddCreditCard() {
        if (!document.getElementById('addCreditCard')) return false;

        const addCreditCard = document.getElementById('addCreditCard');
        const $addCreditCard = $(addCreditCard);

        $addCreditCard.validate({
            rules: {
                cardNumber1: {
                    required: true,
                    maxlength: 4
                },
                cardNumber2: {
                    required: true,
                    maxlength: 4
                },
                cardNumber3: {
                    required: true,
                    maxlength: 4
                },
                cardNumber4: {
                    required: true,
                    maxlength: 4
                },
                deadlineMobth: {
                    required: true
                },
                deadlineYear: {
                    required: true
                }
            },
            messages: {
                cardNumber1: {
                    required: '欄位資訊錯誤',
                    maxlength: '卡號錯誤'
                },
                cardNumber2: {
                    required: '欄位資訊錯誤',
                    maxlength: '卡號錯誤'
                },
                cardNumber3: {
                    required: '欄位資訊錯誤',
                    maxlength: '卡號錯誤'
                },
                cardNumber4: {
                    required: '欄位資訊錯誤',
                    maxlength: '卡號錯誤'
                },
                deadlineMobth: {
                    required: '卡片已過期'
                },
                deadlineYear: {
                    required: '卡片已過期'
                }
            }
        });

    }
    validateAddCreditCard();

    // m4-addressee validate demo
    function validateAddAddressee() {
        if (!document.getElementById('addAddressee')) return false;

        const addAddressee = document.getElementById('addAddressee');
        const $addAddressee = $(addAddressee);

        $addAddressee.validate({
            rules: {
                addresseeName: {
                    required: true,
                },
                country: {
                    required: true,
                },
                city: {
                    required: true,
                },
                canton: {
                    required: true,
                },
                address: {
                    required: true,
                },
                mobile: {
                    required: true,
                },
                areaCode: {
                    maxlength: 4
                },
                telNum: {
                    maxlength: 4
                }
            },
            messages: {
                addresseeName: {
                    required: '此欄位為必填',
                },
                country: {
                    required: '此欄位為必填',
                },
                city: {
                    required: '此欄位為必填',
                },
                canton: {
                    required: '此欄位為必填',
                },
                address: {
                    required: '此欄位為必填',
                },
                mobile: {
                    required: '此欄位為必填',
                },
                areaCode: {
                    maxlength: '區碼錯誤'
                },
                telNum: {
                    maxlength: '號碼格式錯誤'
                }
            }
        });

    }
    validateAddAddressee();

    // m5-service01 page validate demo
    function validateWriteMsg() {
        if (!document.getElementById('writeMsg')) return false;

        const writeMsg = document.getElementById('writeMsg');
        const $writeMsg = $(writeMsg);

        $writeMsg.validate({
            rules: {
                selectIssue: {
                    required: true
                }
            },
            messages: {
                selectIssue: {
                    required: '請選擇您的問題'
                }
            }
        });

    }
    validateWriteMsg();

});
