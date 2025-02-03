
export const actualAge = () => {
    const fechaNacimiento = new Date(1986, 7, 5); // Año, Mes (0 = Enero), Día (1)
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = nacimiento.getMonth();
    const diaNacimiento = nacimiento.getDate();

    // Ajustar la edad si aún no ha pasado el cumpleaños en el año actual
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    return edad;
}