var description='';
var numbr;
function getText(desc){
    description = desc.value;
    // alert(description);
}
function getNumbers(num){
    numbr = num.value;
    // alert(numbr)
}

var count;
var parent_Div = document.getElementById('container');
function generateCards(){
    if(numbr>0 && numbr<=30){
        // alert(numbr);
        count=0;
    //    alert(description)
        // var child_Div = parent_Div.children;
        while(count<=numbr){
            var parent_Div = document.getElementById('container');
            let new_Div = document.createElement('div');
            new_Div.innerText = description;
           
            new_Div.style.color = 'white';
            new_Div.style.fontSize = '30px';
            new_Div.style.backgroundColor = 'rgb(115, 233, 203)';
            new_Div.style.textAlign = 'center';
            // new_Div.style.minWidth = '29%';
            new_Div.style.height = '400px';
            new_Div.style.display = 'grid';
            new_Div.style.gridTemplateColumns = 'auto';
            new_Div.style.margin = '20px';
            new_Div.style.borderRadius = '10px';
            new_Div.style.boxShadow = '5px 5px 5px gray';
            new_Div.style.padding = '8px';
            parent_Div.appendChild(new_Div);
           count++;
        }
    }else{
        var warning = "<h1 style = 'color: red'> Number must less than or equal to 30! </h1>";
        document.getElementById('container').innerHTML = warning;
    }
}