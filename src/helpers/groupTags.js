import { countRepeated } from "./countRepeated";

/**
 * Agrupa, totaliza y ordena de mayor a menor los tags encontrados en la data
 * 
 * @param data Noticias recibidas desde la API
 * @returns Array de tags los 10 tags mas repetidos, ordenados de mayor a menor.
 */
export const groupTags = (data) => {

    let tagsContainer = [];

    data.forEach(tagsArr => {
        let arrayTags = tagsArr.tags;

        arrayTags.forEach((element) => {
            tagsContainer.push(element);
        })
    })

    countRepeated(tagsContainer);

    let orderedArray = tagsContainer.sort((a, b) => a.count < b.count ? 1 : b.count < a.count ? -1 : 0);

    return orderedArray.slice(0 ,10);   
}
























//if(slug I == slug J)
//aumentar contador
//borrar slug j y disminuir uno el j sino te salteas uno.





 // let newArray = [];
    
    // data.forEach(tag => {
    //     newArray.push(tag.tags);
    // });

    // let arraySorteado =  newArray.sort().reverse();

    // console.log(arraySorteado)




        /*

         let valoresDeSlug = [];

        const ourDog = {
            "slug": contenedor[i].slug,
            "text": contenedor[i].text,
            "count": repeticiones,
        };

        ourDog.bark = "bow-wow"; asi se le asigna una nueva prop a un objeto ya creado
        a la vez en cada vez que encuentre una coincidencia, borrarlo en ese indice asi no se repite lo mismo. pero esto capaz ocasiona algun problema
        hay que probar

        haces lo mismo y le agregar el count
       

        for(let i = 0; i < contenedor.length - 1; i++) {
            let slugExtraido = contenedor[i].slug;
            valoresDeSlug.push(slugExtraido);
            for(let j = i+1; j < valoresDeSlug.length; j++) {
                if(contenedor[i].slug === contenedor[j])
                {
                    console.log(valoresDeSlug[i])                    
                }
                
                let value = valoresDeSlug[j];
                console.log("value", value);
                
            }

        }
         */