var txt;
var numbr;
function getText(txt){
    txt = txt.value;
    // alert(text);
}
function getNumbers(num){
    numbr = num.value;
    // alert(numbr)
}
var parent_Div = document.getElementById('cards');
var child_Div = parent_Div.children;
function generateCards(){
    if(numbr>0 && numbr<=30){
        // alert(numbr);
        var count=0;
        while(count<=10){
            count++;
           let new_Div = document.createElement('div');
           new_Div.innerText = "While loop run " + count + " time";
           parent_Div.appendChild(new_Div);
           new_Div.style.color = 'green';
           new_Div.style.fontSize = '30px';
           new_Div.style.backgroundColor = 'black';
           new_Div.style.textAlign = 'center';
        }
    }
}