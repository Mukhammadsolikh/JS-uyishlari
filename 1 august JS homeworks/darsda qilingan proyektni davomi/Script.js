var a = +prompt('birinchi raqamni tering!') // 50 
    var b = +prompt('ikkinchi raqamni tering!') // 50
    var c = +prompt('uchinchi raqamni tering!') // 10
    var res;
    //  false && true   = false
    if(a > b && a > c) {
        res = a + " Bu katta raqam "
    }
    else if(b > c && b > a){
        res = b + " Bu katta raqam "
    }
    else if(a == b || b == c || a == c ){ res = "2ta bir hil raqam yozma!"}
    else{
        res = c + " Bu katta raqam"
    }
    alert(res);