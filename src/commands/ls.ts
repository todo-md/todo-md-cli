import Command, {flags} from '@oclif/command'
import path = require('path')

export class InitCommand extends Command {
  static description = 'description of this example command'

  static args = [
    { name: 'path' }
  ]
  
  async run() {
    const { args } = this.parse(InitCommand)
    const project = args.path

    // Path is empty list projects as table

    // Read config and get TODO.md path

    // Find all TODO.md files
    console.log(`List all open tasks of project ${project}`)

    // Get all open tasks of the TODO.md file 
    
  }
}
