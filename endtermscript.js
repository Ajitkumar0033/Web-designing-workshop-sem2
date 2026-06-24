function checkNumber() {

    let num = document.getElementById("number").value;

    if(num % 2 == 0) {
        document.getElementById("result").innerText =
        num + " is Even";
    }
    else {
        document.getElementById("result").innerText =
        num + " is Odd";
    }

}