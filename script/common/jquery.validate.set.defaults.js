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