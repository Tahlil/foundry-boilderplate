const {argv} = require('process');
const { spawnSync } = require( 'child_process' );

let hasAbiFlag = argv.length > 2; // add an and logic when we will use more flags

let runFoundryBuild = () => {
    const dir = spawnSync('forge', ['build']);
}
if(hasAbiFlag){
    const fs = require('fs');
    const path = require('path');

    let abiDirectory = path.join(__dirname, 'abis')
    if (!fs.existsSync(abiDirectory)) fs.mkdirSync(abiDirectory,'0777', true);
    let contractFiles = fs.readdirSync(path.join(__dirname, 'src'));
    let contracts = []
    for (const file of contractFiles) {
        contracts.push(file);
    }

    runFoundryBuild();

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
}
else{
    runFoundryBuild();
}
