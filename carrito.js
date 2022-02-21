
const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
addToShoppingCartButtons.forEach((addToCartButton) =>{
            addToCartButton.addEventListener("click", addToCartClicked)
});



function addToCartClicked(event){
            const button = event.target;
            const item = button.closest(".item")
            const itemImagen = item.querySelector(".item_imagen").src;
            const itemNombre = item.querySelector('.item_nombre').textContent;
            const itemArea = item.querySelector('.item_area').textContent;
            const itemLenguaje = item.querySelector('.item_lenguaje').textContent;
            const itemAños = item.querySelector('.item_años').textContent;
            const itemHoras = item.querySelector('.item_horas').textContent;
            const calcHoras = Number(item.querySelector('.item_horas').textContent.replace('Horas disponibles por semana:',''));
            const itemIngresos = item.querySelector('.item_ingreso').textContent;
            const calcIngresos = Number(item.querySelector('.item_ingreso').textContent.replace('$/Hr: $',''));
            
           
            addItemToShoppingCart(itemImagen, itemNombre, itemArea, itemLenguaje,itemAños, itemHoras,itemIngresos, calcHoras, calcIngresos);
            

}

function addItemToShoppingCart(itemImagen, itemNombre, itemArea, itemLenguaje,itemAños, itemHoras,itemIngresos, calcHoras, calcIngresos) {
    let = 0;
    total = calcHoras*calcIngresos;
    $(".chango").append( `<div class="divCompra"> <img src="${itemImagen}" >
                            <h2>Solicitud de Servicio</h2><br>
                            <h3>${itemNombre}</h3> 
                            <p>${itemArea}</p>
                            <p>${itemLenguaje}</p>
                            <p>${itemAños}</p>
                            <p> ${itemHoras}</p>
                            <p>${itemIngresos}</p>
                            <p>Total: ${total}</p>
                            <input type="date">
                            <button>Lo quiero en mi Equipo!</button></div>`);
                            
    
                                        
                            
                            
}     
                        
                       








/*const resumen = JSON.parse(localStorage.getItem("CARRO"));;


for(const i of resumen){

        $("#carrito").append(`<div class="resumen"><h2>Solicitud de Servicio</h2><h3>Nombre: ${i.nombre} ${i.apellido}</h3> 
                                <p> Area: ${i.area}</p>
                                <p> Lenguajes: ${i.lenguaje}</p>
                                <p> Experiencia: ${i.años} años</p>
                                <p> Horas Disponibles por Semana: ${i.horas}</p>
                                <p> $/Hr: $${i.ingreso}</p>
                                <div> `);
                                
                                
                                
                                let total = 0;
                                resumen.forEach((calc) => {
                                    total= (calc.ingreso* calc.horas)
                                    $(".resumen").append(`<div><p> Total: ${total}</div>`)
                                    
                                     
                                });
                                
                                
                                $(".resumen").append('<button id="btnCom">Quiero que sea parte de mi equipo!</button>');
                                $("#btnCom").click(function(e){
                                    localStorage.clear(); 

                                })
                                
}*/
                      
     
                            


    
  