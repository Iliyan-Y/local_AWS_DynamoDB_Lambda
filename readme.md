# Local Dynamo db + lambda test

# Requirements

1. Node
2. Docker
3. ts-node (`npm i -g ts-node`)

## How to use

0. `npm i`
1. Start dynamodb container:
   ` cd dynamodb` and
   `docker-compose up -d` (-d = detached)
2. Create table - example in `aws/deploys.sh`
3. Run `npm start`
