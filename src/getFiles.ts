import fs = require('fs')
import path = require('path')

function getFiles(dirPath: string, currentLevel: number, maxLevel: number, filter: string): Array<string> {
    let files: Array<string> = []

    // Only walk directory if current depth has not exceed max depth
    if (!(currentLevel > maxLevel)) {

        // Read directories in current folder and ignore hidden folders
        const directories = fs.readdirSync(dirPath).filter(value => !value.match('^[.]|node_modules'))

        directories.forEach(file => {
            const filepath = path.join(dirPath, file)
            
            try {
                const stat = fs.statSync(filepath)

                // If file is directory step into and return files
                if (stat.isDirectory()) {
                    files = files.concat(getFiles(filepath, currentLevel + 1, maxLevel, filter))
                } else {

                    // Push file into files array
                    files.push(filepath)
                }
            } catch {}
        })
    }
    // Return files found in this directory
    return files.filter(value => value.match(filter))
}

module.exports = getFiles
