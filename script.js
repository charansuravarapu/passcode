var inputholder;
var generateButton;
var resultDisplay;
var passlen;
var recent_area;


inputholder = document.getElementById("input-getter");
generateButton = document.getElementById("mybutton");
resultDisplay = document.getElementById("result-disp");
passlen = document.getElementById("pas-len");
recent_area = document.getElementById("rec-area");



generateButton.addEventListener("click", function () {
    var str = inputholder.value;
    var len_requested = parseInt(passlen.value);
    console.log(len_requested);
    
    if(!len_requested){
        alert("Please enter valid length Ex: 12");
        return;
    }
    if (len_requested > 15) {
        alert("Make Sure your password is less than 15 characters ! It will be better ..");
        return;
    }
    
    var passd = makeid(len_requested);

    resultDisplay.innerHTML = "Generated Password : " + "<b style='color:yellowgreen'>" + passd + "</b>";
    inputholder.value = "";
    passlen.value = "";


    recent_area.innerHTML = recent_area.innerHTML +
        `<div id="pass-save-box">
            <h3 id="sb-t1">${str}</h3>
            <h4 id="sb-t2">${passd}</h4>
        </div>`;

});


function makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}
