// js/scripts.js
$(document).ready(function() {
    $('#contactBtn').click(function() {
        $('#contactModal').modal('show');
    });

    $('#contactForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'YOUR_GETFORM_ENDPOINT',
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactModal').modal('hide');
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                alert('There was an error submitting the form. Please try again.');
            }
        });
    });
});
