var Weather = require('./weather');
function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
  this.capacity = 5;
}

Airport.prototype = {
  planes: function(){
    return this._hangar;
  },
  clearForLanding: function(plane){
    if(this._weather.isStormy()){
      throw new Error('Planes cannot land in a storm.');
    }
    if(this.capacity <= this._hangar.length){
      throw new Error('Plane cannot land: Airport is full.');
    }
    this._hangar.push(plane);
  },
  clearForTakeoff: function(plane){
    if(this._weather.isStormy()){
      throw new Error('Planes cannot takeoff in a storm.');
    }
    var planeIndex = this._hangar.indexOf(plane);
    this._hangar.splice(planeIndex,1);
  },
  setCapacity: function(number){
    this.capacity = number;
  }
}


module.exports = Airport;
