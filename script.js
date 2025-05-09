const check = document.querySelector("#checkbox");
const h = document.querySelector("h1");
const main = document.querySelector(".container");
const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const c3 = document.querySelector("#c3");

const theme = document.querySelector("#theme")
const container = document.querySelector(".container")
const sous_titre = document.querySelector("#sous_titre")
const inscription_button = document.querySelector("#inscription_button")
const commencer_button = document.querySelector("#commencer_button")
const card = document.querySelectorAll(".card")
const savoir_plus = document.querySelectorAll(".savoir_plus")

monTheme()

function monTheme() {
  const local = localStorage.getItem("mode")
  const mode = local ? local : localStorage.setItem("mode", "sombre")
  theme.value = mode;
  console.log(mode)

  if(mode == "clair") {
    // MODE CLAIR
    // container.style.backgroundColor = "white";
    container.style.backgroundImage = "url(Behite1.jpg)"
    container.style.backgroundPosition = "center"
    container.style.backgroundSize = "cover"
    container.style.color = "black"
    sous_titre.style.color = "black"
    inscription_button.style.border = "1px solid black"
    inscription_button.style.color = "black"
    
    inscription_button.style.backgroundColor = "white"
    inscription_button.addEventListener("mouseover", ()=> {
      inscription_button.style.backgroundColor = "black";
      inscription_button.style.color = "white";
      inscription_button.style.borderColor = "goldenrod";

      
    })
    inscription_button.addEventListener("mouseout", ()=> {
      inscription_button.style.backgroundColor = "white";
      inscription_button.style.color = "black";
      inscription_button.style.borderColor = "black";


    })
    

    for(let i=0; i<4; i++) {
      card[i].style.border = "1px solid gray";
      savoir_plus[i].style.border = "1px solid goldenrod";
      savoir_plus[i].style.backgroundColor = "white";
      savoir_plus[i].style.color = "goldenrod";
      
    }
  
} else {
  // MODE SOMBRE
  container.style.backgroundColor = "black";
  container.style.backgroundImage = "none"
  container.style.color = "white"
  sous_titre.style.color = "white"
  inscription_button.style.border = "1px solid goldenrod"
  inscription_button.style.color = "white"
  inscription_button.style.backgroundColor = "transparent"

  inscription_button.addEventListener("mouseover", ()=> {
    inscription_button.style.backgroundColor = "white";
    inscription_button.style.color = "goldenrod";
  })
  inscription_button.addEventListener("mouseout", ()=> {
    inscription_button.style.backgroundColor = "transparent";
    inscription_button.style.color = "white";
    inscription_button.style.borderColor = "goldenrod";
  })
  
  for(let i=0; i<4; i++) {
    card[i].style.border = "1px solid gray";
    savoir_plus[i].style.border = "1px solid white";
    savoir_plus[i].style.color = "goldenrod";
  }

}
}

theme.addEventListener("change", ()=> {
  localStorage.setItem("mode", theme.value);
  console.log(localStorage.getItem("mode"))
  monTheme()
})

check.addEventListener("change", () => {
    
  if (check.checked) {
    main.classList.add("flou");
    c2.style.display = "none";
    

    c1.style.top = "50%";
    c1.style.backgroundColor = "red"
    c1.style.transform = "translateY(-50%) rotate(135deg)";

    c3.style.top = "50%";
    c3.style.backgroundColor = "red"
    c3.style.transform = "translateY(-50%) rotate(-135deg)";
    
  } else {
    c2.style.display = "block";

    c1.style.top = "20%";
    c1.style.backgroundColor = "black"
    c1.style.transform = "translateY(0) rotate(0deg)";

    c3.style.top = "80%";
    c3.style.backgroundColor = "black"
    c3.style.transform = "translateY(0) rotate(0deg)";

    main.classList.remove("flou");
  }
});


