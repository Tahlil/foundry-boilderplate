const fs = require('fs');
const path = require('path');
let contractFiles = fs.readdirSync(path.join(__dirname, 'src'));
let contracts = []
for (const file of contractFiles) {
    contracts.push(file);
}

const { spawnSync } = require( 'child_process' );
const dir = spawnSync('forge', ['build']);


let files = fs.readdirSync(path.join(__dirname, 'out'));
for (const file of files) {
    if(contracts.includes(file)){
        console.log(file);
    }
}