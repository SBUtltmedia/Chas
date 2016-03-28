import 'babel-polyfill';
import Word from '../js/boundary/Word';
var expect = require('chai').expect;
describe('Example tests_Word', function() {
  let word = new Word([1,3,4],10); //it works

  it('Creates Word without base', function() {

    expect(new Word([1,2,4])).to.deep.equal({base:undefined,word:[1,2,4]});
  });

  it('Checks permute', function() {
    expect(word.permute(2)).to.deep.equal({base:10,word:[4,1,3]});
  });

  it('Checks clone', function() {
    expect(word.clone()).to.deep.equal({base:10,word:[1,3,4]});
  });

  it('Checks initialize', function() {
    let word = new Word([1,3,4],10);
    word.initialize()
    expect(word).to.deep.equal({base:10,word:[0,0,-1]});
  });

  it('Checks get', function() {
    let word = new Word([1,2,3],10);
    var a = [];
    for(var i=0;i<word.length;i++){
    a[i] = word.get(i)
    expect(a[i]).to.deep.equal(i+1);
  }
  });

  it('Checks length', function() {
    let word = new Word([1,2,3],10);
    expect(word.length()).to.deep.equal(3);
  });

  it('Checks set', function() {
    let word = new Word([1,2,3],10);
    var a = [];
    var j = 0;
    for(var i=0;i<word.length;i++){
      word.set(i,j*j)
      a[i] = word.get(i)
      expect(a[i]).to.deep.equal(j*j);
      j++;
  }
  });

  it('Checks bar', function() {
    let word = new Word([1,2,3],10);
    var word1 = Word.bar(word);
    expect(word1).to.deep.equal({base:10,word:[2,3,0]});
  });


  it('Checks addOne', function() {
    let word = new Word([1,2,3],10);
    let word1 = new Word([7,8,9],10);
    let word2 = new Word([9,9,9],10);
    word.addOne();
    word1.addOne();
    word2.addOne();
    expect(word).to.deep.equal({base:10,word:[1,2,4]});
    expect(word1).to.deep.equal({base:10,word:[7,9,0]});
    expect(word2).to.deep.equal({base:10,word:[1,0,0,0]});
  });

  it('Checks addOneWord', function() {
    let word0 = new Word([1,2,3],10);
    let word1 = new Word([7,8,9],10);
    let word2 = new Word([9,9,9],10);
    var word_0 = word0.addOneWord();
    var word_1 = word1.addOneWord();
    var word_2 = word2.addOneWord();
    expect(word_0).to.deep.equal({base:10,word:[1,2,4]});
    expect(word_1).to.deep.equal({base:10,word:[7,9,0]});
    expect(word_2).to.deep.equal({base:10,word:[0,0,0]});
  });

  it('Checks isPrimitive', function() {
    let word = new Word([1,2,3],10);
    expect(word.isPrimitive()).to.deep.equal(true);
  });

  it('Checks toString', function() {
    let word = new Word([0,1,2,3],10);
    var StringWord = word.toString();
    expect(StringWord).to.deep.equal('aAbB');
  });

  it('Checks reduce', function() {
    let word = new Word([1,5,8,3,7],10);
    let word1 = new Word([1,5,4,3,7],10);
    let word2 = new Word([1,2,3,4,5,6],10);
    expect(word.reduce()).to.deep.equal({base:10,word:[1,5,8,3,7]});
    expect(word1.reduce()).to.deep.equal({base:10,word:[1,3,7]});
    expect(word2.reduce()).to.deep.equal({base:10,word:[1,6]});
  });

  it('Checks commutator', function() {
    let word1 = new Word([1,5,8,3,7],10);
    let word2 = new Word([1,5,4,3,7],10);
    var word3 = Word.commutator(word1,word2,10);
    expect(word3).to.deep.equal({base:10,word:[1,5,8,3,7,1,9,4,0,6,2,0]});
  });

  it('Checks isAllZeros', function() {
    let word = new Word([0,1,2,3],10);
    let word1 = new Word([0,0,0,0],10);
    expect(word.isAllZeros()).to.deep.equal(false);
    expect(word1.isAllZeros()).to.deep.equal(true);
  });

  it('Checks fromString', function() {
    let word = "aAbB"
    var word1 = Word.fromString(word,10);
    expect(word1).to.deep.equal({base:10,word:[0,1,2,3]});
  });

  it('Checks compareTo', function() {
    let word = new Word([0,1,2,3],10);
    let a = new Word([1,2,3,0],10);
    expect(word.compareTo(a)).to.deep.equal(-1);
  });

  it('Checks largestPower', function() {
    let word = new Word([5,7,5,7,5,7,5,7],10);
    expect(word.largestPower()).to.deep.equal(4);
  });

  it('Checks is_reducedNNC', function() {
    let word = new Word([1,5,4,3,2],10);
    let word1 = new Word([1,5,7,9,3],10);
    expect(word.is_reducedNNC()).to.deep.equal(false);
    expect(word1.is_reducedNNC()).to.deep.equal(true);
  });

  it('Checks Is_Cyc_reduced', function() {
    let word = new Word([1,5,4,3,2],10);
    let word1 = new Word([2,5,7,9,3],10);
    let word2 = new Word([1,5,7,9,3],10);
    expect(word.Is_Cyc_reduced()).to.deep.equal(false);
    expect(word1.Is_Cyc_reduced()).to.deep.equal(false);
    expect(word2.Is_Cyc_reduced()).to.deep.equal(true);
  });

  it('Checks Is_reduced', function() {
    let word = new Word([1,5,4,3,2],10);
    let word1 = new Word([1,5,7,9,3],10);
    expect(word.Is_reduced()).to.deep.equal(false);
    expect(word1.Is_reduced()).to.deep.equal(true);
  });

  it('Checks reduce1', function() {
    let word = new Word([1,5,8,3,7],10);
    let word1 = new Word([1,0,4,3,7],10);
    let word2 = new Word([1,2,3,4,5,6],10);
    expect(word.reduce1()).to.deep.equal({base:10,word:[1,5,8,3,7]});
    expect(word1.reduce1()).to.deep.equal({base:10,word:[4,3,7]});
    expect(word2.reduce1()).to.deep.equal({base:10,word:[1,6]});
  });

  it('Checks cyclicallyReduce', function() {
    let word = new Word([1,5,8,3,7],10);
    let word1 = new Word([1,0,1,3,0],10);
    let word2 = new Word([1,2,3,4,5,6],10);
    expect(word.cyclicallyReduce()).to.deep.equal({base:10,word:[1,5,8,3,7]});
    expect(word1.cyclicallyReduce()).to.deep.equal({base:10,word:[3]});
    expect(word2.cyclicallyReduce()).to.deep.equal({base:10,word:[1,6]});
  });

  it('Checks isWordReduced', function() {
    let word = new Word([1,5,4,3,2],10);
    let word1 = new Word([1,5,7,9,3],10);
    expect(word.isWordReduced()).to.deep.equal(false);
    expect(word1.isWordReduced()).to.deep.equal(true);
  });

  it('Checks next', function() {
    let word = new Word([1,2,3],10);
    let word1 = new Word([7,8,9],10);
    let word2 = new Word([9,9,9],10);
    expect(word.next()).to.deep.equal({base:10,word:[1,2,4]});
    expect(word1.next()).to.deep.equal({base:10,word:[7,9,0]});
    expect(word2.next()).to.deep.equal({base:10,word:[1,0,0,0]});
  });

  it('Checks nextReduced', function() {
    let word = new Word([1,2,3],10);
    let word1 = new Word([7,8,9],10);
    let word2 = new Word([9,9,9],10);
    expect(word.nextReduced()).to.deep.equal({base:10,word:[1,2,4]});
    expect(word1.nextReduced()).to.deep.equal({base:10,word:[7,9,0]});
    expect(word2.nextReduced()).to.deep.equal({base:10,word:[1,1,1,1]});
  });

});
