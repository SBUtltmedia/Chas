import Word from './Word';

export default class CyclicWord extends Word  {
constructor (word=[],base=undefined)
{
super(word,base);
this.base=base;
this.word=word;
this.canonicalization();
for (var i=0;i<this.word.length;i++)
{
if(word[i]>=base)
return ("Error: Word and base are not compatible. word:"+this.toString()+" base:"+base);

}
}


	initialize(){
		for(var i=0;i<this.word.length-1;i++){
			this.word[i]=0;
		}
		this.word[this.word.length-1]=-1;
	}

	static	bar(i) {
			if(Number.isInteger(i) == true) {
				if(i%2==0) {
					return i+1;
				}
				return i-1;
			} else {
				var barword = [];
	 			for(var j=0;j<i.word.length;j++) {
	 				barword[i.word.length-1-j] = Word.bar(i.get(j));
	 			}
	 			return new Word(barword,i.base);
			}
		}

	canonicalization(){
		var max = new Word(this.word, this.base);
		for(var i=1;i<this.word.length;i++){
			var nw = this.permute(i);
			if(nw.compareTo(max)<0){
				max = nw;
			}
		}
		this.word = max.word;
	}

	clone(){
		var a = new Word(this.word,this.base);
		var v = new CyclicWord([0], this.base);
		v.word = a.word;
		return v;
	}

	next(){
		var v = this.clone();
		while(true){
			v.addOne();
			if(v.isReduced() && v.isSmallest()){
				return v;
			}
		}
	}

  isReduced(){
		for(var i=0;i<this.word.length;i++){
			if(this.get(i) == CyclicWord.bar(this.get(i+1))){
				return false;
			}
		}
		return true;
	}

	isSmallest(){
		for(var i=0;i<this.word.length;i++){
			for(var j=0;j<this.word.length;j++){
				if(this.get(i+j)>this.get(j)){
					break;
				}
				if(this.get(i+j)<this.get(j)){
					return false;
				}
			}
		}
		return true;
	}

	isDoublySmallest(){
		var v = new CyclicWord([0],this.base);
		for(var i=0;i<this.word.length;i++){
			v.word[i] = this.get(i);
		}
		for(var i=0;i<this.word.length;i++){
			v.word[i] = CyclicWord.bar(this.get(this.word.length-1-i));
		}
		for(i=0;i<this.word.length;i++){
			for(var j=0;j<this.word.length;j++){
				if(v.get(i+j)>this.get(j)){
					break;
				}
				if(v.get(i+j)<this.get(j)){
					return false;
				}
			}
		}
		return this.isSmallest();
	}


	isDoublyPalSmallest(){
		var v1 = new CyclicWord([0],this.base);
		for(var i=0;i<this.word.length;i++){
			v1.word[i] = this.get(i);
		}
		for(var i=0;i<this.word.length;i++){
			v1.word[i] = CyclicWord.bar(this.word[this.word.length-1-i]);
		}
		for(i=0;i<this.word.length;i++){
			for(var j=0;j<this.word.length;j++){
				if(v1.get(i+j)>this.get(j)){
					break;
				}
				if(v1.get(i+j)<this.get(j)){
					return false;
				}
			}
		}

		var v2 = new CyclicWord([0],this.base);
		for(var i=0;i<this.word.length;i++){
			v2.word[i] = this.get(i);
		}
		for(i=0;i<this.word.length;i++){
			v2.word[i] = (this.word[this.word.length-1-i]);
		}
		for(i=0;i<this.word.length;i++){
			for(j=0;j<this.word.length;j++){
				if(v2.get(i+j)>this.get(j)){
					break;
				}
				if(v2.get(i+j)<this.get(j)){
					return false;
				}
			}
		}
		return this.isSmallest();
	}


}
