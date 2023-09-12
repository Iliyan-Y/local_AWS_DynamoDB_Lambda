//my-lambda.ts
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

import {
  DynamoDBClient,
  ListTablesCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { proxyEvent } from "./mock/apigateway-aws-proxy";

export async function handler(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> {
  const client = new DynamoDBClient({
    region: "local",
    endpoint: "http://localhost:8000",
  });

  const command = new ListTablesCommand({});
  try {
    const results = await client.send(command);
    console.log(results.TableNames);
    return {
      statusCode: 200,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 400,
    };
  }
}
handler(proxyEvent);
