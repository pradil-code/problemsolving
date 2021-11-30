// let counter = 0
// typeof counter 
// let b = ++ counter
// console.log({b,b})

const computePower = function(x,y){

    if(x && y){
        let start = 0
        let value = 1
         while(start<y) {
               value = value*x
               start ++  
           }
    return value 
          
    }
    }
   const result =  computePower(0,3)
   console.log({result,result})