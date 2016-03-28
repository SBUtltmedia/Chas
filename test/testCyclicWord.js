import 'babel-polyfill';
import CyclicWord from '../js/boundary/CyclicWord';
var expect = require('chai').expect;
describe('Example tests_CyclicWord', function() {
  let word = new CyclicWord([1,3,4],10);
  it('Creates CyclicWord without base', function() {
    expect(new CyclicWord([3,2,4,5,7,1,8,9])).to.deep.equal({base:undefined,word:[1,8,9,3,2,4,5,7]});
  });

  it('Checks initialize', function() {
    let word = new CyclicWord([1,3,4],10);
    word.initialize();
    expect(word).to.deep.equal({base:10,word:[0,0,-1]});
  });

  it('Checks clone', function() {
    let word = new CyclicWord([1,3,4],10);
    word.clone();
    expect(word).to.deep.equal({base:10,word:[1,3,4]});
  });

  it('Checks isReduced', function() {
    let word = new CyclicWord([1,3,4],10);
    let word1 = new CyclicWord([1,2,3],10);
    expect(word.isReduced()).to.deep.equal(true);
    expect(word1.isReduced()).to.deep.equal(false);
  });

  it('Checks isSmallest', function() {
    let word = new CyclicWord([1,2,3],10);
    let word1 = new CyclicWord([3,2,1],10);
    expect(word.isSmallest()).to.deep.equal(true);
    expect(word1.isSmallest()).to.deep.equal(true);
  });

  it('Checks next', function() {
    let word = new CyclicWord([5,3,4],10);
    expect(word.next()).to.deep.equal({base:10,word:[3,4,6]});
  });

  it('Checks isDoublySmallest', function() {
    let word = new CyclicWord([3,2,4,5,7,1,8,9],10);
    let word1 = new CyclicWord([3,2,4,5,7,2,8,3],10);
    let word2 = new CyclicWord([2,2,2],10);
    expect(word.isDoublySmallest()).to.deep.equal(false);
    expect(word1.isDoublySmallest()).to.deep.equal(false);
    expect(word2.isDoublySmallest()).to.deep.equal(true);
  });

  it('Checks isDoublyPalSmallest', function() {
    let word = new CyclicWord([3,2,4,5,7,1,8,9],10);
    let word1 = new CyclicWord([3,2,4,5,7,2,8,3],10);
    let word2 = new CyclicWord([2,2,2],10);
    expect(word.isDoublyPalSmallest()).to.deep.equal(false);
    expect(word1.isDoublyPalSmallest()).to.deep.equal(false);
    expect(word2.isDoublyPalSmallest()).to.deep.equal(true);
  });

});
