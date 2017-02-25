var Weather = require('./weather');
function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype = {
  planes: function(){
    return this._hangar;
  },
  clearForLanding: function(plane){
    if(this._weather.isStormy()){
      throw new Error('Planes cannot land in a storm.');
    }
    this._hangar.push(plane);
  },
  clearForTakeoff: function(plane){
    if(this._weather.isStormy()){
      throw new Error('Planes cannot takeoff in a storm.');
    }
    var planeIndex = this._hangar.indexOf(plane);
    this._hangar.splice(planeIndex,1);
  }
}


module.exports = Airport;
