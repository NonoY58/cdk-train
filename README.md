# Notes
## Stacks

InfrastructureStack S3のデプロイ

## Commands
- `pnpm cdk deploy InfrastructureStack`
- `pnpm cdk destroy InfrastructureStack`

- `pnpm cdk deploy --all`

- S3バケット名を表示
  - `aws s3 ls`
- Lambdaの関数名を表示（--queryでJSON内を検索）
  - `aws lambda list-functions --query "Functions[].FunctionName" --output text`
  - 以下ではJSONが返る
    - `aws lambda list-functions`


### ファイルのアップロード
- `echo "Hello, S3!" > sample.txt`
- `aws s3 cp sample.txt s3://aws-train-bucket-20260705/uploaded.txt`

### ログを確認する
- `aws logs describe-log-groups`
- `aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/ApplicationStack"`

# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
