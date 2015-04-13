// Description
//   A command that gets a quote of the day
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot qod - Returns a quote of the day
//
// Notes:
//
//
// Author:
//   bronzehedwick
(function() {
  module.exports = function(robot) {
    return robot.respond(/qod/i, function(msg) {
      return msg.http('http://api.theysaidso.com/qod.json').get()(function(err, res, body) {
        var data = JSON.parse(body);
        return msg.send('"' + data.quote + '" - ' + data.author);
      });
    });
  };
}).call(this);
