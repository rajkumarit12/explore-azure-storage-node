const azureStorage = require('azure-storage');

let blobService = azureStorage.createBlobService();

blobService.deleteBlobIfExists('taskcontainer', 'filetostream', (error, result, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})