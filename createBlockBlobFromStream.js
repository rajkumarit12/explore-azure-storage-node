const azureStorage = require('azure-storage');
const fs = require('fs');

let blobService = azureStorage.createBlobService();

let filePath = __dirname + '/filetostream.txt';

fs.stat(filePath, (err, stat) => {

    let size = stat.size;
    let readstream = fs.createReadStream(filePath);

    if (!err) {
        blobService.createBlockBlobFromStream('taskcontainer', 'filetostream.txt', readstream, size, (error, result, response) => {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
            }
        })
    }

})



