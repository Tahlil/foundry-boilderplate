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
        let abiFileName = file.split('.')[0] +".json";
        let compiled = JSON.parse(fs.readFileSync(path.join(__dirname, 'out', file, abiFileName)));
        fs.writeFile(path.join(__dirname, 'abis', abiFileName), JSON.stringify(compiled.abi, null, 2), (err) => {
            if (err) throw err;
        });
    }
}