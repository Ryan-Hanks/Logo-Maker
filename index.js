const CLI = require('./library.cli');

const cli = new CLI();

if (process.argv[2] === 'generate' && process.argv[3] === 'logo') {
    cli.run();
};