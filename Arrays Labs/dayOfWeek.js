function dayOfWeek(dayNum) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currentDay = '';
    if(dayNum >= 1 && dayNum <= 7) {
        if (dayNum === 1) {
            currentDay = days[0];
        } else if (dayNum === 2) {
            currentDay = days[1];
        } else if (dayNum === 3) {
            currentDay = days[2];
        } else if (dayNum === 4) {
            currentDay = days[3];
        } else if (dayNum === 5) {
            currentDay = days[4];
        } else if (dayNum === 6) {
            currentDay = days[5];
        } else if (dayNum === 7) {
            currentDay = days[6];
        }
        console.log(currentDay);
    } else {
        console.log("Invalid day!");
    }
}
dayOfWeek(11);