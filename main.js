alert ("Bienvenido a Metalúrgica Claudio");
const usuario = prompt ("Por favor cree un usuario");
const contraseñaIngresada = prompt ("Ingrese una contraseña de 4 dígitos");
    while (contraseñaIngresada.length < 4 || contraseñaIngresada.length > 4) {
        alert ("Contraseña inválida");
        contraseñaIngresada = prompt ("Por favor ingrese una nueva contraseña de 4 dígitos");
    } 
console.log (contraseñaIngresada);

do {
    let option = showMenu ();
    if (option === "ESC") {
        alert ("Adiós");
        break; 
    } else {
        let quantity = parseInt (prompt ("Indique cantidad"));
        addToCart (option, quantity);
        resp = prompt ("¿Desea seguir comprando? S/N");
    }  
} while (resp === "S"); 

if (cart > 0) {
    alert (`Su compra tiene un total de $${cart}. Gracias por su compra!`);
}

alert ("Vuelva pronto!");