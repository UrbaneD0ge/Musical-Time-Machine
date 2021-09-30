
// Datepicker 
$(function () {
    $("#datepicker").datepicker({showOtherMonths: true,
        selectOtherMonths: true, maxDate: +0, dateFormat: "MM d" });
});

//Form Handler
var qDate;

$(function () {
    $('#dateSubmit').on('submit', function (e) {
        e.preventDefault();
        qDate = $('#dateSubmit input').val();
        console.log(qDate);
    })
});

$(function () {
    $('#todayBtn').on('click', function (t) {
        t.preventDefault();
        qDate = moment().format('MMMM Do');
        console.log(qDate);
    })
})


