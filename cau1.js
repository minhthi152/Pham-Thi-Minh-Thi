 // ax + b =0
 let x;
 function findX(a,b){
     if(a==0){
        x = -b;   
     }else{
        x = -b/a;
     }
     console.log(x);
 }
 findX(5,8);
 findX(0,3);