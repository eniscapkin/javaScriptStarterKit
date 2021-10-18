console.log("Merhaba")

/*let yerine var da kullanılabilir. let in avantajı değerlerin tanımladığı line da çalışmasına olanak sağlar. 
Var line a bakmaz en son değer kaç ise onu yazar (süslü içinde veya değil farketmez). Let kullanmak daha mantıklı*/

/*JS type safe değildir*/

let  dolarBugun= 9.30
let dolarDun=9.20
//dolarDun ="Ankara"

{
    let dolarDun=9.10
}

console.log(dolarDun)


const euroDun=11.2 //const sabit değer demek başka değer atayamazsın atarsan hata alırsın
//euroDun=11 // hata yukkarıda const değer verdiğimiz için başka değer verilirse hata alır

console.log(euroDun)

//birden fazla veriyi aynı değişkende tutmak için arrayler kullanılır//
//camelCasing community değişken tanımlama yöntemi ilk harf küçük ikinci harf büyük
//PascalCaasing community değişken tanımlama yöntemi ilk harf büyük ikinci harf büyük
let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu komut kredisi","Özel konut kredileri"]

// array kullanarak döngü ile html üretmece
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log ("<li>"+konutKredileri[i]+"</li>")
    //const element = konutKredileri[i];
}
console.log("</ul>")

console.log(konutKredileri)

/*https://jsonplaceholder.typicode.com/ bize backend sağlar

let users= getUsersFromAPI()

gibi
*/


