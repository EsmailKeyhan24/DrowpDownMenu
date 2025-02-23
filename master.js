let flga=1
function mytoggle(){
    let nav=document.getElementById('nav-small')
    if(flga%2){
        nav.style.left='0'
    }else{
    nav.style.left='-100%'}
    flga++
    // document.getElementById('nav-small').classList.toggle('navsmall')
}

function toggleClose(){
    document.getElementById('nav-small').style.left='-100%'
}

