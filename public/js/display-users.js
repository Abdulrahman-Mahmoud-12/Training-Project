document.addEventListener("keydown", function (event) {
    if (event.altKey && event.key === "r") {
        window.location.replace("/register");
    }
    if (event.altKey && event.key === "h") {
        window.location.replace("/home");
    }
    if (event.altKey && event.key === "w") {
        window.location.replace("/welcome");
    }
});
