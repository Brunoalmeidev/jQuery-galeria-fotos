$(document).ready(function() {
    $('header button').click(function(e) {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        console.log("submit");
        e.preventDefault();
    })
})