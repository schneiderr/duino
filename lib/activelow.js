
/*
<<<<<<< HEAD
 * Main LED constructor
=======
 * Main ActiveLow constructor
>>>>>>> ceab48c7dc29088f3141ada24f3a5891165b87a8
 * Process options
 * Tell the board to set it up
 */
var Activelow = function (options) {
<<<<<<< HEAD
  if (!options || !options.board) throw new Error('Must supply required options to LED');
=======
  if (!options || !options.board) throw new Error('Must supply required options to ActiveLow');
>>>>>>> ceab48c7dc29088f3141ada24f3a5891165b87a8
  this.board = options.board;
  this.pin = options.pin || 13;
  this.bright = 0;
  this.board.pinMode(this.pin, 'out');
  this.direction = -1;
}

/*
<<<<<<< HEAD
 * Turn the LED on
=======
 * Turn the ActiveLow device on
>>>>>>> ceab48c7dc29088f3141ada24f3a5891165b87a8
 */
Activelow.prototype.on = function () {
  this.board.digitalWrite(this.pin, this.board.LOW);
	this.bright = 255;
}

/* 
<<<<<<< HEAD
 * Turn the LED off
=======
 * Turn the ActiveLow device off
>>>>>>> ceab48c7dc29088f3141ada24f3a5891165b87a8
 */
Activelow.prototype.off = function () {
  this.board.digitalWrite(this.pin, this.board.HIGH);
	this.bright = 0;
}

Activelow.prototype.brightLevel = function(val) {
	this.board.analogWrite(this.pin, this.bright = val);
}

Activelow.prototype.fade = function(interval) {
	to = (interval||5000)/(255*2);
	var self = this;
	setInterval(function() {
		if(!self.board.serial) return; //Interval too fast for debug messages on ^c
		if(self.bright==0) direction = 1;
		if(self.bright==255) direction = -1;
		self.brightLevel(self.bright+direction);
	},to);
}


/*
 * Start a bariable blinking pattern
 */
Activelow.prototype.blink = function (interval) {
  interval = interval || 1000;
  var self = this;
  setInterval(function(){
    if (self.bright) {
      self.off()
    } else {
      self.on();
    }
  }, interval);
}

module.exports = Activelow;
