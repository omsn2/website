$(document).ready(function() {
    $('#contactBtn').click(function() {
        $('#contactModal').modal('show');
    });

    $('#contactForm').submit(function(event) {
        event.preventDefault();

        const email = $('#email').val();
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const terms = $('#terms').is(':checked');

        if (email && firstName && lastName && terms) {
            $.ajax({
                url: $(this).attr('action'),
                type: 'POST',
                data: $(this).serialize(),
                success: function(response) {
                    $('#contactModal').modal('hide');
                    alert('Your message has been sent successfully!');
                },
                error: function(error) {
                    alert('There was an error sending your message.');
                }
            });
        } else {
            alert('Please fill out all fields and agree to the terms.');
        }
    });
});

function changeImage(src) {
    $('#projectImage').attr('src', src);
}
