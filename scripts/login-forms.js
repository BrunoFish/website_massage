const loginFormBtn = document.getElementById("login-button");
const loginForm = document.getElementById("login-form");
const signupFormBtn = document.getElementById("link-cadastro");
const signupForm = document.getElementById("signup-form");

loginFormBtn.addEventListener("click", () => {
    loginForm.classList.toggle("hide");
    signupForm.classList.add("hide");
})

signupFormBtn.addEventListener("click", () => {
    loginForm.classList.add("hide");
    signupForm.classList.toggle("hide");
})

document.addEventListener("click", e => {
    if (!loginForm.contains(e.target) && e.target !== loginFormBtn) {
        loginForm.classList.add("hide");
    }

    if (!signupForm.contains(e.target) && e.target !== signupFormBtn) {
        signupForm.classList.add("hide");
    }
})