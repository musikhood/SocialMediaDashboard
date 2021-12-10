let dark = true;
document.querySelector('.switch-checkbox').addEventListener("click",()=>{
    if(dark){
        document.querySelector('html').style.setProperty('--bg1','hsl(0,0%,100%)');
        document.querySelector('html').style.setProperty('--bg2','hsl(225,100%,98%)');
        document.querySelector('html').style.setProperty('--bgtile','hsl(227,47%,96%)');
        document.querySelector('html').style.setProperty('--graytext','hsl(228, 12%, 44%)');
        document.querySelector('html').style.setProperty('--text','hsl(230,17%,14%)');
        document.querySelector('html').style.setProperty('--hover','hsl(227,47%,90%)');
        dark = false;
        
    }
    else{
        document.querySelector('html').style.setProperty('--bg1','hsl(230, 17%, 14%)');
        document.querySelector('html').style.setProperty('--bg2','hsl(232, 19%, 17%)');
        document.querySelector('html').style.setProperty('--bgtile','hsl(228,28%,20%)');
        document.querySelector('html').style.setProperty('--graytext','hsl(228,34%,66%)');
        document.querySelector('html').style.setProperty('--text','hsl(0,0%,100%)');
        document.querySelector('html').style.setProperty('--hover','hsl(228,28%,25%)');
        dark = true;
    }
    document.querySelector('.slider').classList.toggle('active');
})