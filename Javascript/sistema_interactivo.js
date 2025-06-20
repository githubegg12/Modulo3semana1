document.getElementById("formulario")
.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene que se recargue la página
    
const userName = document.getElementById("userName");
const userAge = document.getElementById("userAge");
const textMessage = document.getElementById("message");
try { //try catch para validar el ingreso adecuado de valores
    const name = userName.value.trim(); // Se evalua que el el nombre ingresado si llega a tener espacios al inicio o al final no se tengan en cuenta
    const age = parseInt(userAge.value); // Se evanlua la edad y se convierte en entero

    if (name == "" || age == null) throw new Error("Debe ingresar los datos requeridos"); // Se evalua que no esten vacios

    if (!/^[a-zA-Z\s]+$/.test(name)) throw new Error("El nombre solo puede contener letras de la A-Z"); // Se evalua que el nombre contenga letras del abecedario

    if (isNaN(age) || age > 150 || age < 1) throw new Error("La edad debe ser un valor numerico valido"); // Se evalua un correcto rango de edad y que sea numerico

    if (age < 18) {
        alert(`Hola ${name}, eres menor de edad.¡Sigue aprendiendo y disfrutando del código!`); // Arroja mensaje al cumplir con la condicion

    } else {
        message.textContent = `Hola ${name}, eres mayor de edad.¡Prepárate para grandes oportunidades en el mundo de la programación!`; // Arroja mensaje al cumplir con la condicion
        message.style.color = "blue"; //Otorga color azul al mensaje

    }

} catch (error) {
    message.textContent = "Error: " + error.message; // Arroja los valores asignados dependiendo del tipo de error
    message.style.color = "red"; //Otorga color rojo al mensaje
}
});