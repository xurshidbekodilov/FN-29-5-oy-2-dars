//Masala 1: `map` va `filter` metodlari bilan alifbo tartibini o'zgartirish
//Berilgan massivdagi so'zlardan uzunligi 5 ta belgidan kam bo'lganlarni olib tashlab, 
//qolgan so'zlarning har birining bosh harfini katta harfga aylantiruvchi funksiyani yozing.
// function func(arr) {
//     const filterArr = arr.filter(function(element) {
//         return element.length > 4;
//     });
//     const res = filterArr.map(function(element) {
//         return element.charAt(0).toUpperCase() + element.slice(1);
//     });
//     return res;
// }
// const arr = ["olma", "banan", "shaftoli", "uzum", "kivi", "qulupnay"];
// const result = func(arr);
// console.log(result);



//Masala 2: `find` va `map` metodlari bilan talabalarni topish
//Talabalarning ism va yoshlarini o'z ichiga olgan massivdan 20 yoshdan katta bo'lgan birinchi 
//talabani topuvchi va uning ismini katta harf bilan qaytaruvchi funksiyani yozing.
// function func(students) {
//     const res = students.find(function(student) {
//         return student.age > 20;
//     });
//     if (res) {
//         return res.name.toUpperCase();
//     } else {
//         return 'Talaba topilmadi';
//     }
// }
// const students = [
//     { name: 'Ali', age: 18 },
//     { name: 'John', age: 22 },
//     { name: 'Sara', age: 19 },
//     { name: 'David', age: 25 }
// ];
// const result = func(students);
// console.log(result);




// Masala 3: `filter` va `reduce` metodlari bilan umumiy summani hisoblash
// Berilgan mahsulotlarning narxlari massivini oladigan va faqat 10000 dan katta narxlarga
// ega mahsulotlarning umumiy narxini hisoblaydigan funksiyani yozing.
// function func(narxlar) {
//     const sarala = narxlar.filter(function(narx) {
//         return narx > 10000;
//     });
//     const umumiy = sarala.reduce(function(sum, narx) {
//         return sum + narx;
//     }, 0);

//     return umumiy;
// }
// const narxlar = [5000, 12000, 8000, 20000, 15000, 3000];
// const result = func(narxlar);
// console.log(result);



// Masala 4: `every` va `some` metodlari bilan aniq shartlarni tekshirish
// Berilgan massivdagi sonlarning hammasi musbat ekanligini tekshiring. Agar shunday bo'lsa,
// "Barcha sonlar musbat" degan xabarni, aks holda, "Musbat bo'lmagan sonlar bor" degan
// xabarni chiqaruvchi funksiyani yozing. Shu bilan birga, agar kamida bitta son 100 dan
// katta bo'lsa, "Katta son bor" degan xabarni chiqaruvchi shartni ham qo'shing
// function func(sonlar) {
//     const Musbat = sonlar.every(function(son) {
//         return son > 0;
//     });
//     const kattaSon = sonlar.some(function(son) {
//         return son > 100;
//     });
//     if (Musbat) {
//         console.log("Barcha sonlar musbat");
//     } else {
//         console.log("Musbat bo'lmagan sonlar bor");
//     }
//     if (kattaSon) {
//         console.log("Katta son bor");
//     }
// }
// const sonlar = [15, 28, 35, 102, 60];
// func(sonlar);



// ### Masala 5: `forEach` va `map` metodlari bilan massiv elementlarini transformatsiya qilish
// Berilgan massivdagi har bir elementni kvadratini hisoblab, bu qiymatlarni yangi massivga 
// qo'shish uchun funksiyani yozing. So'ngra, yangi massivdagi elementlarni konsolga chiqaruvchi funksiyani yozing.
// function kvadratHisoblash(sonlar) {
//     const kvadratlar = sonlar.map(function(son) {
//         return son * son;
//     });
//     return kvadratlar;
// }
// function konsolgaChiqarish(sonlar) {
//     sonlar.forEach(function(son) {
//         console.log(son);
//     });
// }
// const sonlar = [1, 2, 3, 4, 5];
// const kvadratlar = kvadratHisoblash(sonlar);
// konsolgaChiqarish(kvadratlar);


// ### Masala 6: `map`, `filter`, va `reduce` metodlarini birgalikda ishlatish
// Berilgan xodimlarning maoshlarini o'z ichiga olgan massivdan faqat 2000 dan 
// kam bo'lmagan maoshlarni tanlab, ularni 10% ko'paytirib, barcha xodimlarning yangi umumiy maoshini hisoblaydigan funksiyani yozing
// function yangiUmumiyMaosh(xodimlar) {
//     var filterlanganlar = xodimlar.filter(function(maosh) {
//         return maosh >= 2000;
//     })
//     var kopaytirilgan= filterlanganlar.map(function(maosh) {
//         return maosh * 1.1;
//     });
//     var umumiyMaosh = 0;
//     kopaytirilgan.forEach(function(maosh) {
//         umumiyMaosh += maosh;
//     });
//     return umumiyMaosh;
// }
// const xodimlar = [1500, 2000, 2500, 3000, 1800, 4000];
// const natija = yangiUmumiyMaosh(xodimlar);
// console.log(natija);



// ### Masala 7: `find`, `filter`, va `map` metodlari bilan talabalar ma'lumotlarini qayta ishlash
// Berilgan talabalar ma'lumotlar massividan (ism, yosh, baho) kamida 80 ball olgan birinchi 
// talabaning ismi va yoshini toping, so'ngra barcha 80 dan yuqori ball olgan talabalarni toping 
// va ularning ismlarini katta harf bilan qaytaruvchi funksiyani yozing.
// function func(talabalar) {
//     var birinchiTalaba = talabalar.find(function(talaba) {
//         return talaba.baho >= 80;
//     });
//     if (birinchiTalaba) {
//         console.log("Birinchi talaba: Ismi - " + birinchiTalaba.ism + ", Yoshi - " + birinchiTalaba.yosh);
//     } else {
//         console.log("80 ball olgan talaba topilmadi.");
//     }
//     var yuqoriBallTalabalar = talabalar.filter(function(talaba) {
//         return talaba.baho > 80;
//     });
//     var kattaHarf = yuqoriBallTalabalar.map(function(talaba) {
//         return talaba.ism.toUpperCase();
//     });
//     return kattaHarf;
// }
// const talabalar = [
//     { ism: "Ali", yosh: 20, baho: 75 },
//     { ism: "Vali", yosh: 22, baho: 85 },
//     { ism: "Aziz", yosh: 19, baho: 90 },
//     { ism: "Sardor", yosh: 21, baho: 78 },
//     { ism: "Gulnora", yosh: 23, baho: 82 }
// ];
// const natija = func(talabalar);
// console.log("80 dan yuqori ball olgan talabalar: ", natija);



// ### Masala 1: `toUpperCase` metodi bilan harflarni katta harfga aylantirish
// Berilgan stringdagi barcha harflarni katta harfga aylantiruvchi funksiyani yozing
// function kattaHarfgaAylantirish(matn) {
//     return matn.toUpperCase();
// }
// const inputMatn = "salom, dunyo!";
// const natija = kattaHarfgaAylantirish(inputMatn);
// console.log(natija); 


//### Masala 2: `includes` metodi bilan substringni tekshirish
//Berilgan stringda ma'lum bir substring mavjudligini tekshiruvchi funksiyani yozing.
// function func(matn, substring) {
//     return matn.includes(substring);
// }
// const inputMatn = "Salom, dunyo!";
// const substring = "dunyo";
// const natija = func(inputMatn, substring);
// console.log(natija);



// ### Masala 3: `replace` metodi bilan substringni almashtirish
// Berilgan stringdagi barcha "JavaScript" so'zlarini "JS" so'ziga almashtiruvchi funksiyani yozing
// function almashtirish(matn) {
//     return matn.split("JavaScript").join("JS");
// }
// const inputMatn = "JavaScript juda kuchli dasturlash tili.";
// const natija = almashtirish(inputMatn);
// console.log(natija); 



// ### Masala 4: `split` va `join` metodlari bilan so'zlarni teskari tartibda qaytarish
// function teskariTartib(matn) {
//     return matn.split(" ").reverse().join(" ");
// }
// const inputMatn = "Salom dunyo!";
// const natija = teskariTartib(inputMatn);
// console.log(natija);



// ### Masala 5: `trim` metodi bilan bo'sh joylarni olib tashlash
// Berilgan stringning boshida va oxirida bo'sh joylarni olib tashlovchi funksiyani yozing.
// function func(matn) {
//     return matn.trim();
// }
// const inputMatn = "   Salom, dunyo!   ";
// const natija = func(inputMatn);
// console.log(natija);
