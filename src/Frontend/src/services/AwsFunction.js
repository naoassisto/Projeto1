import * as AWS from 'aws-sdk'


export const fetchData = (rfiTable) => {
    const docClient = new AWS.DynamoDB.DocumentClient()

    console.log("oi");
    var params = {
        TableName: 'rfiTable',
        secretAccessKey: 'AMnwKsrva/BwVSOnyKh+KoMQkfTZMU/Hyrp3j7iw',
        accessKeyId: 'AKIA2XG46BGXLSW5Z7LU'
    }

    try {
        docClient.scan(params, function (err, data) {
            if (!err) {
                console.log("oiii2");
                console.log(data);
            }

            console.log(err)
        })
    } catch (err) {
        console.error(err);
    }
}