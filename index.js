console.log('New JavaScript file')

var but =document.getElementById('btn')

function onbutClick(){
    but.style.color ='red'
    but.style.backgroundColor ='black'
}
but.addEventListener('click', onbutClick()
)
console.log(but)