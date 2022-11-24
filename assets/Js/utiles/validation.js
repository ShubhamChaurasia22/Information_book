export default (function validation() {
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]*$/i.test(value);
    }, "Letters only please");

    jQuery.validator.addMethod("number", function(value, element) {
        return this.optional(element) || /^[6-9]{1}[0-9]{9}$/i.test(value);
    }, "Phone number must be starting with 6 or 7 or 9"); 


    $("#modal-form").validate({
        rules: {
            name: {
                required: true,
                maxlength: 15,
                lettersonly: true,
            },
            last: {
                required: true,
                maxlength: 15,
                lettersonly: true,
            },
            contact: {
                required: true,
                number: true,
            }
        },
        highlight: function(element) {
            $(element).addClass("is-invalid");
        },
        unhighlight: function(element) {
            $(element).removeClass("is-invalid");
        },
        messages: {
            name: {
                required: "First Name field must be filled",
                maxlength: "First Name field must be only 15 characters",
                lettersonly: "Letters only",
            },
            last: {
                required: "Last Name field must be filled",
                minlength: "Last Name field must be only 15 characters",
                lettersonly: "Letters only",
            },
            contact: {
                required: "Contact field must be filled",
                number: "Only numbers allowed",
                minlength: "Number field must be at least 10 characters",
                maxlength: "Number field must be at most 10 characters",
            }
        }
    });
})();