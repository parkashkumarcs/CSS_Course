function resizeScreen(){
    let scWidth = window.innerWidth;
    document.getElementById('span').innerText = scWidth;
    if(scWidth >= 320 && scWidth <= 480){
        document.getElementById('dis').innerText = "Mobile Size";
        document.getElementById('dis').style.color = 'green';
    }
    else if(scWidth >480  && scWidth <= 1024){
        document.getElementById('dis').innerText = "Tablet Size";
        document.getElementById('dis').style.color = 'blue';
    }
    else if(scWidth > 1024){
        document.getElementById('dis').innerText = "Desktop Size";
        document.getElementById('dis').style.color = 'red';
    }
    else{
        document.getElementById('dis').innerText = "";
    }
}