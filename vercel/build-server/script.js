const { exec } = require('child_process')
const path = require('path')


async function init() {
    console.log('Executing script.js');
    const outDirPath = path.join(__dirname, 'output')

    const p =exec(`cd ${outDirPath} && npm install && npm run build`)
    
    p.stdout.on('data', function(data) {
        console.log(data.toString())
    })

    p.stdout.on('error', function(data) {
        console.log(data.toString())
    }
}