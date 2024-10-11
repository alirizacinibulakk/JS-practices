///       JAVASCRİPT ÖDEVLERİ        /////
///       1. İNDİRİM HESAPLAMA       /////

alert("1. İNDİRİM HESAPLAMA");

let price = prompt("Ürün fiyatını girin: ");
price = Number(price);    
let discount = prompt("İndirim yüzdesini girin: ");
discount = Number(discount);
alert("İndirimli ürün fiyatı: " + (price - (price * discount / 100)));




///       2. NOT HESAPLAMA       /////

alert("2. NOT HESAPLAMA");

let vize = prompt("Vize notunuzu giriniz: ");
vize = Number(vize);
let final = prompt("Final notunuzu giriniz: ");
final = Number(final);
let gpa = (vize * 40 /100) + (final *60 / 100); 
if(0 <= vize && vize <= 100 && 0 <= final && final <= 100){
    if(gpa >= 50){
        alert("Geçtiniz..")
    }else if(gpa >= 40 && gpa <= 50){
        alert("Şartlı geçtiniz..")
    }
    else{
        alert("Kaldınız :(")
    }
}else{
    alert("Lütfen 0 ile 100 arasında bir sayı girin.")
}




///       3. GÜN HESAPLAMA       /////

alert("3. GÜN HESAPLAMA");

let days = prompt("Lütfen 1 ile 7 arasında bir sayı giriniz: ");
switch(Number(days)){
    case 1:
        alert("Pazartesi");
        break;
    case 2:
        alert("Salı");
        break;
    case 3:
        alert("Çarşamba");
        break;
    case 4:
        alert("Perşembe");
        break;
    case 5:
        alert("Cuma");
        break;
    case 6:
        alert("Cumartesi");
        break;
    case 7:
        alert("Pazar");
        break;
    default:
        alert("Geçersiz giriş! Lütfen 1 ile 7 arasında bir sayı girin.");
}




///       4. EN BÜYÜK HESAPLAMA       /////

alert("4. EN BÜYÜK HESAPLAMA");

let sayi1 = prompt("Birinci sayıyı girin: ");
sayi1 = Number(sayi1);
let sayi2 = prompt("İkinci sayıyı girin: ");
sayi2 = Number(sayi2);
let sayi3 = prompt("Üçüncü sayıyı girin: ");
sayi3 = Number(sayi3);
let enBuyuk;

if (sayi1 > sayi2){
  büyükSayi = sayi1;
} else{
  büyükSayi = sayi2;
}
if (sayi3 > enBuyuk) {
  büyükSayi = sayi3;
}
if(sayi1 === sayi2 || sayi1 === sayi3 || sayi3 === sayi2){
    alert("Aynı sayı girdiniz.");
}else{
    alert("En büyük sayı: " + büyükSayi);
}




///       5. SANİYE-SAAT HESAPLAMA       /////

alert("5. SANİYE-SAAT HESAPLAMA ");

let second = prompt("Bir saniye değeri giriniz: ");
let hour = Math.floor(second / 3600);
let minute = Math.floor((second % 3600) / 60);
let remainingSecond = Math.floor(second % 60);

alert(hour + " " + "saat " + minute + " " + "dakika " + remainingSecond + " " + "saniye")




///       6. GÜNCEL YAŞ HESAPLAMA       /////

alert("6. GÜNCEL YAŞ HESAPLAMA");

let year = prompt("Doğum yılınızı sayı olarak giriniz: ");
year = Number(year);
let month = prompt("Doğum ayınızı sayı olarak giriniz: ");
month = Number(month);
let day = prompt("Doğum gününüzü sayı olarak giriniz: ");
day = Number(day);

let currentDate = new Date();
let nowYear = currentDate.getFullYear();
let nowMonth = currentDate.getMonth();
let nowDay = currentDate.getDate();

year = nowYear - year;
month = nowMonth - month + 1;
day = nowDay - day;

if(month < 0){
    year--;
    month += 12;
}
if(day < 0){
    month--;
    day += new Date(nowYear, nowMonth, 0).getDate();
}

alert("Tam yaşınız: " + " " + year + " " + "yıl" + " " + month + " " + "ay" + " " + day + " " + "gün");



///       7. SAATLİK ÜCRET HESAPLAMA       /////

alert("7. SAATLİK ÜCRET HESAPLAMA");

let workingHours = prompt("Kaç saat çalıştığınızı yazınız: ");
let hoursFee = prompt("Saat başı ücretinizi yazınız: ");
alert("Toplam kazancınız: " + workingHours * hoursFee);



///       8. AYLIK TAKSİT HESAPLAMA       /////

alert("8. AYLIK TAKSİT HESAPLAMA");

let credi = prompt("Kredi miktarını giriniz: ");
credi = Number(credi);
let installment = prompt("Taksit sayısını giriniz: ");
installment = Number(installment);
alert("Aylık taksit miktarı: " + credi / installment);
let interest = prompt("Toplam faiz oranını giriniz: ");
interest = Number(interest);
interest = credi + (credi * interest / 100);
alert("Faizli aylık taksit miktarı: " + interest / installment);



///       9. KULLANICI ADI VE ŞİFRE KONTROLÜ       /////

alert("9. KULLANICI ADI VE ŞİFRE KONTROLÜ");

let user = prompt("Kullanıcı adınızı giriniz: ");
let password = prompt("Şifrenizi giriniz: ");
password = Number(password);
if(user === "admin" && password === 1234){
    alert("Giriş başarılı");
}else{
    alert("Kullanıcı adı ve şifre hatalı..");
}



///       10. NET KAR HESAPLAMA       /////

alert("10. NET KAR HESAPLAMA");

let salesPrice = prompt("Lütfen satış bedelini giriniz: ");
salesPrice = Number(salesPrice);
let cost = prompt("Lütfen maliyet bedelini giriniz (yoksa 0 olarak belirtiniz): ");
cost = Number(cost);
let kdv = salesPrice * 0.20;
kdv = Number(kdv);
let incomeTax = salesPrice * 0.25;
incomeTax = Number(incomeTax);
alert("KDV dahil satış bedeli: " + (salesPrice + kdv) + "\nnet kar: " + (salesPrice - incomeTax - cost));
