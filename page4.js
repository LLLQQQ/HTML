var elem;
window.onload = jsStart();

function jsStart() {
    elem = document.getElementById("root1");
    var controlPad = document.getElementById("controlPad");
    controlPad.getElementsByTagName("button")[0].onclick = function () {
        goToUp();
        return true;
    }
    controlPad.getElementsByTagName("button")[1].onclick = function () {
        goToDown();
        return true;
    }
    controlPad.getElementsByTagName("button")[2].onclick = function () {
        goToLeft();
        return true;
    }
    controlPad.getElementsByTagName("button")[3].onclick = function () {
        goToRight();
        return true;
    }
    //    var x = document.getElementById("plotDiv").style.top;
    //alert(elem.getElementsByTagName("div")[0].style.cssText);
}
function createDiv() {
    var node = document.createElement("div");
    node.className = "play";
    node.id = "plotDiv";
    node.style = elem.getElementsByTagName("div")[0].style.cssText;
    return node;
}
function deleteDiv() {
    elem.removeChild(elem.getElementsByTagName("div")[0]);
}
function goToUp() {
    var node = createDiv();
    var str = node.style.top;
    //str.substring(0,str.length-2);
    node.style.top = (parseInt(str) - 2) + "px";
    deleteDiv();
    elem.appendChild(node);
}
function goToDown() {
    var node = createDiv();
    var str = node.style.top;
    //str.substring(0,str.length-2);
    node.style.top = (parseInt(str) + 2) + "px";
    deleteDiv();
    elem.appendChild(node);
}
function goToLeft() {
    var node = createDiv();
    var str = node.style.left;
    //str.substring(0,str.length-2);
    node.style.left = (parseInt(str) - 2) + "px";
    deleteDiv();
    elem.appendChild(node);
}
function goToRight() {
    var node = createDiv();
    var str = node.style.left;
    //str.substring(0,str.length-2);
    node.style.left = (parseInt(str) + 2) + "px";
    deleteDiv();
    elem.appendChild(node);
}