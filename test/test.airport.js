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
});
