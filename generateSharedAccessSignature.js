const azureStorage = require('azure-storage');

let blobservice = azureStorage.createBlobService();

let startDate = new Date();
let expiryDate = new Date(startDate);

expiryDate.setMinutes(startDate.getMinutes() + 100);
startDate.setMinutes(startDate.getMinutes() - 100);

let sharedAccessPolicy = {
    AccessPolicy: {
        Permission: azureStorage.BlobUtilities.SharedAccessPermissions.READ,
        Start: startDate,
        Expiry: expiryDate
    }
}

let containerName = 'taskcontainer';
let blobName = 'taskblob';

let token = blobservice.generateSharedAccessSignature(containerName, blobName, sharedAccessPolicy);
let sasUrl = blobservice.getUrl(containerName,blobName,token);

console.log(sasUrl);