function vacation (group, type, day) {
    let price = 0;

    if (day === "Friday") {
        if (type === "Students") {
            price = 8.45;
        } else if (type === "Business") {
            price = 10.90;
        } else if (type === "Regular") {
            price = 15;
        }
    } else if (day === "Saturday") {
        if (type === "Students") {
            price = 9.80;
        } else if (type === "Business") {
            price = 15.60;
        } else if (type === "Regular") {
            price = 20;
        }
    } else if (day === "Sunday") {
        if (type === "Students") {
            price = 10.46;
        } else if (type === "Business") {
            price = 16;
        } else if (type === "Regular") {
            price = 22.50;
        }
    }

    let totalPrice = price * group;

    if (type === "Students" && group >= 30) {
        totalPrice = totalPrice - (totalPrice * 15 / 100);
    } else if (type === "Business" && group >= 100) {
        totalPrice = totalPrice - (price * 10);
    } else if (type === "Regular" && group >= 10 && group <= 20) {
        totalPrice = totalPrice - (totalPrice * 5 / 100);
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");