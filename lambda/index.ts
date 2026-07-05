import { Handler } from "aws-cdk-lib/aws-lambda";

export const handler: Handler = async (event:any) => {
  console.log("Lambda was invoked!");
  console.log("Event:", JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda!",
    }),
  };
};