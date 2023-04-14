let posInicial = 0;
let pos = 0
function telafilme5(){
window.open("../tela_filme5.html");
}
function telafilme6(){
    window.open("../tela_filme6.html");
    }
    function telafilme7(){
        window.open("../tela_filme7.html");
        }
        function telafilme8(){
          window.open("../tela_filme8.html");
          }

function translacionarFuncao() {
    
     pos = pos +400;

     document.getElementById("container").style.transform=`translateX(${pos}px)`;
     document.getElementById("container").style.transition=" all 2s" 
     
   
     }
     
     document.getElementById("seta").addEventListener('click', translacionarFuncao())
     document.getElementById("seta").removeEventListener('click', translacionarFuncao())

     function retornarFuncao() {
          pos = pos -400;
          document.getElementById("container").style.transform=`translateX(${pos}px)`;
          document.getElementById("container").style.transition=" all 2s" 
         
          
     }

     let posInicial2 = 0;
     let pos2 = 0
     
     function translacionarFuncao2() {
         
          pos = pos +400;
     
          document.getElementById("container2").style.transform=`translateX(${pos}px)`;
          document.getElementById("container2").style.transition=" all 2s" 
          
        
          }
          
          document.getElementById("seta2").addEventListener('click', translacionarFuncao())
          document.getElementById("seta2").removeEventListener('click', translacionarFuncao())
     
          function retornarFuncao2() {
               pos = pos -400;
               document.getElementById("container2").style.transform=`translateX(${pos}px)`;
               document.getElementById("container2").style.transition=" all 2s" 
              
               
          }