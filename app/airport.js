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
    this._hangar = [];
  }

}


module.exports = Airport;
