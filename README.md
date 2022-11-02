# Scripts

A CLI bin to execute scripts in one place.

## Getting started

Run `npm install -g scripts` to install the CLI package.

## Usage

Create a file called `scripts.json` in your project and add your scripts there.

For example:

```json
{
  "command-1": "node --version",
  "command-2": "..."
}
```

In your terminal execute:

```shell
$ run command-1
```
