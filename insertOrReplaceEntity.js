const azureStorage = require('azure-storage');

let tableService = azureStorage.createTableService();
let entGen = azureStorage.TableUtilities.entityGenerator;

let entity = {
    PartitionKey: entGen.String('part2'),
    RowKey: entGen.String('row1'),
    taskDone: entGen.Boolean(true),
};


tableService.insertOrReplaceEntity('rktable', entity, (error, result, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})