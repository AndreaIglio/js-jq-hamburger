// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).




$('div.header-right i.fa-bars').click(function () {

    $('div.hamburger-menu').show();

  })



$('div.hamburger-menu > a.close').click(function () {


$('div.hamburger-menu').hide();


})