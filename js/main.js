import { 
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil,
    getOfficesWithClientsFromFuenlabrada
} from "./module/offices.js";

import { 
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAll,
    getAllNameRepresentSales,
    getAllEmployeesWithBoss,
    getAllEmployeesWithBossAndBoss,
    getAllEmployeesWithoutOffice,
    getAllEmployees,
    getAllEmployeesWithBossAndNotClients,
    
} from "./module/employees.js";

import {
    getClientsFromSpain,
    getAllClientsMadrid1130,
    getAllClientsAndRepresentSales,
    getAllClientsAndRepresentSalesPayments,
    // getAllClientsNoPay,
    getAllClientsAndRepresentSalesNotPayments,
    getAllClientsAndRepresentSalesandofficeAndPay,
    getAllClientsAndRepresentSalesandofficeNotPay,
    getAllClientsAndRepresentSalesOffices,
    getAllClients, //total clientes para el ejercicio 10
    getAllClientsWithLateRequests,
    getAllClientsNotPay,
    getAllClientsNotRequest,
    getAllClientsNotRequestsAndPay,
    getAllEmployeesWithoutClientAndOffice,
    getAllEmployeesNotOfficesAndNotClients,
    getAllClientsAndRequestsNotPay

} from "./module/clients.js"


import {
    orderStatusList,
    getAllCodeRequestLate,
    getAllEarlyCodeRequest,
    getAllRejected2009,
    getAllDeliveredJanuary,
    getAllRequests


} from "./module/requests.js"

import {
    customerPaymentCode2008,
    getAllPaymentsPaypal2008,
    getAllPaymentsMethods,
    getAllPayments
} from "./module/payments.js"

import {
    getAllGamaOrnamentales,
    getAllProducts,
    // getAllProductsNotRequest,
    
    
} from "./module/products.js"
import {
    getAllGamasByClient
    
    
} from "./module/gama.js"

// console.log(await getAllNameRepresentSales());



//TABLAS PRIMEROS 16 EJERCICIOS 
// console.log(await getAllOfficesCodeAndCity());  //Ejercicio 1
// console.log(await getAllOfficesFromSpainCityAndMovil()); // Ejercicio 2
// console.log(await getAllEmployeesWithBossAndCodeSeven()); //EJercicio 3
// console.log(await getBossFullNameAndEmail());//Ejercicio 4
// console.log(await getAll());//Ejercicio 5
// console.log(await getClientsFromSpain());//Ejercicio 6
// console.log(await orderStatusList()); // Ejercicio 7
// console.log(await customerPaymentCode2008()); //Ejercicio 8
// console.log(await getAllCodeRequestLate());// Ejercico 9
// console.log(await getAllEarlyCodeRequest()); //Ejercicio 10
// console.log(await getAllRejected2009()); //Ejercicio 11
// console.log(await getAllDeliveredJanuary()); //Ejercicio 12
// console.log(await getAllPaymentsPaypal2008()); //Ejercicio 13
// console.log(await getAllPaymentsMethods()); //Ejercicio 14
// console.log(await getAllGamaOrnamentales()); //Ejercicio 15
// console.log(await getAllClientsMadrid1130()); //Ejercicio 16

//MULTITABLAS!
// console.log(await getAllClientsAndRepresentSales());// 1 ejercicio multitabla
// console.log(await getAllClientsAndRepresentSalesPayments()); //2 Ejercicio multitabla
// console.log(await getAllClientsAndRepresentSalesNotPayments()); //3 Ejercicio multitabla
// console.log(await getAllClientsAndRepresentSalesandofficeAndPay()); // 4 Ejercicio multitabla    
// console.log(await getOfficesWithClientsFromFuenlabrada()); //5 Ejercicio multitabla
// console.log(await getOfficesWithClientsFromFuenlabrada()); //6 Ejercicio multitabla
// console.log(await getAllClientsAndRepresentSalesOffices()); // 7 Ejercicio multitabla
// console.log(await getAllEmployeesWithBoss()); //8 Ejercicio multitabla
// console.log(await getAllEmployeesWithBossAndBoss()); //9 Ejercicio multitabla
// console.log(await getAllClientsWithLateRequests()); //10 Ejercicio multitabla
// console.log(await getAllGamasByClient()); //11 Ejercicio multitabla



// Consultas multitabla (Composición externa)
// console.log(await getAllClientsNotPay()); //1 Ejercicio Composición externa
// console.log(await getAllClientsNotRequest()); //2 Ejercicio Composición externa
// console.log(await getAllClientsNotRequestsAndPay()); //3 Ejercicio Composición externa
// console.log(await getAllEmployeesWithoutOffice()); //4 Ejercicio Composición externa
// console.log(await getAllEmployeesWithoutClient()); //5 Ejercicio Composición externa
// console.log(await getAllEmployeesWithoutClientAndOffice()); //6 Ejercicio Composición externa
// console.log(await getAllEmployeesNotOfficesAndNotClients()); //7 Ejercicio Composición externa
// console.log(await getAllProductsNotRequest()); //8 Ejercicio Composición externa
// console.log(await getAllProductsNotRequest()); //9 Ejercicio Composición externa
// console.log(await getAllClientsWithLateRequests()); //10 Ejercicio Composición externa
// console.log(await getAllClientsAndRequestsNotPay()); //11 Ejercicio Composición externa
// console.log(await getAllEmployeesWithBossAndNotClients()); //12 Ejercicio Composición externa


// console.log(await getAllGamasByClient());

