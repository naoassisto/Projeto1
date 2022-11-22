import * as AWS from 'aws-sdk'


export const fetchData = (rfidTable) => {
    const docClient = new AWS.DynamoDB.DocumentClient()

    var params = {
        TableName: 'rfidTable'
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