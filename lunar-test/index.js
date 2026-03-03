const solarlunar = require("solarlunar").default;

const result = solarlunar.solar2lunar(2027,2 ,3 );
console.log(result);

console.log(
    `Am lich: ${result.lDay}/${result.lMonth}/${result.lYear}` +
    (result.isLeap ? " (thang nhuan)" : "")
);
const animalsVi = {
    "鼠": "Tý", "牛": "Sửu", "虎": "Dần", "兔": "Mão",
    "龙": "Thìn", "蛇": "Tỵ", "马": "Ngọ", "羊": "Mùi",
    "猴": "Thân", "鸡": "Dậu", "狗": "Tuất", "猪": "Hợi"
};

console.log("Con giap:", animalsVi[result.animal] || result.animal);