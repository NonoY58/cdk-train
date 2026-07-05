import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3n from "aws-cdk-lib/aws-s3-notifications";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export interface CdkInfraStackProps extends cdk.StackProps {
  notificationLambda: lambda.IFunction;
}

export class CdkInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CdkInfraStackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "MyBucket", {
      bucketName: "aws-train-bucket-20260705",
      versioned: false,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    bucket.addEventNotification(
      s3.EventType.OBJECT_CREATED,
      new s3n.LambdaDestination(props.notificationLambda)
    );
  }
}