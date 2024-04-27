import { 
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil 
} from "./module/offices.js";

import { 
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAll,
    getAllNameRepresentSales
    
} from "./module/employees.js";

import {
    getClientsFromSpain,
    getAllClientsMadrid1130,
    getAllClientsAndRepresentSales,
    getAllClientsAndRepresentSalesPayments,
    getAllClientsNoPay
} from "./module/clients.js"


import {
    orderStatusList,
    getAllCodeRequestLate,
    getAllEarlyCodeRequest,
    getAllRejected2009,
    getAllDeliveredJanuary


} from "./module/requests.js"

import {
    customerPaymentCode2008,
    getAllPaymentsPaypal2008,
    getAllPaymentsMethods,
    getAllPayments
} from "./module/payments.js"

import {
    getAllGamaOrnamentales,
    
} from "./module/products.js"

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
console.log(await getAllEarlyCodeRequest()); //Ejercicio 10
// console.log(await getAllOfficesFromSpainCityAndMovil());
// console.log(await getAllOfficesFromSpainCityAndMovil());


