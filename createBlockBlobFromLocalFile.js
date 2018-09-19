const azureStorage = require('azure-storage');

let blobService = azureStorage.createBlobService();

blobService.createAppendBlobFromLocalFile('taskcontainer','taskblob','task1-upload.txt',(error, result, response)=>{
    if(error){
        console.log(error)
    }else{
        console.log(result)
    }
})