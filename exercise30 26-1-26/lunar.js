function main() {
    const [d,m,y]  = "11-12-2008".split("-").map(Number)

    const jd = jdFromDate(d,m,y)
    console.log("JDN =",jd)

    const k = Math.floor((jd - 2415021)/ 29.530588853)
    console.log("k =", k)// so chu ki mat trang da troi qua

    const monthStart = getNewMoonDay(k)
    console.log("monthStart = ",monthStart)

    const LunarDay = jd - monthStart + 1
    console.log("LunarDay = ",LunarDay)
    let finalMonthStart = monthStart;
    let finalLunarDay = LunarDay;
    if (finalLunarDay <= 0){
        finalMonthStart = getNewMoonDay(k-1);
        finalLunarDay = jd - finalMonthStart + 1;
    }
    console.log("finalMonthStart =",finalMonthStart)
    console.log("finalLunarDay =",finalLunarDay)

    const a11 = getLunarMonth11(y);
    console.log("a11 =",a11)
    const b11 = getLunarMonth11(y + 1);
    console.log("b11 =",b11)
    let lunarYear;
    let month11;


    if (a11 >= finalMonthStart ){
        lunarYear = y;
        month11 = getLunarMonth11(y -1);
    }else{
        lunarYear = y + 1;
        month11 = a11
    }
    console.log("lunarYear =",lunarYear);
    console.log("month11 =",month11)


    const diff = Math.floor((finalMonthStart -month11)/29);
    let lunarMonth = diff +11;
    if(lunarMonth > 12 ){
        lunarMonth = lunarMonth -12;
    }
    console.log("month11 =", month11);
    console.log("diff =", diff);
    console.log("lunarMonth =", lunarMonth);
    console.log("Am lich =", finalLunarDay + "/" + lunarMonth + "/" + lunarYear);

    const AnimalYear =  getAnimalYear(lunarYear)
    console.log("nam con =", AnimalYear)



} main()
function jdFromDate(day, month,year){
 const a = Math.floor((14 - month) / 12);
 const y = year + 4800 - a;
 const m = month + 12 * a - 3;
 const jd =
     day +
     Math.floor((153 * m + 2)/ 5)+ 
     365 * y +
     Math.floor(y / 4)-
     Math.floor(y /100)+
     Math.floor(y / 400)-
     32045;
 return jd;
}
function getNewMoonDay(k){
    const T = k / 1236.825;
    const T2 = T * T;
    const T3 = T2 * T;
    const jd =
        2415021.076998699 +
        29.530588853 * k +
        0.00015437 * T2 -
        0.000001517 * T3;
    return Math.floor(jd + 0.5);
}
function getSunLongitude(jdn){
    const T = (jdn - 2451545.0)/36525;
    const T2 = T * T;
    const dr = Math.PI /180
    const M =
        357.52910 +
        35999.05030 * T -
        0.0001559 * T2 -
        0.00000048 * T *T2;
    const L0 =
        280.46645 +
        36000.76983 * T +
        0.0003032 *T2;
    let DL =
        (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL +=
        (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) +
        0.000290 * Math.sin(dr * 3 * M);

    let L = L0 + DL;
    L = L * dr;
    L = L - Math.PI * 2 * Math.floor(L / (Math.PI * 2));

    return Math.floor(L / Math.PI * 6);

}
function getLunarMonth11(year){
    const off = jdFromDate(31,12,year) - 2415021;
    const k = Math.floor (off/ 29.530588853);
    let nm = getNewMoonDay(k);
    const sunLong = getSunLongitude(nm);
    if (sunLong >= 9) {
        nm = getNewMoonDay(k - 1);
    }
    return nm;
}
function getAnimalYear(lunarYear){
    const animal= ["Monkey","Chicken","Dog","Pig","Mouse","Buffalo","Tiger", "Cat","Dragon","Snake","Goat",];
    return animal[lunarYear % 12]
}
