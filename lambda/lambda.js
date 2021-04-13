const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async(event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };

    try {
        switch (event.routeKey) {
            case "DELETE /items/{id}":
                await dynamo
                    .delete({
                        TableName: "Employees",
                        Key: {
                            EmployeeId: event.pathParameters.id
                        }
                    })
                    .promise();
                body = `Se ha eliminado el empleado`;
                break;
            case "GET /items/{id}":
                body = await dynamo
                    .get({
                        TableName: "Employees",
                        Key: {
                            EmployeeId: event.pathParameters.id
                        }
                    })
                    .promise();
                break;
            case "GET /items":
                body = await dynamo.scan({ TableName: "Employees" }).promise();
                break;
            case "PUT /items":
                let requestJSON = JSON.parse(event.body);
                await dynamo
                    .put({
                        TableName: "Employees",
                        Item: {
                            EmployeeId: requestJSON.EmployeeId,
                            Address: requestJSON.Address,
                            Client: requestJSON.Client,
                            PhoneNumber: requestJSON.PhoneNumber,
                            Salary: requestJSON.Salary,
                            Position: requestJSON.Position,
                            LastName: requestJSON.LastName,
                            Name: requestJSON.Name,
                        }
                    })
                    .promise();
                body = `Se ha creado el empleado`;
                break;
            case "PUT /items/{id}":
                let requestJSONUpdate = JSON.parse(event.body);
                await dynamo
                    .put({
                        TableName: "Employees",
                        Item: {
                            EmployeeId: requestJSONUpdate.EmployeeId,
                            Address: requestJSONUpdate.Address,
                            Client: requestJSONUpdate.Client,
                            PhoneNumber: requestJSONUpdate.PhoneNumber,
                            Salary: requestJSONUpdate.Salary,
                            Position: requestJSONUpdate.Position,
                            LastName: requestJSONUpdate.LastName,
                            Name: requestJSONUpdate.Name,
                        }
                    })
                    .promise();
                body = `Se ha actualizado el empleado`;
                break;
            default:
                throw new Error(`Unsupported route: "${event.routeKey}"`);
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers
    };
};