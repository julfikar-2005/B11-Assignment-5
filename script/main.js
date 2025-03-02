document.getElementById("Discover").addEventListener("click", function () {
    window.location.href = "main.html";
});

const colors = ["black", "Cyan", "green", "Gray ", "orange", "pink", "yellow", "red", "Sky Blue"];
let number = 0;
document.getElementById("btn-color").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[number];
    number = (number + 1) % colors.length;
})


const today = new Date();
const newDateToday = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
const formatDate = today.toLocaleDateString("en-US", newDateToday);
document.getElementById("newDate").innerText = formatDate



