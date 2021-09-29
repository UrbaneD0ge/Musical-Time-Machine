// Datepicker 
$( function() {
    $( "#datepicker" ).datepicker({maxDate: +0});
} );

//Form Handler
$(function() {
    $('#dateSubmit').on('submit', function(e) {
        e.preventDefault();
        var qDate = $('datePicker :input');
        console.log(qDate.val());
    })
})