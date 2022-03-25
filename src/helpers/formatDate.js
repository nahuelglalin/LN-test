/**
 * Recibe una fecha y le aplica un formato mas legible para el usuario
 * 
 * @param date String de una fecha determinada
 * @returns La fecha con el formato "dia de mes de Año" => ejemplo: (1 de enero de 2020)
 */
export const formatDate = (date) => {
    let dateToFormat = new Date(date);
    const options = {year: 'numeric', month: 'long', day: 'numeric' };    
    return dateToFormat.toLocaleDateString("ES-AR", options);
}