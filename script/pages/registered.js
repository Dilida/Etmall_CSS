'use strict';
$(function(){

    // forget all page, call switch tab funtion
    switchTabEffect('forgetTab');

    // login page validate
    function validateMemberLogin() {
        if (!document.getElementById('loginMember')) return false;

        const loginMember = document.getElementById('loginMember');
        const $loginMember = $(loginMember);

        $loginMember.validate({
            rules: {
                loginID: {
                    required: true
                },
                password: {
                    required: true
                },
                CheckPwd: {
                    required: true
                }
            },
            messages: {
                loginID: {
                    required: '請輸入帳號'
                },
                password: {
                    required: '請輸入密碼'
                },
                CheckPwd: {
                    required: '驗證碼錯誤'
                }
            }
        });

    }
    validateMemberLogin();

    // china login page validate
    function validateChinaMemberLogin() {
        if (!document.getElementById('chinaLoginMember')) return false;

        const chinaLoginMember = document.getElementById('chinaLoginMember');
        const $chinaLoginMember = $(chinaLoginMember);

        $chinaLoginMember.validate({
            rules: {
                chinaLoginID: {
                    required: true
                },
                chinaPassword: {
                    required: true
                },
                CheckPwd: {
                    required: true
                }
            },
            messages: {
                chinaLoginID: {
                    required: '請輸入6個字元以上50個字元以下的英文字母及數字登入帳號'
                },
                chinaPassword: {
                    required: '請輸入密碼'
                },
                CheckPwd: {
                    required: '驗證碼錯誤'
                }
            }
        });

    }
    validateChinaMemberLogin();

    // forget all page validate
    function validateAccountID() {
        if (!document.getElementById('loginForgetAll')) return false;

        const loginForgetAll = document.getElementById('loginForgetAll');
        const $loginForgetAll = $(loginForgetAll);
        const $forgetSubmit = $('#forgetSubmit');
        const $forgeteMailSubmit = $('#forgeteMailSubmit');

        // forget password
        $forgetSubmit.on('click', function(e) {
            $loginForgetAll.validate({
                rules: {
                    acct: {
                        required: true
                    }
                },
                messages: {
                    acct: {
                        required: '請填入帳號或身分證字號'
                    }
                }
            });
        });

        // forget account
        $forgeteMailSubmit.on('click', function(e) {
            $loginForgetAll.validate({
                rules: {
                    Email: {
                        required: true
                    }
                },
                messages: {
                    acctemail: {
                        required: '請填入E-Mail'
                    }
                }
            });
        });

    }
    validateAccountID();

    // register page validate
    function validateRegister() {
        if (!document.getElementById('registerMember')) return false;

        const registerMember = document.getElementById('registerMember');
        const $registerMember = $(registerMember);

        $registerMember.validate({
            rules: {
                Email: {
                    required: true
                },
                Mobile: {
                    required: true
                },
                Password: {
                    required: true
                },
                PasswordConfirm: {
                    equalTo: '#Password'
                },
                CheckPwd: {
                    required: true
                }
            },
            messages: {
                Email: {
                    required: '請輸入電子郵件！'
                },
                Mobile: {
                    required: '請輸入您的手機號碼！'
                },
                Password: {
                    required: '請輸密碼！'
                },
                PasswordConfirm: {
                    equalTo: '您輸入的密碼與上面不相符'
                },
                CheckPwd: {
                    required: '請輸驗證碼！'
                }
            }
        });

    }
    validateRegister();

    // agree or disagree terms effect
    function agreeDisagreeTerms() {
        if (!document.getElementById('registerMember')) return false;

        const registerMember = document.getElementById('registerMember');
        
        // etmall terms radio 
        const webagreeYes = document.getElementById('webagreeYes');
        const webagreeNo = document.getElementById('webagreeNo');

        // ponta terms radio
        const pontapersonalagreeYes = document.getElementById('pontapersonalagreeYes');
        const pontapersonalagreeNo = document.getElementById('pontapersonalagreeNo');
        const pontaaccountagreeYes = document.getElementById('pontaaccountagreeYes');
        const pontaaccountagreeNo = document.getElementById('pontaaccountagreeNo');

        // get all form elements
        const allFormElems = registerMember.elements;
        let radiosBtn = [];

        // get all radio btn
        for( let i = 0; i < allFormElems.length; i++ ) {
            if( allFormElems[i].type === 'radio' ) {
                radiosBtn.push(allFormElems[i]);
            }
        }
    
        // disable register btn
        const registerMemberBtn = registerMember.querySelectorAll('.n-reg__wrap .n-reg__body .n-reg__left .n-reg__fields .n-btn__box .n-btn--primary')[0];

        webagreeNo.addEventListener('click', function() {
            if( this.checked ) {
                registerMemberBtn.classList.add('n-btn--disabled');
            }
        });

        webagreeYes.addEventListener('click', function() {
            if( this.checked ) {
                registerMemberBtn.classList.remove('n-btn--disabled');
            }
        });

        // show ponta alert info
        const pontaAlertTitle = '得易Ponta宣告條款';
        const pontaAlertText = '「得易Ponta聯名卡會員須知」及「得易Ponta聯名卡會員服務使用辦法」需同時勾選，才能申辦得易Ponta聯名卡';

        pontapersonalagreeNo.addEventListener('click', function() {
            if( this.checked && pontaaccountagreeNo.checked ) {
                return true;
            } else {
                alertWithBtns(
                    pontaAlertTitle,
                    pontaAlertText,
                );
            }
        });

        pontaaccountagreeNo.addEventListener('click', function() {
            if( this.checked && pontapersonalagreeNo.checked ) {
                return true;
            } else {
                alertWithBtns(
                    pontaAlertTitle,
                    pontaAlertText,
                );
            }
        });

    }
    agreeDisagreeTerms();

    // register-2 page       
    function registerPhoneValidate() {
        if (!document.getElementById('registerPhoneValidate')) return false;

        const registerPhoneValidate = document.getElementById('registerPhoneValidate');
        const sendBtn = registerPhoneValidate.querySelectorAll('.n-reg__left .n-reg__fields .n-btn__box .n-btn')[0];

        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            let alertData = [{
                alertTitle: '手機驗證',
                alertInfo: '請等待一分鐘後重新索取驗證碼'
            }];
            $.magnificPopup.open({
                key: 'alert-with-btn',
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
                                    <a class="n-btn n-btn--primary" href="register-2-2.html" title="確定">確定</a>
                                </div>
                            </div>
                        </div>
                    </div>`
                },
                callbacks: {
                    open: function () {
                        this.content.find('.n-btn--lv3').on('click', function (e) {
                            e.preventDefault();
                            $.magnificPopup.close();
                        });
                    }
                }
            });

        });

    }
    registerPhoneValidate();

    // register-2 page validate
    function registerSmsValidate() {
        if (!document.getElementById('registerSMSValidate')) return false;

        const registerSMSValidate = document.getElementById('registerSMSValidate');
        const $registerSMSValidate = $(registerSMSValidate);

        $registerSMSValidate.validate({
            rules: {
                SMSCheckPwd: {
                    required: true
                }
            },
            messages: {
                SMSCheckPwd: {
                    required: '驗證碼輸入錯誤，請重新輸入！'
                }
            }
        });
    }
    registerSmsValidate();

    // login tv page
    function validateLoginTv() {
        if (!document.getElementById('loginTvMember')) return false;

        const loginTvMember = document.getElementById('loginTvMember');
        const $loginTvMember = $(loginTvMember);

        $loginTvMember.validate({
            rules: {
                userID: {
                    required: true
                }
            },
            messages: {
                userID: {
                    required: '請輸入身分證字號！'
                }
            }
        });
    }
    validateLoginTv();

    // login tv page
    function loginTvMemberTypeCode() {
        if (!document.getElementById('loginTvMemberTypeCode')) return false;

        const loginTvMemberTypeCode = document.getElementById('loginTvMemberTypeCode');
        const $loginTvMemberTypeCode = $(loginTvMemberTypeCode);

        $loginTvMemberTypeCode.validate({
            rules: {
                SMSCheckPwd: {
                    required: true
                }
            },
            messages: {
                SMSCheckPwd: {
                    required: '驗證碼輸入錯誤'
                }
            }
        });
    }
    loginTvMemberTypeCode();

    // fb login select identity
    function fbLoginSelectIdentity() {
        if (!document.getElementById('loginFbMember')) return false;

        const $fbLoginSelect = $('#fbLoginSelect');
        const $selectBtn = $fbLoginSelect.find('.n-btn');


        $selectBtn.eq(0).on('click', function(e) {
            e.preventDefault();
            const $this = $(this);
            
            $('.n-reg__login-box2').addClass('n-is--hide');
            $('.n-reg__login-box3').addClass('n-is--hide');
            $this.closest('li').siblings('li').removeClass('n-is--active');
            $this.closest('li').addClass('n-is--active');
            $this.closest('.n-login__fb-desc').siblings('.n-reg__login-box1').removeClass('n-is--hide');
            $this.closest('.n-login__fb-desc').siblings('.n-reg__terms').addClass('n-is--hide');

        });

        $selectBtn.eq(1).on('click', function(e) {
            e.preventDefault();
            const $this = $(this);
            
            $('.n-reg__login-box1').addClass('n-is--hide');
            $('.n-reg__login-box3').addClass('n-is--hide');
            $this.closest('li').siblings('li').removeClass('n-is--active');
            $this.closest('li').addClass('n-is--active');
            $this.closest('.n-login__fb-desc').siblings('.n-reg__login-box2').removeClass('n-is--hide');
            $this.closest('.n-login__fb-desc').siblings('.n-reg__terms').removeClass('n-is--hide');
            $this.closest('.n-login__fb-desc').siblings('.n-reg__terms').eq(1).addClass('n-is--hide');

        });

        $selectBtn.eq(2).on('click', function(e) {
            e.preventDefault();
            const $this = $(this);

            $('.n-reg__login-box1').addClass('n-is--hide');
            $('.n-reg__login-box2').addClass('n-is--hide');
            $this.closest('li').siblings('li').removeClass('n-is--active');
            $this.closest('li').addClass('n-is--active');
            $this.closest('.n-login__fb-desc').siblings('.n-reg__login-box3').removeClass('n-is--hide');
            $this.closest('.n-login__fb-desc').siblings('.n-reg__terms').removeClass('n-is--hide');

        });
        

    }
    fbLoginSelectIdentity();

    function siteMembervValidate() {
        const $loginFbMember = $('#loginFbMember');
        const $LoginSubmit = $('#LoginSubmit');
        const $IDConfirm = $('#IDConfirm');
        const $FBRegister = $('#FBRegister');

        $loginFbMember.validate({
            rules: {
                userName: {
                    required: true
                },
                CITI_NO: {
                    required: true
                },
                Email: {
                    required: true
                }
                
            },
            messages: {
                userName: {
                    required: '請輸入帳號！'
                },
                CITI_NO: {
                    required: '身分證號碼！'
                },
                Email: {
                    required: '請輸入電子信箱！'
                }
            }
        });

        $LoginSubmit.on('click', function(e) {
            $loginFbMember.valid();
        });

        $IDConfirm.on('click', function(e) {
            $loginFbMember.valid();
        });

    }
    siteMembervValidate();

    


});
