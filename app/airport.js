function Airport(){
  this._hangar = [];
}

Airport.prototype = {
  planes: function(){
    return this._hangar;
  },
  clearForLanding: function(plane){
    this._hangar.push(plane);
  },
  clearForTakeoff: function(plane){
    var planeIndex = this._hangar.indexOf(plane);
    this._hangar.splice(planeIndex,1);
  }

}


module.exports = Airport;
