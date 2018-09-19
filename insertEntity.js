const azureStorage = require('azure-storage');

let tableService = azureStorage.createTableService();

let entGen = azureStorage.TableUtilities.entityGenerator;

let entity = {
    PartitionKey: entGen.String('part2'),
    RowKey: entGen.String('row1'),
    boolValueTrue: entGen.Boolean(true),
    boolValueFalse: entGen.Boolean(false),
    intValue: entGen.Int32(42),
    dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
    complexDateValue: entGen.DateTime(new Date(Date.UTC(2013, 02, 16, 01, 46, 20)))
}

tableService.insertEntity('rktable', entity, (error, result, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})