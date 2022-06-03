
const btnEncriptar = document.querySelector("#encriptar");
const input = document.querySelector(".input__text");
const textResult = document.querySelector(".container__result__text");

/*Desencriptar*/
const btnDesencriptar = document.querySelector("#desincriptar")

/*copy*/
const btnCopy = document.querySelector("#copy")

btnEncriptar.addEventListener("click",function(){
    const text = input.value; 
    const arrayText = Array.from(text,(val,index)=>{
        switch (index>=0) {
            case val=='a':
               return val="ai";
            case val=='e':
                return val="enter";
            case val=='i':
                return val="imes";
            case val=='o':
                return val="ober";
            case val=='u':
                return val="ufat";
            default:
            return val           
            }
    })
    const textEncrip = arrayText.join("");
    textResult.textContent= textEncrip;
})

btnDesencriptar.addEventListener("click",function(){
    const text = input.value; 
    const regex = /ober|ai|enter|imes|ufat/g;
    const textConvert = text.replace(regex,function(value){
            if(value=="ai")return value="a"
            else
            if(value=="ober") return value="o";
            else
            if(value=="enter")return value = "e";
            else
            if(value=="imes")return value = "i";
            else
            if(value=="ufat")return value = "u";
    })
   
    textResult.textContent= textConvert;
})


btnCopy.addEventListener("click",function(){
    textResult.select();
    document.execCommand('copy')
})