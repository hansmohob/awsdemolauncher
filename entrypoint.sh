#!/bin/sh

# Initialize Terraform
cd /mnt/efs/demol/terraform/tfdeployed
terraform init -input=false \
    -backend-config="bucket=${TF_STATE_BUCKET_NAME}" \
    -backend-config="key=${TF_STATE_BUCKET_KEY}" \
    -backend-config="region=${AWS_REGION}" \
    -backend-config="encrypt=true" \
    -backend-config="dynamodb_table=${TF_STATE_DYNAMODB_TABLE}"

# Start Node.js server
cd /app
exec node server.js
