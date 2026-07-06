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
