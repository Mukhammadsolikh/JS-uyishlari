    var a = +prompt('birinchi raqamni tering!') // 1
    var b = +prompt('ikkinchi raqamni tering!') // 2
    var c = +prompt('uchunchi raqamni tering!') // 3
    var res;
    //  false && true   = false
    if ((a > b && a < c) || (a < b && a > c)){
        res = a + " bu ortancha raqam"
    }else if ((b > c && b < a) || b < c && b > a ){
        res = b + " bu ortancha raqam " 
    }else if ((c < a && c > b ) || (c > a && c < b )) {
        res = c + " bu ortancha raqam "
    }
    else if(a == b || b == c || a == c ){ res = "2ta bir hil raqam yozma!"}
    alert(res);