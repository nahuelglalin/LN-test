/**
 * Funcion asincrona para hacer la HTTP request. 
 * 
 * @returns retorna un array de objetos (noticias), con una estructura especifica
 * para manejar la informacion que necesito consumir de forma mas optima
 */
export const getArticles = async () => {

        const url = 'https://api-test-ln.herokuapp.com/articles';
        const response = await fetch(url);
        const { articles } = await response.json();

        const filteredData = articles.filter((notice) => notice.subtype === "7");

        //Mapeo el array segun las propiedades que quiero consumir
        const data = filteredData.map(notice => {
                return {
                        id: notice._id,
                        title: notice.headlines.basic,
                        subtitle: notice.promo_items?.basic.subtitle,
                        img: notice.promo_items?.basic.url,
                        tags: notice.taxonomy.tags,
                        date: notice.display_date
                }
        })

        return data;
}