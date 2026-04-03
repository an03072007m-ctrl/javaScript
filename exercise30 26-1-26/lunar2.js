function main() {
    const [d,m,y]  = "2-4-2026".split("-").map(Number)

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
function getNewMoonDay(k,timeZone = 7){
    const T = k / 1236.85;
    const T2 = T * T;
    const T3 = T2 * T;
    const dr = Math.PI/ 180
    let jd1 =
        2415020.75933 +
        29.53058868 * k +
        0.0001178 * T2 -
        0.000000155 * T3;
    jd1 +=0.00033 * Math.sin((166.56 + 132.87 * T -0.009173 *T2) * dr);
    const M =
        359.2242+
        29.10535608 * k -
        0.0000333 * T2 -
        0.000000155 * T3;
    const Mpr =
        306.0253 +
        385.81691806 *k +
        0.0107306 * T2 +
        0.00001236 * T3;
    const F =
        21.2964 +
        390.67050646 * k -
        0.0016528 * T2 -
        0.00000239 * T3;
    let c1 =
        (0.1734 - 0.000393 * T) * Math.sin(M * dr)+
        0.0021 * Math.sin(2* dr * M )-
        0.4068 * Math.sin(Mpr * dr)+
        0.0161 * Math.sin(dr * 2 * Mpr)-
        0.0004 * Math.sin(dr * 3 * Mpr) +
        0.0104 * Math.sin(dr * 2 * F)-
        0.0051 * Math.sin(dr *(M + Mpr))-
        0.0074 * Math.sin(dr *(M - Mpr))+
        0.0004 * Math.sin(dr *(2 * F + M))-
        0.0004 * Math.sin(dr *(2 * F - M))-
        0.0006 * Math.sin(dr *(2 * F + Mpr))+
        0.0010 * Math.sin(dr *(2 * F - Mpr))+
        0.0005 * Math.sin(dr *(2* Mpr + M));
    let deltaT;
    if (T < -11) {
        deltaT =
            0.001 +
            0.000839 * T +
            0.0002261 * T2 -
            0.00000845 * T3 -
            0.000000081 * T * T3;
    } else {
        deltaT =
            -0.000278 +
            0.000265 * T +
            0.000262 * T2;
    }

    const JdNew = jd1 + c1 - deltaT;
    return Math.floor(JdNew + 0.5 + timeZone / 24);

}
function getSunLongitude(jdn,timeZone = 7){
    const T = (jdn - 2451545.5 - timeZone /24)/36525;
    const T2 = T * T;
    const dr = Math.PI /180
    const M =
        357.52910 +
        35999.05030 * T -
        0.0001559 * T2 -
        0.00000048 * T * T2;
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
     L *= dr;
     L -= Math.PI * 2 * Math.floor(L / (Math.PI * 2));

    return Math.floor(L / Math.PI * 6);

}
function getLunarMonth11(year,timeZone = 7){
    const off = jdFromDate(31,12,year) - 2415021;
    const k = Math.floor (off/ 29.530588853);
    let nm = getNewMoonDay(k,timeZone);
    const sunLong = getSunLongitude(nm,timeZone);
    if (sunLong >= 9) {
        nm = getNewMoonDay(k - 1,timeZone);
    }
    return nm;
}
function getAnimalYear(lunarYear){
    const animal= [
        "Monkey",
        "Chicken",
        "Dog",
        "Pig",
        "Mouse",
        "Buffalo",
        "Tiger",
        "Cat",
        "Dragon",
        "Snake",
        "Horse",
        "Goat",];
    return animal[lunarYear % 12]
}
