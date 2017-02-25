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
});
