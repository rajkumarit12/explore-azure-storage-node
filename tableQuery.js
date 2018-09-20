const azureStorage = require('azure-storage');

let tableService = azureStorage.createTableService();

let query = new azureStorage.TableQuery().top(5).where('PartitionKey eq ?', 'part2')


tableService.queryEntities('rktable', query, null, (error, result, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})