let textarea, maxlength, sendtextshow, textlengthshow;
textarea=document.querySelector(".message-container__textarea");
maxlength=150;
sendtextshow=document.querySelector(".message-container__last-message")
textlengthshow=document.querySelector(".message-container__textlength-show");
function keyshow(){
if(textarea.value.length<=maxlength){
    textlengthshow.textContent= maxlength - textarea.value.length  + " :simvol qaldı";
}
else{
    textarea.value=textarea.value.substr(0,maxlength)
} 
textlenghtShow();
function textlenghtShow(){
    if(textarea.value.length==0) {
        document.querySelector(".message-container__textlength-show").textContent="max simvol sayı: 150";
    }
}
}

function sendmessage(){
    let messageNotification;
    messageNotification=document.querySelector(".message-container__notification");
    if(textarea.value== ""){
        let setTime;
         messageNotification.textContent= "Mesaj yazmamısınız!"; 
         messageNotification.classList.add("background-color");
         setTime= setTimeout(function(){
            messageNotification.textContent= "";
         },4000)
    }
}
