import 'babel-polyfill';
import Mcg from '../js/a_orbits/Mcg.js';
import Word from '../js/boundary/Word.js';
import CyclicWord from '../js/boundary/CyclicWord.js';
var expect = require('chai').expect;
describe('Example tests_Mcg', function() {
  let word = new Word([1,3,4],10);

  it('Checks ab', function() {
    var word = 'aAbBbAaBbAa';
    expect(Mcg.ab(word)).to.deep.equal(['a','b']);
  });

  it('Checks Ab', function() {
    var word = 'aAbBbAaBbAa';
    expect(Mcg.Ab(word)).to.deep.equal(['A','b']);
  });

  it('Checks swab', function() {
    var word = 'aAbBbAaBbAa';
    expect(Mcg.swab(word)).to.deep.equal(['a']);
  });

  it('Checks bB', function() {
    var word = 'aAbBbAaBbAa';
    expect(Mcg.bB(word)).to.deep.equal(['B']);
  });

  it('Checks count', function() {
    var word = 'aAbBbAaBbAa';
    expect(Mcg.count(word,'a')).to.deep.equal(3);
  });



});
