function getStarted() {
    window.location.href = "signup.html";
}
function signup(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Welcome to SkillSwapify, " + name + "!");

    window.location.href = "index.html";
}