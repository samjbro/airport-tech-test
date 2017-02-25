function Plane(){}

Plane.prototype = {
  land: function(airport){
    airport.clearForLanding(this);
    this._location = airport;
  },
  takeoff: function(){
    this._location.clearForTakeoff(this);
  }
};

module.exports = Plane;
