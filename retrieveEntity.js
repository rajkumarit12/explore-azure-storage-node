const azureStorage = require('azure-storage');

let tableService = azureStorage.createTableService();

tableService.retrieveEntity('rktable', 'part2', 'row1', (error, result, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})