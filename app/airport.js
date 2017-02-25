function Airport(){
  this._hangar = [];
}

Airport.prototype = {
  planes: function(){
    return this._hangar;
  },
  clearForLanding: function(plane){
    if(this.isStormy()){
      throw new Error('Planes cannot land in a storm.');
    }
    this._hangar.push(plane);
  },
  clearForTakeoff: function(plane){
    if(this.isStormy()){
      throw new Error('Planes cannot takeoff in a storm.');
    }
    var planeIndex = this._hangar.indexOf(plane);
    this._hangar.splice(planeIndex,1);
  },
  isStormy: function(){
    return false;
  }

}


module.exports = Airport;
