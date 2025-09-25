const buttonMenu = document.getElementById('buttonMenu').addEventListener('click', showMenu)
const menuSelection = document.getElementById('selectionMenu')
function showMenu(){
   if(menuSelection.style.display === "none"){
        menuSelection.style.display = "flex"
        menuSelection.style.zIndex = "1"   
   }else{
        menuSelection.style.display = "none"
   }
   console.log("show menu")
   
   
}

const windowContact = document.getElementById('windowContact').addEventListener('click', newWindow)
function newWindow(){
    window.open("/contact.html")
    console.log("new window is openned")
}
