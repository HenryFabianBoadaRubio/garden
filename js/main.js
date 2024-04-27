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
    getAllClientsAndRepresentSalesPayments
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

console.log(await getAllClientsAndRepresentSalesPayments());

