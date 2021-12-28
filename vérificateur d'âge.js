const today = new Date();
const birth = new Date(1999, 3, )
var todayyear = today.getFullYear();
var birthyear = birth.getFullYear();

var a = todayyear - birthyear;

    function age(a) {
        let result;
            if (a < 18){
                result = 'ACCESS DENIED';
            } 
            else {
                result = 'ACCESS ALLOWED';
            }
            return result;   
            }

console.log(age(a))        



