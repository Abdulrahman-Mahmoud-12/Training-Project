document.addEventListener("keydown", function (event) {
    if (event.altKey && event.key === "r") {
        window.location.replace("/register");
    }
    if (event.altKey && event.key === "v") {
        window.location.replace("/view");
    }
    if (event.key === "enter") {
        document.getElementById("start-btn").click();
    }
});
