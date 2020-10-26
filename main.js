//cliccando sull'icona dell'amburger, mostra il menù
$('i.fas.fa-bars').click(function() {
    $('.hamburger-menu').show();
});

//cliccando sull'icona x, nasconde il menù
$('i.fas.fa-times').click(function() {
    $('.hamburger-menu').hide();
});


//SOLUZIONE CON TRANSIZIONE fadeIn() e fadeOut()
// //cliccando sull'icona dell'amburger, mostra il menù
// $('i.fas.fa-bars').click(function() {
//     $('.hamburger-menu').fadeIn();
// });
//
// //cliccando sull'icona x, nasconde il menù
// $('i.fas.fa-times').click(function() {
//     $('.hamburger-menu').fadeOut();
// });
