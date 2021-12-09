let dark = true;
document.querySelector('.switch-checkbox').addEventListener("click",()=>{
    if(dark){
        document.querySelector('html').style.setProperty('--bgDarkBlue','hsl(0,0%,100%)');
        document.querySelector('html').style.setProperty('--veryDarkBlue','hsl(225,100%,98%)');
        document.querySelector('html').style.setProperty('--darkDesaturatedBlue','hsl(227,47%,96%)');
        document.querySelector('html').style.setProperty('--desaturatedBlue','hsl(228, 12%, 44%)');
        document.querySelector('html').style.setProperty('--textWhite','hsl(230,17%,14%)');
        dark = false;
        
    }
    else{
        document.querySelector('html').style.setProperty('--bgDarkBlue','hsl(230, 17%, 14%)');
        document.querySelector('html').style.setProperty('--veryDarkBlue','hsl(232, 19%, 17%)');
        document.querySelector('html').style.setProperty('--darkDesaturatedBlue','hsl(228,28%,20%)');
        document.querySelector('html').style.setProperty('--desaturatedBlue','hsl(228,34%,66%)');
        document.querySelector('html').style.setProperty('--textWhite','hsl(0,0%,100%)');
        dark = true;
    }
})