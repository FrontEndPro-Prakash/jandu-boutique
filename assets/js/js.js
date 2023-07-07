/** Sticky header **/
const mainHeader = document.querySelector('.mainHeader');
var navbarSticky = document.querySelector('.navbar').offsetTop;
window.addEventListener('scroll', e => {
    if (window.scrollY > 100){
        mainHeader.style.top = '-' + navbarSticky + 'px';
        mainHeader.classList.add('sticky');
    } else {
        mainHeader.classList.remove('sticky');
		mainHeader.style.top = '0' + 'px';
    }
});
/** /Sticky header **/
/** Menu active **/
$(document).ready(function(){
	var last =window.location.href.split('/').slice(-1)[0];
		if (last.indexOf("?") > 0) {
    		last = last.substring(0, last.indexOf("?"));
		}
		var a = $('.navbar-nav a[href*="'+last+'"]');
		a.parents('li.nav-item:first').addClass('active')
		if(last==''){
			var a = $('.navbar-nav a:first');
			a.parents('li.nav-item:first').addClass('active')
		}
});
/** /Menu active **/
/** Image Modal **/
$('.imgPop').on('click', function() {
	$('.imagePreview').attr('src', $(this).find('img').attr('src'));
	$('#imageModal').modal('show');   
});
/** /Image Modal **/
/** Copyright date **/
var year = new Date();
document.querySelector('date').textContent = year.getFullYear();
/** /Copyright date **/
/** PHP mailer **/
$(document).ready(function(event) {
	function showMessage(message, status, element) {
		$(element).html(`<div class="p-2 text-center rounded-0 alert alert-${(status == '1') ? 'success': 'error'}" role="alert">${message}</div>`);
		setTimeout(() => {
			$(element).html('');
		}, 10000)
	}

	function loader(element, status = true, content = "Submit") {
		if (status) {
			$(element).html(`Submit <div class="spinner-border redColor" role="status">
			<span class="visually-hidden">Loading...</span>
			</div>`);
		} else {
			$(element).html(content);
		}
	}
	$("#contactUsForm").submit(function(e) {
		e.preventDefault();
	}).validate({
		rules: {
			f_name: "required",
			email: {
				email: true,
				required: true,
			},
			phone: {
				required: true,
				number: true,
			},
		},
		messages: {
			f_name: "Please enter your firstname.",
			email: {
				email: "Please enter valid email.",
				required: "Please enter your email."
			},
			phone: {
				required: "Please enter your phone no.",
				number: "Please enter valid phone no.",
			},
		},
		submitHandler: function(form) {
			loader('#contactUsForm button[type="submit"]');
			var f_name = $(form).find("#f_name").val();
			var l_name = $(form).find("#l_name").val();
			var email = $(form).find("#email").val();
			var phone = $(form).find("#phone").val();
			var message = $(form).find("#message").val();
			$.ajax({
				url: "sendMail.php",
				type: "post",
				cache: false,
				data: {
					f_name: f_name,
					l_name: l_name,
					email: email,
					phone: phone,
					message: message,
				},
				success: function(res) {
					$(form).find('input, textarea').val('');
					loader('#contactUsForm button[type="submit"]', false);
					showMessage(res.message, res.success, "#response-div");
				}
			})
		}
	});
})
/** /PHP mailer **/