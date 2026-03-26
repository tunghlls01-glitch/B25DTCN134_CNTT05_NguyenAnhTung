let btn = document.getElementById("btn");
if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btn.innerText = "🌙";
}
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        btn.innerText = "🌙";
        localStorage.setItem("theme", "dark");
    } else {
        btn.innerText = "☀️";
        localStorage.setItem("theme", "light");
    }
});