const person = {
    name: "Ross",
    age: "23"
};

console.log(person["name"]);
console.log(person.age);
    
let day = "Monday";
let alarmSetting = "alarm";

const alarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
};

if (day == "Saturday" || day == "Sunday"){
    alarmSetting = alarm.weekendAlarm;
}
else {
    alarmSetting = alarm.weekdayAlarm;
}

console.log(day);
console.log(alarmSetting);

person.songs = ["American Idiot", "Celebration"];

console.log(person.songs);