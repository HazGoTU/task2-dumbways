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
let projectNameValue=document.getElementById('projectName')
let forms = document.getElementById('projectForms')
forms.addEventListener('submit',function(e){
     e.preventDefault()
     const currentProjectNameValue = projectNameValue.value
     
     console.log(currentProjectNameValue)
})
