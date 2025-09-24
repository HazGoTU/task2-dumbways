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
