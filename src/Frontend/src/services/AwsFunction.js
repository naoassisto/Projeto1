import * as AWS from 'aws-sdk'


export const fetchData = (rfidTable) => {
    const docClient = new AWS.DynamoDB.DocumentClient()

    var params = {
        TableName: 'rfidTable',
        secretAccessKey: 'AMnwKsrva/BwVSOnyKh+KoMQkfTZMU/Hyrp3j7iw',
        accessKeyId: 'AKIA2XG46BGXLSW5Z7LU'
    }

    try {
        docClient.scan(params, function (err, data) {
            if (!err) {
                console.log(data);
            }

            console.log(err)
        })
    } catch (err) {
        console.error(err);
    }
}