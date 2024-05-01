// 15.Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getAllGamaOrnamentales=async()=>{
    let res=  await fetch("http://localhost:5506/products?gama=Ornamentales")
    let data= await res.json();
    let dataUpdate=[];
    data.forEach(val => {
        if(val.stock>100){

            dataUpdate.push({
                ...val
            });
        }

        
    });
    dataUpdate.sort((a,b)=>b.price_sale-a.price_sale);
    return dataUpdate
}


//Desarrollamos una funcion con la totalidad de productos para el ejercicio 8 de composicion externa
export const getAllProducts = async ()=>{
    let res=  await fetch("http://localhost:5506/products")
    let data= await res.json();
    let dataUpdate=[];
    data.forEach(val => {
        dataUpdate.push({
           codigo_producto: val.code_product,
           nombre_producto: val.name,
           precio_venta: val.price_sale,
           proveedor: val.provider,
           precio_compra: val.price_provider,
           stock: val.stock,
           gama: val.gama,
        });
    });
    return dataUpdate
}


// composicion externa
// // 8.Devuelve un listado de los productos que nunca han aparecido en un pedido.
// import {getAllRequests} from "./requests.js"
// export const getAllProductsNotRequest =async ()=>{
//     let dataProducts = await getAllProducts()
//     let dataRequests = await getAllRequests()
//     let dataUpdate = []
//     let seenProducts = new Set() // Utilizamos un conjunto para registrar los productos vistos
//     dataProducts.forEach(val=> {
//         seenProducts.add(val.id)
//     });
//     dataRequests.forEach(val=> {
//         val.products.forEach(val2=>{
//             seenProducts.delete(val2.id)
//         });
//     });
//     seenProducts.forEach(val=>{
//         dataUpdate.push(dataProducts.find(val2=>val2.id===val))
//     });
//     return dataUpdate
// }
import { getAllRequests } from "./requests.js";

export const getAllProductsNotRequest = async () => {
    try {
        const dataProducts = await getAllProducts();
        const dataRequests = await getAllRequests();

        const productsInRequests = new Set(dataRequests.flatMap(request => request.products.map(product => product.id)));
        const productsNotInRequests = dataProducts.filter(product => !productsInRequests.has(product.id));

        return productsNotInRequests;
    } catch (error) {
        console.error("Error en getAllProductsNotRequest:", error);
        return [];
    }
};

