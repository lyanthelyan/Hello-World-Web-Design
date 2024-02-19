function contar(){
    var inicio = document.getElementById('idinicio')
    var fim = document.getElementById('idfim')
    var passo = document.getElementById('idpasso')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Erro faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i<f){
            for(let c = i; c <=f; c+=p)    //O contador vai começar no inicio e enquanto o contaodr for menor ou igual oa fim, o contador mais receber ele mesmo + o passo
            res.innerHTML += `${c} ` 
        } else if (i > f){
            for( let c = i; c>=f; c-=p)
            res.innerHTML += `${c} ` 

        }
        
        


    }



  
   }














