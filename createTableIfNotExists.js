const azureStorage = require('azure-storage');

let tableService = azureStorage.createTableService();

tableService.createTableIfNotExists('rktable', (error, result, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})