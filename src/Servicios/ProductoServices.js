const baseUrl = "http://localhost:51012/api";

export async function getProductos() {
    try {

        const apiUrl = baseUrl + "/Productos";
        const response = await fetch(apiUrl);
        const responseJson = await response.json();
        return responseJson;
    } catch (e) {
        console.log(e);

    }

}

export async function getProductosPorCategorias(IdCategoria) {
    try {

        const apiUrl = baseUrl + "/Productos/PorCategoria?Id="+IdCategoria.toString();
        const response = await fetch(apiUrl);
        const responseJson = await response.json();
        return responseJson;
    } catch (e) {
        console.log(e);

    }
}