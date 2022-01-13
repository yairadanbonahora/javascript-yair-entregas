// alert ("Bienvenido a Metalúrgica Claudio");
// const usuario = prompt ("Por favor cree un usuario");
// console.log ("Usuario: " + usuario)
// const contraseñaIngresada = prompt ("Ingrese una contraseña de 4 dígitos");
//     while (contraseñaIngresada.length < 4 || contraseñaIngresada.length > 4) {
//         alert ("Contraseña inválida");
//         contraseñaIngresada = prompt ("Por favor ingrese una nueva contraseña de 4 dígitos");
//     } 
// console.log ("Contraseña: " + contraseñaIngresada);

// do {
//     let option = showMenu ();
//     let quantity = parseInt (prompt ("Indique cantidad"));
//     resp = prompt ("¿Desea seguir comprando? S/N");
// } while (resp === "S"); 


// alert ("Vuelva pronto!");


// SEGUNDA ENTREGA =========
// let menu = document.getElementById ("menu");
// menu.onclick = () => {
//     let contenedorDiv = document.createElement ("div");
//     menu.appendChild (contenedorDiv);
//     let div = document.createElement ("div");
//     div.innerHTML = `<div class="elemento">Productos</div>
//                     <div class="elemento">Máquinas</div>`;
//     contenedorDiv.appendChild (div);
//     menu.onclick = "";  

//     //para desplegar productos 
//     let divProductos = document.getElementsByClassName ("elemento") [0];
//     divProductos.onclick = () => {
//         let contenedorProduc = document.createElement ("ul");
//         divProductos.appendChild (contenedorProduc);
//         for (const producto of productos) {
//             let div = document.createElement ("div");
//             div.innerHTML = `<div class="opciones"><input type="Radio" name="produc-selected" class="optionSelected"> ${producto.name}. Precio: $${producto.price} </div>`;
//             contenedorProduc.appendChild (div);

//             if (".optionSelected:checked") {
//               divProductos.onclick = "";  
//             }
//         }
//         //para crear botón siguiente
//         let btnSiguiente = document.createElement ("button");
//         btnSiguiente.innerHTML = "Siguiente";
//         divProductos.appendChild (btnSiguiente);

//         //para que el usuario indique cantidad
//         btnSiguiente.onclick = () => {
//             let formCantidad = document.createElement ("form");
//             formCantidad.innerHTML = `<input type="text" placeholder="Indique cantidad" class="inputCantidad">`
//             divProductos.appendChild (formCantidad);

//             let btnComprar = document.createElement ("button");
//             btnComprar.innerHTML = "Comprar";
//             divProductos.appendChild (btnComprar);

//         //para tomar el stock del producto seleccionado y verifiicar si es suficiente para la cantidad querida. No me funciona y es parte de lo que quiero solucionar en la videollamada luego 
//             btnComprar.onclick = () => {
//                 if (parseInt(formCantidad) > `.optionSelected:checked(opciones[${producto.stock}])`) {
//                     let noStock = document.createElement ("p");
//                     noStock.innerHTML = "No hay suficiente stock";
//                     divProductos.appendChild (noStock);
//                 }
//             }
            
//         }
//     }

//     //para desplegar máquinas
//     let divMaquinas = document.getElementsByClassName ("elemento") [1];
//     divMaquinas.onclick = () => {
//         let contenedorMaquinas = document.createElement ("ul");
//         divMaquinas.appendChild (contenedorMaquinas);
//         for (const maquina of maquinas) {
//             let div = document.createElement ("div");
//             div.innerHTML = `<div class="opciones"><input type="Radio" name="produc-selected" class="optionSelected"> ${maquina.name}. Precio: $${maquina.price} </div>`;
//             contenedorMaquinas.appendChild (div);

//             if (".optionSelected:checked") {
//                 divMaquinas.onclick = "";  
//               }
//         }
        
//         //para crear botón siguiente
//         let btnSiguiente = document.createElement ("button");
//         btnSiguiente.innerHTML = "Siguiente";
//         divMaquinas.appendChild (btnSiguiente);

//         //para que el usuario indique cantidad
//         btnSiguiente.onclick = () => {
//             let formCantidad = document.createElement ("form");
//             formCantidad.innerHTML = `<input type="text" placeholder="Indique cantidad" class="inputCantidad">`
//             divMaquinas.appendChild (formCantidad);

//             let btnComprar = document.createElement ("button");
//             btnComprar.innerHTML = "Comprar";
//             divMaquinas.appendChild (btnComprar);
//         } 
//     }
// }


//TERCERA ENTREGA =========
let menu = document.getElementById ("menu");
menu.onclick = () => {
    let contenedorDiv = document.createElement ("div");
    menu.appendChild (contenedorDiv);
    let div = document.createElement ("div");
    div.innerHTML = `<div class="elemento">Productos</div>
                    <div class="elemento">Máquinas</div>`;
    contenedorDiv.appendChild (div);
    menu.onclick = "";  

    let divProductos = document.getElementsByClassName ("elemento") [0];
    divProductos.onclick = () => {
        let contenedorProduc = document.createElement ("ul");
        divProductos.appendChild (contenedorProduc);
        for (const producto of productos) {
            let div = document.createElement ("div");
            div.innerHTML = `<div class="opciones"><input type="Radio" name="produc-selected" class="optionSelected"> ${producto.name}. Precio: $${producto.price} </div>`;
            contenedorProduc.appendChild (div);

            if (".optionSelected:checked") {
              divProductos.onclick = "";  
            }
        }

        let btnSiguiente = document.createElement ("button");
        btnSiguiente.innerHTML = "Siguiente";
        divProductos.appendChild (btnSiguiente);

        btnSiguiente.onclick = () => {
            let formCantidad = document.createElement ("form");
            formCantidad.innerHTML = `<input type="text" placeholder="Indique cantidad" class="inputCantidad">`
            divProductos.appendChild (formCantidad);

            let btnComprar = document.createElement ("button");
            btnComprar.innerHTML = "Comprar";
            divProductos.appendChild (btnComprar);
            
        }
    }

    let divMaquinas = document.getElementsByClassName ("elemento") [1];
    divMaquinas.onclick = () => {
        let contenedorMaquinas = document.createElement ("ul");
        divMaquinas.appendChild (contenedorMaquinas);
        for (const maquina of maquinas) {
            let div = document.createElement ("div");
            div.innerHTML = `<div class="opciones"><input type="Radio" name="maqSelected" class="optionSelected"> ${maquina.name}. Precio: $${maquina.price} </div>`;
            contenedorMaquinas.appendChild (div);

            if (".optionSelected:checked") {
                divMaquinas.onclick = "";  
              }
        }
        
        let btnSiguiente = document.createElement ("button");
        btnSiguiente.innerHTML = "Siguiente";
        divMaquinas.appendChild (btnSiguiente);

        btnSiguiente.onclick = () => {
            let formCantidad = document.createElement ("form");
            formCantidad.innerHTML = `<input type="text" name="cantidad" placeholder="Indique cantidad" class="inputCantidad">`
            divMaquinas.appendChild (formCantidad);
            console.log (document.querySelector(`input [name="maqSelected"]:checked`).value)

            let btnComprar = document.createElement ("button");
            btnComprar.innerHTML = "Comprar";
            divMaquinas.appendChild (btnComprar);

            btnComprar.onclick = () => {
                if (parseInt(formCantidad) > document.querySelector(`input [name="maqSelected"]:checked`).value){
                    let msj = document.createElement ("p");
                    msj.innerHTML = "No hay suficiente stock";
                    divMaquinas.appendChild (msj);
                }
            }
            
        } 
    }
}