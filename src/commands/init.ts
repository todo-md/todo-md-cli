import Command, {flags} from '@oclif/command'
import { getFiles } from './getFiles'
import path = require('path')

export class InitCommand extends Command {
  static description = 'description of this example command'

  static args = [
    { name: 'path' }
  ]

  static flags = {
    maxdepth: flags.integer({ char: 'm', description: 'Max directory depth' })
  }
  
  async run() {
    const { flags, args } = this.parse(InitCommand)
    const maxdepth = flags.maxdepth || 4
    const dirPath = args.path || process.env.HOME

    // Find all TODO.md files
    console.log('Looking for TODO.md files...')
    const files = getFiles(dirPath, 0, maxdepth, 'TODO.md')

    // Build config map
    const map: Map<string, string> = new Map()
    files.forEach(filename => {
      const projectname = path.dirname(filename).split(path.sep).pop()
      map[projectname] = filename
    })
    console.log(JSON.stringify(map, null, 4))
  }
}
