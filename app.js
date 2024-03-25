// 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.



// let ad = prompt("Adınızı daxil edin:");
// let uzunluq = ad.length;
// console.log("Adınızın simvolların sayı:", uzunluq);




// 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.



// let soz1 = prompt("birinci sozu daxil edin:");
// let soz2 = prompt("ikinci sozu daxil edin:");
  
// if(soz1.includes(soz2[1])){
//     console.log("birinci sozun daxilinde ikinci sozun ikinci simvolu var.");
// }
// else{
//     console.log("birinci sozun daxilinde ikinci sozun ikinci simvolu yoxdur.")
// }



// 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.



// let soz1 = prompt("birinci sozu daxil edin:");
// let soz2 = prompt("ikinci sozu daxil edin:");

// if(soz1.startsWith(soz2[0])){
//     console.log("birinci soz,ikinci sozun ilk simvolu ile baslayir.");
// }
// else{
//     console.log("birinci soz,ikinci sozun ilk simvolu ile baslamir.");
// }



// 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.



// let soz1 = prompt("birinci sozu daxil edin:");
// let soz2 = prompt("ikinci sozu daxil edin:");
// let son = soz2[soz2.length - 1];

// if(soz1.endsWith(son)){
//     console.log("birinci soz ikinci sozun son simvolu ile bitir.")
// }
// else{
//     console.log("birinci soz ikinci sozun son simvolu ile bitmir.")
// }




// 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.



// let soz1 = prompt("Birinci sozu daxil edin:");
// let soz2 = prompt("Ikinci sozu daxil edin:");
// let index = soz1.indexOf(soz2[1]); // 2-ci simvolun indeksini tapır

// if (index !== -1) {
//     console.log("Ikinci sozun ikinci simvolunun indeksi:", index);
// } else {
//     console.log("Ikinci sozun ikinci simvolu birinci sozun daxilində yoxdur.");
// }




// 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.



// let soz=prompt("sozu daxil edin:");

// if( soz === soz.toUpperCase()){
//     console.log("daxil etdiyiniz butun herufler boyuk herifle yazilib.");
// }
// else{
//     console.log("daxil etdiyiniz soz hem boyuk hem kicik yazilib.");
// }