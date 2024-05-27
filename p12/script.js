let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
};

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let d = hour < 12 ? "AM" : "PM";

    hour = hour % 12 || 12; // Convert 24-hour format to 12-hour format
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;
}, 1000);
