describe('scalingDancer', function() {

  var scalingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    scalingDancer = new MakeScalingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(scalingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node scale in size', function() {
    sinon.spy(scalingDancer.$node, 'toggleClass');
    scalingDancer.step();
    expect(scalingDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(scalingDancer, 'step');
      expect(scalingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      
      expect(scalingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(scalingDancer.step.callCount).to.be.equal(2);
    });
  });
});
