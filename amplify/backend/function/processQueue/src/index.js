/* Amplify Params - DO NOT EDIT
	API_AMPLIFIEDTODO_GRAPHQLAPIIDOUTPUT
	API_AMPLIFIEDTODO_ITEMTABLE_ARN
	API_AMPLIFIEDTODO_ITEMTABLE_NAME
	API_AMPLIFIEDTODO_LISTTABLE_ARN
	API_AMPLIFIEDTODO_LISTTABLE_NAME
	API_AMPLIFIEDTODO_NOTIFICATIONQUEUETABLE_ARN
	API_AMPLIFIEDTODO_NOTIFICATIONQUEUETABLE_NAME
	API_AMPLIFIEDTODO_USERTABLE_ARN
	API_AMPLIFIEDTODO_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
