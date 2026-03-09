function main() {
    const y = 2008
    const m = 12
    const d = 11
    const jd = jdFromDate(d,m,y)
    console.log("JDN =",jd)
    const k = Math.floor((jd - 2415021)/ 29.530588853)
    console.log("k =", k)// so chu ki mat trang da troi qua
    const monthStart = getNewMoonDay(k)
    console.log("monthStart = ",monthStart)
    const Lunar = jd - monthStart + 1
    console.log("Lunar day = ",Lunar)

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
