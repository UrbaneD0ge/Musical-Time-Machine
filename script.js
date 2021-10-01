
// Datepicker 
$(function () {
    $("#datepicker").datepicker({showOtherMonths: true,
        selectOtherMonths: true, dateFormat: "MM d" });
});

//Form Handler
var qDate;

$(function () {
    $('#dateSubmit').on('submit', function (e) {
        e.preventDefault();
        qDate = $('#dateSubmit input').val();
        console.log(qDate);

        queryString = './page2.html?q=' + qDate;
        location.assign(queryString);
    })
});

$(function () {
    $('#todayBtn').on('click', function (t) {
        t.preventDefault();
        qDate = moment().format('MM d');
        console.log(qDate);
    })
})


