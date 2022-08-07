var age;



var Yosh = '18'
var Vozrast = '59'
console.log(Yosh)


var Kl = +prompt('Yoshingizni kiriting')
   
    //  false && true   = false
    if(( Kl == '18' || Kl > '18' ) && ( Kl < '59' ) ) {
        age =" Siz hali ishlashingiz kerak"
    }
    else if( Kl > '59' ){
        age =" Pensiyaga chiqishingiz kerak!"
    }
    else if( Kl < '18' ){ age = "IShga vohli boorib oqing"}
   alert(age);