'use strict';

var SlackBot = require('slackbots');
var xkcd = require('xkcd-imgs');

module.exports = function(data) {

  var bot = new SlackBot({
    name: data.name,
    token: data.token
  });

  bot.on('start', function() {
    var params = {
      icon_emoji: ':cat:'
    };
    bot.postMessage(data.channel,
      'Hello! Type <xkcd> to get an random XKCD comic!', params);
  });

  bot.on('message', function(msg) {
    var params = {
      icon_emoji: ':cat:'
    };
    if (msg.text === 'xkcd') {
      xkcd.img(function(err, res) {
        if (!err) {
          res = res.title + '=>' + res.url;
          bot.postMessage(msg.channel, res, params).fail(function(
            data) {
            console.error(data.error);
          });
        } else {
          bot.postMessage(msg.channel, err, params);
        }
      });
    }
  });
}
