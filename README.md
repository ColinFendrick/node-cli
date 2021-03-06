todocli
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![CircleCI](https://circleci.com/gh/ColinFendrick/todocli/tree/master.svg?style=shield)](https://circleci.com/gh/ColinFendrick/todocli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/ColinFendrick/todocli?branch=master&svg=true)](https://ci.appveyor.com/project/ColinFendrick/todocli/branch/master)
[![Codecov](https://codecov.io/gh/ColinFendrick/todocli/branch/master/graph/badge.svg)](https://codecov.io/gh/ColinFendrick/todocli)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/ColinFendrick/todocli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
todocli/0.0.0 darwin-x64 node-v11.10.1
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add`](#todocli-add)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli remove`](#todocli-remove)
* [`todocli show`](#todocli-show)
* [`todocli update`](#todocli-update)

## `todocli add`

Add a new todo

```
USAGE
  $ todocli add

OPTIONS
  -n, --task=task  task

DESCRIPTION
  ...
  Adds a new todo to the existing list
```

_See code: [src/commands/add.js](https://github.com/ColinFendrick/todocli/blob/v0.0.0/src/commands/add.js)_

## `todocli help [COMMAND]`

display help for todocli

```
USAGE
  $ todocli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `todocli remove`

Removes a task by id

```
USAGE
  $ todocli remove

OPTIONS
  -n, --id=id  (required) task id

DESCRIPTION
  ...
  Permanently erases a task
```

_See code: [src/commands/remove.js](https://github.com/ColinFendrick/todocli/blob/v0.0.0/src/commands/remove.js)_

## `todocli show`

Show existing tasks

```
USAGE
  $ todocli show

DESCRIPTION
  ...
  Shows all tasks sorted by their ids
```

_See code: [src/commands/show.js](https://github.com/ColinFendrick/todocli/blob/v0.0.0/src/commands/show.js)_

## `todocli update`

Marks task as done

```
USAGE
  $ todocli update

OPTIONS
  -n, --id=id  taask id
```

_See code: [src/commands/update.js](https://github.com/ColinFendrick/todocli/blob/v0.0.0/src/commands/update.js)_
<!-- commandsstop -->
