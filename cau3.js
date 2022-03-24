function findVowel(str){
    let array = [...str];
    let count = 0; 
    
        for (let i = 0; i< array.length; i++){
          
            switch (array[i]){
                case "a":
                case "o":
                case "e":
                case "u":
                case "i":    
                    count++;
                    break;
            }
           
        }
        if(count!=0){
            console.log(`${str} has ${count} vowels`);
        }else{
            console.log('false');
        }
       

}
let string = "di hoc vui qua";
findVowel(string);
// arr = [...string]
// console.log(arr)
let string2 ="hhhhh kkkk llll";
findVowel(string2);