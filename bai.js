function toGrade(score) {
    let g = ''
    switch (true) {
        case score >= 90: g = 'A'
            break;
        case score >= 80: g = 'B'
            break;
        default: g = 'F'
    }
    return g
}
console.log(toGrade(92)) // mong đợi: 'A'