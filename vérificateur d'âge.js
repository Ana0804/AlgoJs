{
    const d = new Date(); 
        console.log (d);
        
    var c = d.getFullYear();

    function age(a) {
        let result;
            if (a < c){
                result = 'ACCESS DENIED';
            } else {
                result = 'ACCESS ALLOWED';
            }
            return result;   
            }
        console.log(age(1999))
}

// {
//     function naissance(b) {
//         let result;
//             if (b < 2003){
//                 result = 'ACCESS DENIED';
//             } else {
//                 result = 'ACCESS ALLOWED';
//             }
//             return result;
//             }
//         console.log(naissance(1994))
// }

