function addToCart(quantity,productName="Elma")
//sabit belirlenen değeri fonksiyonnda sona yazmak mantıklı olan.
{
    console.log("sepete eklendi!: Ürün: " + productName +
    " -adet:" +quantity)

}

//addToCart() //functiona girer ancak undefined döner.(default değer yok ise!)
//undefined ile null tamamen farklı. Değer isteyen variable a değer gönderilmezse undefined alır.
//JS hata vermez. Farklı Programlama dilleri bu tanımlamayı derlemez dahi.
addToCart("Yumurta",10)
addToCart(10)
addToCart("Limon")
addToCart(undefined,10)
addToCart(10,undefined)
//addToCart("Karpuz")
//addToCart(15)


//değişkeni fonksiyon olarak tanımlama
let sayHello= ()=>{
    console.log("hello world!!")
}

sayHello()


//fonksiyonu değişkene atama
let sayHello2= function () {
    console.log("Hello World 2!")    
}

sayHello2()


function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)


let product1={productName:"Elma",unitPrice:10,quantity:5} //obje tanımlaması.

function addToCart3(product) {
    console.log("ürün: "+product.productName)
    console.log("adet: "+product.quantity)
    console.log("fiyat: "+product.unitPrice)
}

addToCart3(product1)

let product2={productName:"Elma",unitPrice:10,quantity:5} //obje tanımlaması. objeler,arrayler referans tiptir stack ve HEAP kullanılır!!
let product3={productName:"Elma",unitPrice:10,quantity:5} //obje tanımlaması.
product2=product3//referans numarasını değiştirdi!! Artık aynı bellek adresini tutuyor!!
product2.productName="Karpuz"
console.log(product3.productName)//Karpuz


let sayi1=10//sayılar değer tiptir.Değeri atayıp işin bitiyor stackte sadece. Refere edilmiyor!!
let sayi2=20
sayi1=sayi2
sayi2= 100
console.log(sayi1)//20


////birden fazla ürünü sepete ekleme
function addToCart4(products) {
    console.log(products)
}

//array içinde obje tanımlama
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:12,quantity:2},
    {productName:"Karpuz",unitPrice:13,quantity:5}
]

addToCart4(products)

////rest 
/*function add(number1,number2) {
    console.log(number1+number2)
}

function add2(number1,number2,number3) {
    console.log(number1+number2+number3)
}

function add(number1,number2,number3,number4) {
    console.log(number1+number2,number3,number4)
}
*/

function add(x,...numbers) { //rest,,rest sona yazılması lazım çünkü rest bütün gördüğü değerleri array yapıp
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]        
    }
    console.log(total)
    console.log(x)
}

//add(1,5,9)
add(2,54,23,654)
add(20,30)

let numbers=[30,10,500,600,120]
console.log(Math.max(30,10,500,600,120))
console.log(...numbers) //spread
//console.log(Math.max(numbers))//NaN döner. array gönderdik çünkü. Ayırmamız lazım sprad ile
console.log(Math.max(...numbers))// spread ile ayrıştırmamış gerekir çünkü fonksiyonda arrayi okuyamayız.


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]]=[
    {name:"iç anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Bursa","Trabzon"]
    ]
]//çoklu değer tanımlama

//console.log(regions[1])
console.log(icAnadolu.name)
console.log(marmara.population )
//console.log(icAnadoluSehirleri)
console.log(icAnadoluSehirleri)



let newProductName,newUnitPrice,newQuantity
({productName:newProductName,
unitPrice:newUnitPrice,quantity:newQuantity}
={productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)