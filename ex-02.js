function repeatStringNumTimes(text,num) {
    let temp = "";
    if (num > 0 && typeof(num) === "number") {
        for (let i = 0; i < num; i++) {
            temp = temp+text;
        } 
    }else{
        return "vacio";
    }
    console.log(temp);
}

repeatStringNumTimes("hello", 5); // "hellohellohellohellohello"
repeatStringNumTimes("abc", 3); // "abcabcabc"
repeatStringNumTimes("abc", "2"); // ""
repeatStringNumTimes("mr_robot", -1); // ""
repeatStringNumTimes("friend?", "5"); // ""