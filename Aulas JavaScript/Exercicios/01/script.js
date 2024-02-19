
function carregar(){
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML= `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12){
        //BOMDIA
        img.src = 'media/dia.png'
        document.body.style.background = 'lightyellow'
    }else if (hora >=12 && hora < 18){
        //BOATARDE
        img.src = 'media/tarde.png'
        document.body.style.background = 'lightsalmon'
    }else{
        //BOANOITE
        img.src = 'media/noite.png'
        document.body.style.background = 'grey'
    }
        
}
