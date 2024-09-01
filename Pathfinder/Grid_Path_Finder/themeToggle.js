var callTime = 0;
function changeTheme() {
    callTime++;
    callTime %= 2;

    var th1 = document.getElementById("theme1");
    var th2 = document.getElementById("theme-toggle");
    var th3 = document.getElementById("theme3");
    var th4 = document.getElementById("theme4");
    var th5 = document.getElementById("theme5");
    var th6 = document.getElementById("theme6");
    var th7 = document.getElementById("theme7");
    var th8 = document.getElementById("theme8");
    var th9 = document.getElementById("theme9");
    var icon = th2.querySelector('i');
    var ins = document.getElementById("Instructions");
    var buttons = document.getElementsByClassName("Button");

    var allTextElements = document.querySelectorAll('p, button, label, i');

    if (callTime % 2 == 1) {
        th1.style.background = "linear-gradient(to right, #0f2027, #2c5364)";
        th1.style.color = "white";
        ins.style.color = "white";
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = "white";

        th8.style.background = "radial-gradient(circle, #0f2027, #2c5364)";

        // Change all text elements to white
        allTextElements.forEach(function(element) {
            element.style.color = "white";
        });
    } else {
        th1.style.background = "linear-gradient(to right, #ffecd2, #fcb69f)";
        th1.style.color = "#000";
        ins.style.color = "black";

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = "black";
        th8.style.background = "radial-gradient(circle, #ffecd2, #fcb69f)";

        // Change all text elements to black
        allTextElements.forEach(function(element) {
            element.style.color = "black";
        });
    }
}
