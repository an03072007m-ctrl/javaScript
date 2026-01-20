
// 24) Kiểm tra anagram (bỏ khoảng trắng, không phân biệt hoa thường)
function isAnagram(a, b) {
    const s1 = a.replace(/\s+/,"");
    const s2 = b.replace(/\s+/g,"");
    const sort1 = s1
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    const sort2 = s2
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    return sort1 === sort2;
}
console.log(isAnagram("listen","silent"), "expected true");
console.log(isAnagram("Triangle","Integral"), "expected true");
console.log(isAnagram("A gentleman","Elegant man"), "expected true");
console.log(isAnagram("rat","car"), "expected false");
console.log(isAnagram("Dormitory","Dirty room"), "expected true");
;