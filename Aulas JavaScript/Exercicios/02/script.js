function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
    const fsex = document.getElementsByName('sex')
    const img = window.document.getElementById('imagem')
    const idade = ano - Number(fano.value)
    let genero = ''
    let pronome =''

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    }
    if (fsex[0].checked){
        genero = 'homem'
        pronome = 'um'
        
    } else if (fsex[1].checked){
        genero = 'mulher'
        pronome = 'uma'
    }
    
    switch (true){
        case idade > 0 && idade < 5:
            var maturidade ='bebê'
            genero = 'menina'
            img.src = 'media/bb.png'
            break;
        //Crianças generos
        case idade >=5 && idade <= 12 && genero =='homem':
            var maturidade = 'criança';
            genero ='menino'
            img.src ='media/Menino criança.png'
            break;
        case idade >=5 && idade <= 12 && genero =='mulher':
            var maturidade = 'criança';
            genero ='menina'
            img.src ='media/menina.png'
            break;
        //Adolescente Generos
        case idade >12 && idade <18 && genero =='homem':
            var maturidade ='adolescente'
            img.src='media/adolescentehomem.png'
            break;
        case idade >12 && idade <18 && genero =='mulher':
            var maturidade ='adolescente'
            img.src='media/adolescentemulher.png'
            break;

        case idade >=18 && idade <61 && genero == 'homem':
            var maturidade = 'adulto'
            img.src='media/adultohomem.png'
            break
        case idade >=18 && idade <60 && genero == 'mulher':
            var maturidade = 'adulta'
            img.src='media/adultamulher.png'
            break

        case idade >=60 && idade<100 && genero =='homem':
            var maturidade ='idoso'
            img.src='media/velhohomem.png'
            break
        case idade >=60 && idade <100 && genero =='mulher':
            var maturidade ='idosa'
            img.src='media/velhamulher.png'
            break
        case idade >100 && genero=='homem':
            var maturidade ='morto'
            img.src='media/morto.png'
            break
        case idade >100 && genero=='mulher':
            var maturidade ='morta'
            img.src='media/morto.png'
            break

    
    }    
    
    
    
    
    res.innerHTML = `Detectamos ${pronome} ${genero} ${maturidade} com ${idade} anos.`
    
}






// function verificar(){
//     const data = new Date()
//     const ano = data.getFullYear()
//     const fano = document.getElementById('txtano')
//     const res = document.getElementById('res')
    

//     if (fano.value.length == 0 || fano.value > ano) {
//         window.alert("Verifique os dados e tente novamente!")
//     } else{
//         const fsex = document.getElementsByName('sex')
//         const idade = ano - Number(fano.value)
//         let genero = ''
//         if (fsex[0].checked){
//             genero = 'Homem'
//         } else if (fsex[1].checked){
//             genero = 'Mulher'
//         }
//     res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
//     }
// }
