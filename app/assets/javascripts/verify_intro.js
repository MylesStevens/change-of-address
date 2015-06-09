verify = (typeof verify === 'undefined') ? {} : verify;

verify.intro = {

	init: function(options){

		$('.next').on('click', function(e){

			e.preventDefault();

			var beenVerified = $('input[name="beenVerified"]:checked').val();

			if (beenVerified == "false"){

				window.location.href="/intro-2?requestId=" + options.requestId;

			} else if (beenVerified == "true"){

				window.location.href="/sign-in?requestId=" + options.requestId;

			} else {

				return;

			}

		});

	}

};