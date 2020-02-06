# todo-md-cli

<img src="./assets/todo-md-cli-logo.svg" width="50px">

Official client to manage multiple [TODO.md](https://github.com/todo-md/todo-md) files.

## Installation

`npm install -g todo-md-cli`

## Usage

`todo init`: Search for all `TODO.md` files in current folder and subdirectories. Found projects are indexed in `~/.todo-md-cli.json`

`todo update`: Find and reindex all projects that have a `TODO.md` file.

`todo add PROJECTNAME/SECTION "TASK"`: Add new task to project section.

`todo [PROJECT][/SECTION] ls`: List all tasks, sections or projects. Optionally filter by project and section.

`todo help`: Show ussage of todo-md-cli.

`todo [PROJECT][/SECTION]`: Enter interactive mode to manage task state. Navigate using the `j,k` keys. Use `space` to check/uncheck, `x` to delete, `-` to decline and `q` to quit.

`todo PROJECT sort`: Moves declined and completed task to the `# DONE` section of the `TODO.md` file.

Reserved keywords: add, ls, sort and help.

## Tutorial

Create a project folder and a `TODO.md` file.

`mkdir example-project && cd example-project && touch TODO.md`.

Index the project.

`todo init`

Add a task to the project.

`todo add project-a/tutorial "I completed the todo-md-cli tutorial."`

Create another task.

`todo add project-a/tutorial "I wanna be deleted."`

Delete the second task and check the first.

`todo project/tutorial`

That is all you need to know 😊.

## Development

Clone this repository.

`git clone https://github.com/todo-md/todo-md-cli && cd todo-md-cli`

Install dependencies.

`npm install`

Run tests.

`npm run test`

You are ready to go.
