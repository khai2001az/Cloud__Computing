const togglePassword = document.getElementById("togglePassword");
const inputPassword = document.getElementById("password");
const inputUsername = document.getElementById("username");
const iconLoading = document.getElementById("loading");

const onToggleTypePassword = () => {
    togglePassword.classList.toggle("fa-eye-slash");

    if (inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
};

togglePassword.addEventListener("click", onToggleTypePassword);
