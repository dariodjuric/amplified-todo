/* Amplify Params - DO NOT EDIT
	API_AMPLIFIEDTODO_GRAPHQLAPIIDOUTPUT
	API_AMPLIFIEDTODO_NOTIFICATIONQUEUETABLE_ARN
	API_AMPLIFIEDTODO_NOTIFICATIONQUEUETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  return Promise.resolve('Successfully processed DynamoDB record');
};
