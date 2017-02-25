'use strict';

describe('Feature', function(){
  var plane;
  var airport;
  var stormy;
  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    stormy = sinon.stub(airport,'isStormy')
    stormy.returns(false);
  });
  describe('under normal conditions', function(){
    it('a plane can land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).to.contain(plane);
    });
    it('a plane can takeoff', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.to.contain(plane);
    });
  });
  describe('under stormy conditions', function(){
    it('planes cannot land', function(){
      stormy.returns(true);
      expect(function(){ plane.land(airport); }).to.throw('Planes cannot land in a storm.');
    });
    it('planes cannot takeoff', function(){
      plane.land(airport);
      stormy.returns(true);
      expect(function(){ plane.takeoff(); }).to.throw('Planes cannot takeoff in a storm');
    });
  });
});
