#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import { CdkApplicationStack } from "../lib/cdk-app-stack";
import { CdkInfraStack } from "../lib/cdk-infra-stack";

const app = new cdk.App();

// 先にLambdaを作成
const applicationStack = new CdkApplicationStack(
  app,
  "ApplicationStack"
);

// LambdaをInfraStackへ渡す
new CdkInfraStack(app, "InfrastructureStack", {
  notificationLambda: applicationStack.notificationLambda,
});

// aws s3 cp sample.txt s3://aws-train-bucket-20260705
// aws logs tail /aws/lambda/ApplicationStack-HelloLambda3D9C82D6-RZLkwfN3OPpn --follow