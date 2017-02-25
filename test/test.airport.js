'use strict';

describe('Airport', function(){
  var airport,
      plane;
  beforeEach(function(){
    airport = new Airport();
    plane = sinon.createStubInstance(Plane);
  });
  it('is empty initially', function(){
    expect(airport.planes()).to.eql([]);
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
