import * as cdk from "aws-cdk-lib";
import * as sqs from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

export class CdkSqsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // SQSキューの作成
    const queue = new sqs.Queue(this, "MyQueue", {
      queueName: "aws-train-queue-20260730",
      retentionPeriod: cdk.Duration.days(4),
      visibilityTimeout: cdk.Duration.seconds(30),
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // CloudFormation Outputs
    new cdk.CfnOutput(this, "QueueName", {
      value: queue.queueName,
    });

    new cdk.CfnOutput(this, "QueueUrl", {
      value: queue.queueUrl,
    });

    new cdk.CfnOutput(this, "QueueArn", {
      value: queue.queueArn,
    });
  }
}