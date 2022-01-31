#!/bin/bash
if [[ ! -e /opt/tinylogs.txt ]]; then
    mkdir -p /logs
    touch /opt/tinylogs.txt
fi
cd /tinythings/TinyNode
aws ssm get-parameter  --name tinythings --with-decryption --region ap-northeast-1 --query Parameter.Value --output text >> /tinythings/TinyNode/.env
npm install
npm start >> /opt/tinylogs.txt 2>&1 &
