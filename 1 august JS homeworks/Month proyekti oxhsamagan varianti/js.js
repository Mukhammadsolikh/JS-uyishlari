var month;
var Kl = +prompt('Qaysi oydasiz?')
   
    //  false && true   = false
    if( Kl == 1 || 2 || 12) {
        month =" siz  Qish faslida siz!"
    }
    if( Kl == 3 || 4 || 5 ) {
        month =" siz  Bahordasiz faslida siz!"
    }
    if( Kl == 6 || 7 || 8) {
        month =" siz  Yoz faslida siz!"
    }
    if( Kl == 9 || 10 || 11) {
        month =" siz  Kuz faslida siz!"
    }
    alert(month)