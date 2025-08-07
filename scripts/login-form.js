const formSwitch = document.getElementById("login-button")

function showLoginForm() {
    const loginForm = window.getComputedStyle((document.getElementById("login-form"))).visibility;
    if (loginForm == "visible") {
        document.getElementById("login-form").style.visibility = "hidden";
    } else {
        document.getElementById("login-form").style.visibility = "visible";
    }
}

formSwitch.addEventListener("click", showLoginForm);