const {Command, flags} = require('@oclif/command')
const {Todo} = require('../../db')

class UpdateCommand extends Command {
  async run() {
    const {flags: {id}} = this.parse(UpdateCommand)
    const res = await Todo.find({id: parseInt(id, 10)})
    .assign({done: true})
    .write()
    this.log(res)
  }
}

UpdateCommand.description = 'Marks task as done'

UpdateCommand.flags = {
  id: flags.string({char: 'n', description: 'taask id'}),
}

module.exports = UpdateCommand