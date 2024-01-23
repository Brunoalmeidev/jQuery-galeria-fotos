$(document).ready(function() {
    $('header button').click(function(e) {
        alert("Expandir formulário")
    })

    $('form').on('submit', function(e) {
        console.log("submit");
        e.preventDefault();
    })
})