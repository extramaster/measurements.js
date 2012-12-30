/* The code that generates the table! */
var generatedHTML = "";
var collength = 0;
for (var i in conversionObject.special) {
    generatedHTML += "<tr class='context'><th colspan='8'>" + i + "</th></tr><tr>";
    collength = 0;
    for (var j in conversionObject.special[i]) {
        if (collength % 8 == 0) {
            generatedHTML += "</tr><tr>";
        }
        collength++;
        generatedHTML += "<td>" + j + "</td>";
    }
    for (var j = 0; j < 8 - (collength % 8); j++) {
        if (8 - (collength % 8) < 8) {
            generatedHTML += "<td> </td>";
        }
    }
    generatedHTML += "</tr>";
}
for (var i in conversionObject.master) {
    generatedHTML += "<tr class='context'><th colspan='8'>" + i + "</th></tr><tr>";
    collength = 0;
    for (var j in conversionObject.master[i]) {
        if (collength % 8 == 0) {
            generatedHTML += "</tr><tr>";
        }
        collength++;
        generatedHTML += "<td>" + j + "</td>";
    }
    for (var j = 0; j < 8 - (collength % 8); j++) {
        if (8 - (collength % 8) < 8) {
            generatedHTML += "<td> </td>";
        }
    }
    generatedHTML += "</tr>";
}
document.getElementById("masterTableBody").innerHTML += generatedHTML;




/* The kinda complex code that powers the second demo */

for (var i in conversionObject.special) {
    document.getElementById("fullContext").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}
for (var i in conversionObject.master) {
    document.getElementById("fullContext").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}

function updateFullContext() {
    var contextt = document.getElementById("fullContext");
    if (typeof (conversionObject.special[contextt.value]) !== "undefined") {
        document.getElementById("fullFrom").innerHTML = "";
        document.getElementById("fullTo").innerHTML = "";
        for (var j in conversionObject.special[contextt.value]) {
            document.getElementById("fullFrom").innerHTML += "<option value='" + j + "'>" + j + "</option>";
            document.getElementById("fullTo").innerHTML += "<option value='" + j + "'>" + j + "</option>";
        }
    } else if (typeof (conversionObject.master[contextt.value]) !== "undefined") {
        document.getElementById("fullFrom").innerHTML = "";
        document.getElementById("fullTo").innerHTML = "";
        for (var j in conversionObject.master[contextt.value]) {
            document.getElementById("fullFrom").innerHTML += "<option value='" + j + "'>" + j + "</option>";
            document.getElementById("fullTo").innerHTML += "<option value='" + j + "'>" + j + "</option>";
        }
    } else {
        alert("Gaming the system eh?");
    }


}
document.getElementById("fullContext").addEventListener("change", updateFullContext);
updateFullContext();

function masterConvert() {
    alert(conversionObject.functions.converter(document.getElementById("fullContext").value, document.getElementById("fullFrom").value, document.getElementById("fullTo").value, document.getElementById('fullValue').value))
}



/* Misc. Code that relate to the demo/docs page */
var currentTabd=["about","download","docs","table","demo"];
function resetActive(){
for (var i=0;i<currentTabd.length;i++){
document.getElementById(currentTabd[i]+"-button").setAttribute("class","");
}
}

resetActive();
var activeLink=document.getElementById(location.hash.substr(1)+"-button");
if (activeLink===null){
/* Something was not found */
}else{
activeLink.setAttribute("class","active");
}

function activeCheck(){
for (var i=0;i<currentTabd.length;i++){
if (document.body.scrollTop<document.getElementById(currentTabd[i]).offsetTop){
resetActive();
if (i-1<0){i=1;}
document.getElementById(currentTabd[i-1]+"-button").setAttribute("class","active");
return false;
}
}
}
window.addEventListener("scroll",activeCheck);
document.body.addEventListener("scroll",activeCheck);