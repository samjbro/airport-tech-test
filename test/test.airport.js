'use strict';

describe('Airport', function(){
  var airport,
      plane,
      stormy;
  beforeEach(function(){
    airport = new Airport();
    plane = sinon.createStubInstance(Plane);
    stormy = sinon.stub(airport,'isStormy');
    stormy.returns(false);
  });
  it('is empty initially', function(){
    expect(airport.planes()).to.eql([]);
  });
  describe('under normal conditions', function(){
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
      stormy.returns(true);
      expect(function(){ airport.clearForLanding(plane); }).to.throw('Planes cannot land in a storm.');
    });
    it('prevents a plane from taking off', function(){
      airport.clearForLanding(plane);
      stormy.returns(true);
      expect(function(){ airport.clearForTakeoff(plane); }).to.throw('Planes cannot takeoff in a storm.');
    });
  });
});
