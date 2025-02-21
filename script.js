// alert("you received a letter!");
function next(){
    document.querySelector('.letter1').style.display='none';
    document.querySelector('.letter2').style.display='block';
}
function next2(){
    document.querySelector('.letter2').style.display='none';
    document.querySelector('.letter3').style.display='block';
}
function next3(){
    let a=document.querySelector('.inp1');
    if(a.value=='1'){
        alert('right!! its only for you')
        document.querySelector('.letter3').style.display='none';
        document.querySelector('.letter4').style.display='block';
    }
    else if(a.value=='2'){
        alert('its only for cris!!!')
        a.value=''
    }
    else if(a.value=='3'){
        alert('nike pro or boss kfc??? no, its only for cris!!')
        a.value=''
    }
    else if(a.value=='4'){
        alert('sigma sigma boy sigma boy)))no, its only for cris!!!')
        a.value=''
    }
    else{
        alert('???')
        a.value=''
    }
}
function next4(){
    let a=document.querySelector('.inp2');
    if(a.value=='3'){
        alert('twix>>>')
        document.querySelector('.letter4').style.display='none';
        document.querySelector('.letter5').style.display='block';
    }
    else if(a.value=='2'){
        alert('no')
        a.value=''
    }
    else if(a.value=='4'){
        alert('no')
        a.value=''
    }
    else if(a.value=='1'){
        alert('no')
        a.value=''
    }
    else{
        alert('???')
        a.value=''
    }
}
function next5(){
    let a=document.querySelector('.inp3');
    if(a.value=='4'){
        alert('"deftones always"')
        document.querySelector('.letter5').style.display='none';
        document.querySelector('.letter6').style.display='block';
    }
    else if(a.value=='2'){
        alert('good choice but no')
        a.value=''
    }
    else if(a.value=='3'){
        alert('good choice but no')
        a.value=''
    }
    else if(a.value=='1'){
        alert('good choice but no')
        a.value=''
    }
    else{
        alert('???')
        a.value=''
    }
}
function next6(){
    let a=document.querySelector('.inp4');
    if(a.value=='1'){
        alert('i loveee!')
        document.querySelector('.letter6').style.display='none';
        document.querySelector('.letter7').style.display='block';
    }
    else if(a.value=='2'){
        alert('i loveee!')
        document.querySelector('.letter6').style.display='none';
        document.querySelector('.letter7').style.display='block';
    }
    else if(a.value=='3'){
        alert('i loveee!')
        document.querySelector('.letter6').style.display='none';
        document.querySelector('.letter7').style.display='block';
    }
    else if(a.value=='4'){
        alert('😾😾')
        a.value=''
    }
    else{
        alert('???')
        a.value=''
    }
}
function next7(){
    document.querySelector('.letter7').style.display='none';
    document.querySelector('.letter8').style.display='block';
}
function next8(){
    let wish=document.querySelector('.inp5').value
    window.localStorage.setItem("wish", wish)
    document.querySelector('.letter8').style.display='none';
    document.querySelector('.letter9').style.display='block';
    let b = window.localStorage.getItem("wish")
    document.querySelector(".t5").innerHTML=b
    document.querySelector('.t5').style.display="block"
}
function next9(){
    document.querySelector('.letter9').style.display='none';
    document.querySelector('.letter10').style.display='block';
}