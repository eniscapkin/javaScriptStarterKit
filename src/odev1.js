//1_ASAL_SAYI
function findPrime (...numbers){


for (let i = 0; i < numbers.length; i++) {
    let number1=numbers[i]
    
    if (number1>1) {
        let k=0;
        for (let number2 = 2; number2 < number1; number2++) {
            if(number1%number2==0){
            k++;
            }
        }
            if (k>0) {
                console.log(number1+" asal degildir")
                
            }else{
                console.log(number1+" asal")
            }
        
    }
    else if (number1==1) {
        console.log( number1 +" asal degildir")
    }
    else {
        console.log("Lütfen gecerli bir pozitif tamsayı giriniz...")
    }



       
}
}


//findPrime(1,3,5,7,9)

//2_ARKADAS_SAYILAR
function friendNumbers(number1,number2){

    let toplam1=0
    let toplam2=0

    for (let i = 0; i < number1; i++) {
        
         if (number1%i==0){
            toplam1=toplam1+i
        }else{
            continue
        }  
    }    

    for (let k = 0; k < number2; k++) {
        
        if (number2%k==0){
            toplam2=toplam2+k 
       }else{
           continue
       }  
   }
   console.log("Number 1 is: "+number1)
   console.log("Number 1's divisor total is: "+toplam1)
   console.log("Number 1 is: "+number2)
   console.log("Number 1's divisor total is: "+toplam2)
   
   if (toplam1==number2) {
       if (toplam2==number1) {
           console.log("These are friend numbers!")
       }else{
           console.log("These are not friend numbers!")
       }
   }else{
    console.log("These are not friend numbers!")
   }
}

//friendNumbers(284,220)

//3_MUKEMMEL_SAYILAR_1000

function perfectNumbers(){
    
    for (let i = 1; i < 1000; i++) {
        let toplam=0
        for (let k = 0; k < i; k++) {
            if (i%k==0) {
                toplam=toplam+k
            }else{continue}
        }
        if (i==toplam) {
            console.log(i + " Mukemmel Sayidir")
        }
        else{continue}
    }
    
}

//perfectNumbers()


//4_ASAL_SAYILAR_1000

function primeNumbers1000(){
    for (let i = 2; i < 1000; i++) {
        let a=0
        for (let k = 1; k < i; k++) {
            if (i%k==0) {
                a++
            }
            else {continue} 
        }
        if (a>1) {
            //console.log(i+" asal değildir")
            continue
        }else {
            console.log(i+" is a Prime Number")
        }
     }
}

primeNumbers1000()


