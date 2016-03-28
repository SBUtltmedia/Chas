
import 'babel-polyfill';
import Word from '../js/boundary/Word';
let expect = require('chai').expect;

describe('Example tests_Word', () => {

	let word = new Word([1,3,4],10); //it works

	it('Creates Word without base', () => {
    	expect(new Word([1,2,4])).to.deep.equal({base:undefined,word:[1,2,4]});
	});

	it('Checks permute', () => {
    	expect(word.permute(2)).to.deep.equal({base:10,word:[4,1,3]});
	});

	it('Checks clone', () => {
    	expect(word.clone()).to.deep.equal({base:10,word:[1,3,4]});
	});

	it('Checks initialize', () => {
		let word = new Word([1,3,4],10);
	    word.initialize();
	    expect(word).to.deep.equal({base:10,word:[0,0,-1]});
	});

	it('Checks get', () => {
	    let word = new Word([0,1,2,3],10);
	    let a = '';
	    for(let i=0; i<word.length(); i++) {
			a = word.get(i);
			expect(a).to.deep.equal(i);
		}
	});

	it('Checks length', () => {
		let word = new Word([1,2,3],10);
		expect(word.length()).to.deep.equal(3);
	});

	it('Checks set', () => {
	    let word = new Word([1,2,3],10);
		let a = '';
		let j = 0;
		for (let i=0; i<word.length(); i++) {
			word.set(i, j*j);
			a = word.get(i);
			expect(a).to.deep.equal(j*j);
			j++;
		}
	});

	it('Checks bar', () => {
		let word = new Word([1,2,3],10);
		let word1 = Word.bar(word);
		expect(word1).to.deep.equal({base:10,word:[2,3,0]});
	});

	it('Checks addOne', () => {
	    let word0 = new Word([1,2,3],10);
	    let word1 = new Word([7,8,9],10);
	    let word2 = new Word([9,9,9],10);
	    word0.addOne();
	    word1.addOne();
	    word2.addOne();
	    expect(word0).to.deep.equal({base:10,word:[1,2,4]});
	    expect(word1).to.deep.equal({base:10,word:[7,9,0]});
	    expect(word2).to.deep.equal({base:10,word:[1,0,0,0]});
	});

	it('Checks addOneWord', () => {
		let word0 = new Word([1,2,3],10);
		let word1 = new Word([7,8,9],10);
		let word2 = new Word([9,9,9],10);
		let word_0 = word0.addOneWord();
		let word_1 = word1.addOneWord();
		let word_2 = word2.addOneWord();
		expect(word_0).to.deep.equal({base:10,word:[1,2,4]});
		expect(word_1).to.deep.equal({base:10,word:[7,9,0]});
		expect(word_2).to.deep.equal({base:10,word:[0,0,0]});
	});

	it('Checks isPrimitive', () => {
		let primitive = new Word([1,2,3],10);
		let composite = new Word([1,2,3,1,2,3],10);
		expect(primitive.isPrimitive()).to.deep.equal(true);
		expect(composite.isPrimitive()).to.deep.equal(false);
	});

	it('Checks toString', () => {
		let word = new Word([0,1,2,3],10);
		let StringWord = word.toString();
		expect(StringWord).to.deep.equal('aAbB');
	});

	it('Checks reduce', () => {
		let word = new Word([1,5,8,3,7],10);
		let word1 = new Word([1,5,4,3,7],10);
		let word2 = new Word([1,2,3,4,5,6],10);
		expect(word.reduce()).to.deep.equal({base:10,word:[1,5,8,3,7]});
		expect(word1.reduce()).to.deep.equal({base:10,word:[1,3,7]});
		expect(word2.reduce()).to.deep.equal({base:10,word:[1,6]});
	});

	it('Checks commutator', () => {
		let word1 = new Word([1,5,8,3,7],10);
		let word2 = new Word([1,5,4,3,7],10);
		let word3 = Word.commutator(word1,word2,10);
		expect(word3).to.deep.equal({base:10,word:[1,5,8,3,7,1,9,4,0,6,2,0]});
	});

	it('Checks isAllZeros', () => {
		let word0 = new Word([0,0,0,0],10);
		let word1 = new Word([0,1,2,3],10);
		expect(word0.isAllZeros()).to.deep.equal(true);
		expect(word1.isAllZeros()).to.deep.equal(false);
	});

	it('Checks fromString', () => {
		let word = "aAbB";
		let word1 = Word.fromString(word,10);
		expect(word1).to.deep.equal({base:10,word:[0,1,2,3]});
	});

	it('Checks compareTo', () => {
		let word1 = new Word([0,1,2,3],10);
		let word2 = new Word([1,2,3,0],10);
		expect(word1.compareTo(word2)).to.deep.equal(-1);
		expect(word1.compareTo(word1)).to.deep.equal(0);
		expect(word2.compareTo(word1)).to.deep.equal(1);
	});

	it('Checks largestPower', () => {
		let word = new Word([5,7,5,7,5,7,5,7],10);
		expect(word.largestPower()).to.deep.equal(4);
	});

	it('Checks is_reducedNNC', () => {
		let word1 = new Word([1,5,4,3,2],10);
		let word2 = new Word([1,5,7,9,3],10);
		expect(word1.is_reducedNNC()).to.deep.equal(false);
		expect(word2.is_reducedNNC()).to.deep.equal(true);
	});

	it('Checks Is_Cyc_reduced', () => {
		let word0 = new Word([1,5,4,3,2],10);
		let word1 = new Word([2,5,7,9,3],10);
		let word2 = new Word([1,5,7,9,3],10);
		expect(word0.Is_Cyc_reduced()).to.deep.equal(false);
		expect(word1.Is_Cyc_reduced()).to.deep.equal(false);
		expect(word2.Is_Cyc_reduced()).to.deep.equal(true);
	});

	it('Checks Is_reduced', () => {
		let word1 = new Word([1,5,4,3,2],10);
		let word2 = new Word([1,5,7,9,3],10);
		expect(word1.Is_reduced()).to.deep.equal(false);
		expect(word2.Is_reduced()).to.deep.equal(true);
	});

	it('Checks reduce1', () => {
		let word0 = new Word([1,5,8,3,7],10);
		let word1 = new Word([1,0,4,3,7],10);
		let word2 = new Word([1,2,3,4,5,6],10);
		expect(word0.reduce1()).to.deep.equal({base:10,word:[1,5,8,3,7]});
		expect(word1.reduce1()).to.deep.equal({base:10,word:[4,3,7]});
		expect(word2.reduce1()).to.deep.equal({base:10,word:[1,6]});
	});

	it('Checks cyclicallyReduce', () => {
		let word = new Word([1,5,8,3,7],10);
		let word1 = new Word([1,0,1,3,0],10);
		let word2 = new Word([1,2,3,4,5,6],10);
		expect(word.cyclicallyReduce()).to.deep.equal({base:10,word:[1,5,8,3,7]});
		expect(word1.cyclicallyReduce()).to.deep.equal({base:10,word:[3]});
		expect(word2.cyclicallyReduce()).to.deep.equal({base:10,word:[1,6]});
	});

	it('Checks isWordReduced', () => {
		let word = new Word([1,5,4,3,2],10);
		let word1 = new Word([1,5,7,9,3],10);
		expect(word.isWordReduced()).to.deep.equal(false);
		expect(word1.isWordReduced()).to.deep.equal(true);
	});

	it('Checks next', () => {
		let word0 = new Word([1,2,3],10);
		let word1 = new Word([7,8,9],10);
		let word2 = new Word([9,9,9],10);
		expect(word0.next()).to.deep.equal({base:10,word:[1,2,4]});
		expect(word1.next()).to.deep.equal({base:10,word:[7,9,0]});
		expect(word2.next()).to.deep.equal({base:10,word:[1,0,0,0]});
	});

	it('Checks nextReduced', () => {
		let word = new Word([1,2,3],10);
		let word1 = new Word([7,8,9],10);
		let word2 = new Word([9,9,9],10);
		expect(word.nextReduced()).to.deep.equal({base:10,word:[1,2,4]});
		expect(word1.nextReduced()).to.deep.equal({base:10,word:[7,9,0]});
		expect(word2.nextReduced()).to.deep.equal({base:10,word:[1,1,1,1]});
	});

});
