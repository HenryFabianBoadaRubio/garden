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
    getAllEmployeesWithBossAndBoss
    
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
    getAllClientsAndRepresentSalesOffices
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
console.log(await getAllClientsAndRepresentSalesOffices()); // 7 Ejercicio multitabla
// console.log(await getAllEmployeesWithBoss()); //8 Ejercicio multitabla
// console.log(await getAllEmployeesWithBossAndBoss()); //9 Ejercicio multitabla

