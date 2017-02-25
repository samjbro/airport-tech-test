'use strict';

describe('Feature', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
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
