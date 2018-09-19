const fs = require('fs');
const azureStorage = require('azure-storage');


let blobService = azureStorage.createBlobService();

blobService.getBlobToStream('taskcontainer', 'taskblob', fs.createWriteStream('output.txt'), (error, result, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})