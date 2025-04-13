// Content Contact Form
// ---------------------------------------------------------------------------------------
$(function () {
    $("#af-form .form-control").tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $('#af-form .form-control').blur(function () {
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    $("#af-form #submit_btn").click(function () {
        // validate and process form
        // first hide any error messages
        $('#af-form .error').hide();

        var name = $("#af-form input#name").val();
        if (name == "" || name == "Name...." || name == "Name" || name == "Name *" || name == "Type Your Name...") {
            $("#af-form input#name").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#af-form input#name").focus();
            return false;
        }
        var email = $("#af-form input#email").val();
        //var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $("#af-form input#email").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#af-form input#email").focus();
            return false;
        }
        var message = $("#af-form #input-message").val();
        if (message == "" || message == "Message...." || message == "Message" || message == "Message *" || message == "Type Your Message...") {
            $("#af-form #input-message").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#af-form #input-message").focus();
            return false;
        }

        var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
        //alert (dataString);return false;

        $.ajax({
            type:"POST",
            url:"assets/php/contact-form.php",
            data:dataString,
            success:function () {
                $('#af-form').prepend("<div class=\"alert alert-success fade in\"><button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>Contact Form Submitted!</strong> We will be in touch soon.</div>");
                $('#af-form')[0].reset();
            }
        });
        return false;
    });
});

// Content Registration Form
// ---------------------------------------------------------------------------------------
$(function () {

    var $form = $('#registration-form');
    $form.find('.form-control').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $form.find('.form-control').on('blur', function(){
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    // validate and process form
    $form.find('.submit-button').on('click', function () {


        // Salutation
        var sal = $form.find('.input-salutation').val();
        if (sal == '' || sal == 'Select Salutation') {
            $form.find('.input-salutation').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-salutation').focus();
            return false;
        }
        else {
            $form.find('.input-salutation').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
        }
        
        // Name
        var name = $form.find('.input-name').val();
        if (name == '' || name == 'Name....' || name == 'Name' || name == 'Name *' || name == 'Type Your Name...' || name == 'Name and Surname') {
            $form.find('.input-name').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-name').focus();
            return false;
        }

        // Email address
        var email = $form.find('.input-email').val();
        //var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $form.find('.input-email').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-email').focus();
            return false;
        }


        // Affiliation
        var affil = $form.find('.input-affiliation').val();
        if (affil == 'Your Affiliation') {
            affil = '';
            return false
        }
         else {
            $form.find('.input-affiliation').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
        }

		// member-type
        var member = $form.find('.input-member').val();
        if (member == '' || member == 'Select Membership Type') {
            $form.find('.input-member').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-member').focus();
            return false;
        }
        else {
            $form.find('.input-member').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
        }

		// aii
        var aii = $form.find('.input-aii').val();
        if (aii == '' || aii == 'Academic Institute of India') {
            $form.find('.input-aii').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-aii').focus();
            return false;
        }
        else {
            $form.find('.input-aii').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
        }
        
        var paper = $form.find('.input-paper-title').val();
        if (paper == '') {
            $form.find('.input-paper-title').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-paper-title').focus();
            return false;
        }
        else {
            $form.find('.input-paper-title').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
        }


        // Price list
        var price = $form.find('.input-price').val();
        if (price == '' || price == 'Select Your Price Tab') {
            $form.find('.input-price').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-price').focus();
            return false;
        }
        else {
            $form.find('.input-price').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
        }
        
        var cost = 300
        var aiistring = ''
        if(member == 'IEEE Student Member' || member == 'Non-Member Student'){
        	cost = cost - 150
        	if(aii == 'Yes'){
        	cost = cost -50 
        	aiistring = ' w/AII Discount'	
		}
        	
    
        }else if(member == 'IEEE Life/Retired Member'){
        	cost = cost - 100
        	if(aii == 'Yes'){
        		cost = cost - 125 
        		aiistring = ' w/AII Discount'	
        	}
        }
        else{
	        if(aii == 'Yes'){
	        cost = cost - 125 
	        aiistring = ' w/AII Discount'	
			}
        }
        
        
        if(member == 'Non-Member' || member == 'Non-Member Student'){
			cost = cost + 50
		}        
		var paypallink = "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=VFQBFVJYDYLH6&lc=IN&item_name="
		paypallink += member+aiistring + "&item_number=" + email + "&amount=" + cost + "%2e00&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted"
		//var paypallink = "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=sales%40erebuslabs%2ecom&lc=US&item_name="
		//paypallink += member + aiistring + "&item_number="+email+"&amount="+cost+"%2e00&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted"
		
		var dataString = 'sal=' + sal + '&name=' + name + '&email=' + email + '&affil=' + affil + '&member=' + member + '&aii=' + aii + '&paper=' + paper;
        //alert(dataString); return false;

        $.ajax({
            type: 'POST',
            url: 'assets/php/registration-form.php',
            data: dataString,
            success: function () {
                $form.find('.form-alert').append('' +
                '<div class=\"alert alert-success registration-form-alert fade in\">' +
                '<button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button>' +
                '<strong>Registration Submitted!</strong>'+
                '<br/>Your total cost is ' + cost + ' USD - payable via paypal or bank transfer - options below open in new tabs:<br/><br/>'+               
                '<a class="btn btn-theme btn-theme-xl scroll-to" href="'+paypallink+'" target="_blank" data-animation="flipInY" data-animation-delay="600"> Pay with Paypal <i class="fa fa-arrow-circle-right"></i></a>'+
                '&nbsp; &nbsp;'+
                '<a class="btn btn-theme btn-theme-xl scroll-to" href="assets/paymentoptions.pdf" target="_blank" data-animation="flipInY" data-animation-delay="600">More Payment Options<i class="fa fa-arrow-circle-right"></i></a>'+                
                '</div>' +
                '');
                $form[0].reset();
                $form.find('.form-control').focus().blur();
            }
        });
        return false;
    });

});

// Slider Registration Form
// ---------------------------------------------------------------------------------------
$(function () {

    var $form = $('#registration-form-alt');
    $form.find('.form-control').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $form.find('.form-control').on('blur', function(){
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    // validate and process form
    $form.find('.submit-button').on('click', function () {

        // Name
        var name = $form.find('.input-name').val();
        if (name == '' || name == 'Name....' || name == 'Name' || name == 'Name *' || name == 'Type Your Name...' || name == 'Name and Surname') {
            $form.find('.input-name').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-name').focus();
            return false;
        }

        // Email address
        var email = $form.find('.input-email').val();
        //var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $form.find('.input-email').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-email').focus();
            return false;
        }

        // Phone number
        var phone = $form.find('.input-phone').val();
        if (phone == 'Your Phone Number') {
            phone = '';
        }

        // Price list
        var price = $form.find('.input-price').val();
        if (price == '' || price == 'Select Your Price Tab') {
            $form.find('.input-price').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-price').focus();
            return false;
        }
        else {
            $form.find('.input-price').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
        }

        var dataString = 'name=' + name + '&email=' + email + '&phone=' + phone + '&price=' + price;
        //alert(dataString); return false;

        $.ajax({
            type: 'POST',
            url: 'assets/php/registration-form.php',
            data: dataString,
            success: function () {
                $form.find('.form-alert').append('' +
                '<div class=\"alert alert-success registration-form-alert fade in\">' +
                '<button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button>' +
                '<strong>Registration Form Submitted!</strong> We will be in touch soon.' +
                '</div>' +
                '');
                $form[0].reset();
                $form.find('.form-control').focus().blur();
            }
        });
        return false;
    });

});