import fs = require('fs')
import path = require('path')

function saveConfig(config: Map<string, string>) {
    // Create json String
    const jsonConfig = JSON.stringify(config, null, 4)
    const filepath = path.join(process.env.HOME, '.todo-md-cli')
    fs.writeFileSync(filepath, jsonConfig)
}

module.exports = {
    saveConfig
}