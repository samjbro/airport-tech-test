'use strict';

describe('Plane', function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = sinon.createStubInstance(Airport);
  });
  it('can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).to.have.been.calledWith(plane);
  });
});
