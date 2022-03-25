/**
 * Cuenta la cantidad de elementos repetidos existentes en un array, y crea un nuevo array 
 * dejando los elementos sin repetirse, pero con una propiedad que refiere a la cantidad de veces
 * que esta repetido
 * 
 * @param array Recibe un array 
 * @returns Retorna un nuevo array, agregandole la propiedad "count" haciendo referencia a la cantidad de veces
 * que se encuentra repetido cada elemento del array
 */
export const countRepeated = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let counterI = 1;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].slug === array[j].slug) {

                array.splice(j, 1);
                counterI++;
            }
        }
        array[i].count = counterI;
    }
    return array;
}