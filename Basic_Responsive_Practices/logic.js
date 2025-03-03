function resizeScreen(){
    let scWidth = window.innerWidth;
    document.getElementById('span').innerText = scWidth;
    if(scWidth >= 320 && scWidth <= 480){
        document.getElementById('dis').innerText = "Mobile Size";
    }
    else if(scWidth >480  && scWidth <= 1024){
        document.getElementById('dis').innerText = "Tablet Size";
    }
    else if(scWidth > 1024){
        document.getElementById('dis').innerText = "Desktop Size";
    }
    else{
        document.getElementById('dis').innerText = "";
    }
}