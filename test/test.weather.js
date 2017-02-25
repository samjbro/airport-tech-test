'use strict';

describe('Weather', function(){
  var weather;
  var random;
  beforeEach(function(){
    weather = new Weather();
    random = sinon.stub(Math,'random');
  });
  it('is stormy sometimes', function(){
    random.returns(1);
    expect(weather.isStormy()).to.be.true;
  });
  it('is not stormy sometimes', function(){
    random.returns(0);
    expect(weather.isStormy()).to.be.false;
  });
  afterEach(function(){
    random.restore();
  });
});
