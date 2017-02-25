'use strict';

describe('Airport', function(){
  var airport,
      plane,
      weather;
  beforeEach(function(){
    weather = sinon.createStubInstance(Weather);
    airport = new Airport(weather);
    plane = sinon.createStubInstance(Plane);
  });
  it('is empty initially', function(){
    expect(airport.planes()).to.eql([]);
  });
  describe('under normal conditions', function(){
    beforeEach(function(){
      weather.isStormy.returns(false);
    });
    it('can clear a plane for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).to.eql([plane]);
    });
    it('can clear a specific plane for takeoff', function(){
      var otherPlane = sinon.createStubInstance(Plane);
      airport.clearForLanding(plane);
      airport.clearForLanding(otherPlane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).to.eql([otherPlane]);
    });
  });
  describe('under stormy conditions', function(){
    it('prevents a plane from landing', function(){
      weather.isStormy.returns(true);
      expect(function(){ airport.clearForLanding(plane); }).to.throw('Planes cannot land in a storm.');
    });
    it('prevents a plane from taking off', function(){
      weather.isStormy.returns(false);
      airport.clearForLanding(plane);
      weather.isStormy.returns(true);
      expect(function(){ airport.clearForTakeoff(plane); }).to.throw('Planes cannot takeoff in a storm.');
    });
  });
});
