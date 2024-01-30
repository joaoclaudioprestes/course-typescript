"use strict";
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
let days = Days.Monday;
console.log(days);
console.log(Days.Monday);
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
    Colors["red"] = "#f00";
    Colors["blue"] = "#00f";
    Colors["green"] = "#0f0";
})(Colors || (Colors = {}));
console.log(Colors.white);
console.log(Colors["black"]);
