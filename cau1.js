 // ax + b =0
 let x;
 function findX(a,b){
     if(a==0){
        if(b==0){
         console.log("phuong trinh vo so nghiem");  
        }else{
         console.log("phuong trinh vo nghiem");  
        }
      
     }else{
        x = -b/a;
        console.log(x);
     }
     
 }
 findX(5,8);
 findX(0,3);