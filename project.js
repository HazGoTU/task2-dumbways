
//membuat array library target className untuk dideklarasikan sebagai item icon di html
const icons= {
    node: {lib:"fontawesome",class:" fa-node"},
    typescript:{lib:"bootstrap",class:"typescript"},
    react:{lib:"fontawesome",class:" fa-react"}
}
const iconContainer= document.getElementById('technologiesContainer')
for (let key in icons){
    const i = document.createElement("i");
    if(icons[key].lib === "fontawesome"){
        i.className = "fa-brands" + icons[key].class
    } else if (icons[key].lib === "bootstrap"){
        i.className = "bi bi-" + icons[key].class
    }
    //icons styling
    iconContainer.style.alignItems= "center"
    iconContainer.style.display= "flex"
    iconContainer.style.gap= "10px"
    iconContainer.style.fontSize = "20px"
    //insert variable i ke iconContainer
    iconContainer.appendChild(i)
}

const cardData ={image:"/asssets/greenactionapp.png", 
                       projectName:"Green Action App",
                       launchingDate:"2025",
                       duration:"1 Month",
                       description:"Green Action muncul sebagai respons terhadap meningkatnya permasalahan lingkungan seperti pencemaran, deforestasi, dan perubahan iklim yang semakin nyata dampaknya di kehidupan sehari-hari.",
                       technologies: iconContainer }

const title =document.getElementById('title')
const launching = document.getElementById('launching')
const duration = document.getElementById('durasi')
const description =document.getElementById('cardDescription')
const image = document.getElementById('cardImage')


title.innerHTML= `${cardData.projectName}`
launching.innerHTML= "-"+`${cardData.launchingDate}`
title.style.display= "flex"
title.style.flexDirection= "row"
duration.innerHTML=  `duration:${cardData.duration}`
description.innerHTML=`${cardData.description}`
image.src=`${cardData.image}`

let cardContainer = document.getElementById('cardContainer')


console.log(cardContainer)
function duplicateCard(count = 3) {
    const cardContainer = document.getElementById('cardContainer');
    const container2 = document.getElementById('container2');
    container2.innerHTML = ""; // Kosongkan dulu

    for (let i = 0; i < count; i++) {
        container2.innerHTML += cardContainer.outerHTML;
    }
}
window.onload = function() {
    duplicateCard(3); // Ganti angka sesuai jumlah duplikasi yang diinginkan
}