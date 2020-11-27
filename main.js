// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).


var header_fa_bars = $('div.header-right i.fa-bars');
var hamburger_menu = $("div.hamburger-menu");
var hamburger_menu_close = $("div.hamburger-menu > a.close");


header_fa_bars.click(function () {

    hamburger_menu.show();

  })



hamburger_menu_close.click(function () {
  hamburger_menu.hide();
});