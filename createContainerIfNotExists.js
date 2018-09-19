const azureStorage = require('azure-storage');

let blobservice = azureStorage.createBlobService();

blobservice.createContainerIfNotExists('taskcontainer', {
    publicAccessLevel: 'blob'
}, (error, result, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})