
// Datepicker 
$( function() {
    $( "#datepicker" ).datepicker({maxDate: +0});
} );

//Form Handler
var qDate;

$(function() {
    $('#dateSubmit').on('submit', function(e) {
        e.preventDefault();
        qDate = $('#dateSubmit input').val();
        console.log(qDate);
    })
});

$(function() {
    $('#todayBtn').on('click', function(t) {
        t.preventDefault();
        qDate = moment().format('l');
        console.log(qDate);
    })
})

