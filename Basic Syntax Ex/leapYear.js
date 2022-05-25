function leapYear(year) {
    let isYearLeap = false;

    if (year % 4 === 0 && year % 100 !== 0) {
        isYearLeap = true;
    }
    if (year % 400 === 0) {
        isYearLeap = true;
    }

    if (isYearLeap === true) {
        console.log('yes');
    } else {
        console.log('no');
    }

}
leapYear(1984);
leapYear(2003);