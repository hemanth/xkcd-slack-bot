var xkcdSlackBot = require('./index');
var argv = require('minimist')(process.argv.slice(2));
var util = require('util');
var package = require('./package.json');

function showUsage() {
  console.log(
    'Usage: xkcd-slack-bot -n <bot_name> -t <auth_token> -c <channel>');
}

if ('--help' in argv) {
  showUsage();
  process.exit(0);
}

if (!(argv.n && argv.t && argv.c) || !util.isString(argv.n) || !util.isString(
    argv.t) || !util.isString(argv.c)) {
  showUsage();
  process.exit(-1);
}

xkcdSlackBot({
  name: argv.n,
  token: argv.t,
  channel: argv.c
});
