

    for (let cons = 1; cons <=17; cons++) {
      
        let nuevoColor=document.getElementById(cons);
        nuevoColor.addEventListener("click", ()=> {
            nuevoColor.classList.remove("color"+cons);
            //nuevoColor.innerHTML = 'gg';
            console.log("hola");
        })
        
        
    }
    
    for (let i = 18; i <=37; i++) {
      
        let borrar=document.getElementById(i);
        borrar.addEventListener("click", ()=> {
            
            console.log("hola");
            borrar.innerHTML = '';
        })
        
        
    }
        
          
      
        
    
    

