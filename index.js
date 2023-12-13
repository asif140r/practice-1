startBtn = document.querySelector("#startBtn");
endtBtn = document.querySelector("#endBtn");
prevtNext = document.querySelectorAll(".prevNext");
links = document.querySelectorAll(".link");


let currentStep = 0;

const updateBtn = () =>{
    if(currentStep === 4){
        endtBtn.disabled =false;
        prevtNext[1].disabled = true;
    }else if(currentStep === 0){
        startBtn.disabled =true;
        prevtNext[0].disabled = true;  
    }else{
        endtBtn.disabled =false;
        prevtNext[1].disabled = false;
        startBtn.disabled =false;
        prevtNext[0].disabled = false;
    }
}

links.forEach((link,linkIndex)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault()
       currentStep = linkIndex;
       document.querySelector(".active").classList.remove("active");
       links.classList.add("active");
       updateBtn();
    })
});

prevtNext.forEach((button)=>{
    button.addEventListener("click", (e)=>{
     currentStep += e.target.id === "next"? 1 : -1;
     startBtn.disabled = false;
     links.forEach((number,numberIndex)=>{
        number.classList.toggle("active", numberIndex === currentStep);
        updateBtn();
     })
    })
});
