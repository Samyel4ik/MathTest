let buttom = document.getElementById("finish");
buttom.addEventListener("click", checkTest);

function checkTest() {

    let result = 0;

    var a1 = document.getElementById("q1").value;
    if (a1 === "4") {
        result++;
    }
    var a2 = document.getElementById("q2").value;
    if (a2 === "5") {
        result++;
    }
    var a3 = document.getElementById("q3").value;
    if (a3 === "6") {
        result++;
    }
    alert("Количество правильных ответов " + result);
}