//Open and close modal 1
const modal = document.querySelector(".fullscreen-container");
const openModal = document.querySelector('#expandArrow1');
const closeModal = document.querySelector('#close-page');

openModal.addEventListener('click', ()=>{
    modal.setAttribute('style',"display:flex")  
    });

closeModal.addEventListener('click', ()=>{
        modal.setAttribute('style',"display: none")
    });

document.addEventListener("click", (e) => {
        if (e.target == modal) {
          modal.setAttribute("style", "display:none");
        }
      });

//Open and close modal 2
const modal2 = document.querySelector(".fullscreen-container2");
const openModal2 = document.querySelector('#ultResults');
const closeModal2 = document.querySelector('#close-page2');

openModal2.addEventListener('click', ()=>{
    modal2.setAttribute('style',"display:flex")  
    });

closeModal2.addEventListener('click', ()=>{
        modal2.setAttribute('style',"display: none")
    });

document.addEventListener("click", (e) => {
        if (e.target == modal2) {
          modal2.setAttribute("style", "display:none");
        }
      });

//Escore
let escore = 0;

//addEventListener to buttons
const iniciar = document.getElementById("iniciar");
iniciar.addEventListener("click", pag2);

const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
    escore4();
    pag3();
});
const button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
    escore3();
    pag3();
});
const button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
    escore2();
    pag3();
});
const button4 = document.getElementById("button4");
button4.addEventListener("click", () => {
    escore1();
    pag3();
});


const button5 = document.getElementById("button5");
button5.addEventListener("click", () => {
    escore5();
    pag4();
});
const button6 = document.getElementById("button6");
button6.addEventListener("click", () => {
    escore4();
    pag4();
});
const button7 = document.getElementById("button7");
button7.addEventListener("click", () => {
    escore3();
    pag4();
});
const button8 = document.getElementById("button8");
button8.addEventListener("click", () => {
    escore2();
    pag4();
});
const button9 = document.getElementById("button9");
button9.addEventListener("click", () => {
    escore1();
    pag4();
});


const button10 = document.getElementById("button10");
button10.addEventListener("click", () => {
    escore6();
    pag5();
});
const button11 = document.getElementById("button11");
button11.addEventListener("click", () => {
    escore5();
    pag5();
});
const button12 = document.getElementById("button12");
button12.addEventListener("click", () => {
    escore4();
    pag5();
});
const button13 = document.getElementById("button13");
button13.addEventListener("click", () => {
    escore3();
    pag5();
});
const button14 = document.getElementById("button14");
button14.addEventListener("click", () => {
    escore2();
    pag5();
});
const button15 = document.getElementById("button15");
button15.addEventListener("click", () => {
    escore1();
    pag5();
});


const button16 = document.getElementById("button16");
button16.addEventListener("click", () => {
    //escore + 0
    pag6();
    finalResults()
});
const button17 = document.getElementById("button17");
button17.addEventListener("click", () => {
    escoreMenos1();
    pag6();
    finalResults()
});
const button18 = document.getElementById("button18");
button18.addEventListener("click", () => {
    escoreMenos2();
    pag6();
    finalResults()
});


//functions to add Escore
function escore1() {
    return escore += 1;
}
function escore2() {
    return escore += 2;
}
function escore3() {
    return escore += 3;
}
function escore4() {
    return escore += 4;
}
function escore5() {
    return escore += 5;
}
function escore6() {
    return escore += 6;
}
function escoreMenos1() {
    return escore -= 1;
}
function escoreMenos2() {
    return escore -= 2;
}
function escoreReset() {
    return escore = 0;
}

//functions to pages
function pag2() {
    document.getElementById("pag1").style.display = "none";
    document.getElementById("pag2").style.display = "";
};
function pag3(){
    document.getElementById("pag2").style.display = "none";
    document.getElementById("pag3").style.display = "";
};
function pag4() {
    document.getElementById("pag3").style.display = "none";
    document.getElementById("pag4").style.display = "";
};
function pag5(){
    document.getElementById("pag4").style.display = "none";
    document.getElementById("pag5").style.display = "";
};
function pag6() {
    document.getElementById("pag5").style.display = "none";
    document.getElementById("pag6").style.display = "";
};

//voltar button
document.getElementById("voltar").addEventListener("click", () => {
    escoreReset();
    document.getElementById("pag6").style.display = "none";
    document.getElementById("pag1").style.display = "";

});

//insert inner text to results
function finalResults() {
    document.getElementById("escoreSpan").innerText = escore;
    document.getElementById("liResult").innerText = escore;

    //Local Storage, need to do those things in order: retrive local storage,
    //push to the array and setItem to localStorage; If you don't retrive first
    //you store only the last value
    retrieveLocalStorage() 
    saveMyEscoresListToLocalStorage();


    //conditions to user get escore
    if (escore <= 3) {
        document.getElementById("interp").innerText = "Coma profundo sem qualquer resposta com les??o cerebral grave.";
    }
    if (escore <= 8 && escore >= 4) {
        document.getElementById("interp").innerText = "Coma moderado. Poss??vel les??o cerebral grave. Considerado um caso cr??tico de altera????o do n??vel de consci??ncia. Recomendado protejer as vias a??reas com intuba????o orotraqueal.";
    }
    if (escore <= 12 && escore >= 9) {
        document.getElementById("interp").innerText = "Coma moderado. Les??o cerebral moderada. Recomendado acompanhar a evolu????o do paciente.";
    }
    if (escore >= 13) {
        document.getElementById("interp").innerText = "Les??o cerebral leve ou normalidade.";
    }

    //refresh ultimo escore consultado
    

}

//functions to localStorage
myEscoresList = [];

function saveMyEscoresListToLocalStorage() {
    myEscoresList.push(escore);
    window.localStorage.setItem("lastEscores", JSON.stringify(myEscoresList));
};

function retrieveLocalStorage() {
    myEscoresList = JSON.parse(localStorage.getItem("lastEscores")) || [];

}

window.onload = function() {
    retrieveLocalStorage()

    const myEscoresList2 = myEscoresList[myEscoresList.length - 1];
    document.getElementById("liResult").innerText = myEscoresList2;

  };
