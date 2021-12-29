alert ("Bienvenido a Metalúrgica Claudio");
const usuario = prompt ("Por favor cree un usuario");
console.log ("Usuario: " + usuario)
const contraseñaIngresada = prompt ("Ingrese una contraseña de 4 dígitos");
    while (contraseñaIngresada.length < 4 || contraseñaIngresada.length > 4) {
        alert ("Contraseña inválida");
        contraseñaIngresada = prompt ("Por favor ingrese una nueva contraseña de 4 dígitos");
    } 
console.log ("Contraseña: " + contraseñaIngresada);

do {
    let option = showMenu ();
    let quantity = parseInt (prompt ("Indique cantidad"));
        // addToCart (option, quantity);
        resp = prompt ("¿Desea seguir comprando? S/N");
} while (resp === "S"); 


alert ("Vuelva pronto!");