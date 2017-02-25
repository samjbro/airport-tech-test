'use strict';

describe('Feature', function(){
  var plane;
  var airport;
  var random;
  beforeEach(function(){
    random = sinon.stub(Math,'random');
    plane = new Plane();
    airport = new Airport();
  });
  describe('under normal conditions', function(){
    beforeEach(function(){
      random.returns(0);
    });
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
      random.returns(1);
      expect(function(){ plane.land(airport); }).to.throw('Planes cannot land in a storm.');
    });
    it('planes cannot takeoff', function(){
      random.returns(0);
      plane.land(airport);
      random.returns(1);
      expect(function(){ plane.takeoff(); }).to.throw('Planes cannot takeoff in a storm');
    });
  });
  afterEach(function(){
    random.restore();
  });
});
