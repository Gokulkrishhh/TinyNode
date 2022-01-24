#!/bin/bash
cd /tinythings/TinyNode
npm install
npm start 2>&1 | tee log.txt
