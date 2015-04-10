(function() {
  module.exports = function(robot) {
    return robot.hear(/merry.band/i, function(msg) {
      return msg.send('And a merry band are we!');
    });
  };

}).call(this);
