//package boundary;
/*
public class Word implements Comparable<Word>{
	public int[] word;
	public int[] getWord() {
		return word;
	}
*/
export default class Word {
constructor (word=[],base=undefined)
{
this.base=base;
this.word=word;
for (var i=0;i<this.word.length;i++)
{
if(word[i]>=base)
return ("Error: Word and base are not compatible. word:"+this.toString()+" base:"+base);

}
}



clone() { return  new Word(this.word,this.base);  }

initialize()
{
	var wordLen=this.word.length;
 this.word = Array.from(new Array(wordLen-1), () => 0);
		this.word[wordLen-1]=-1;
}

permute(i)
{
var wordLen=this.word.length;
var permWord=[];
this.word.map((v,k)=>{
permWord[k]=this.word[(k+i)%wordLen]
}
)
return new Word(permWord,this.base);
}

	 get(i){
		var i = (i%this.word.length + this.word.length)%this.word.length;
		return this.word[i];
	}

 length() {
		return this.word.length;
	}


 set(i, j){
			var i = (i%this.word.length + this.word.length)%this.word.length;
		word[i] = j;
	}

	bar(i){
		if(Number.isInteger(i) == true){
		if(i%2==0){
  		 return i+1;
  	 }
  	 return i-1;
	 }
	 else{
		var barword = [];
 		for(var j=0;j<this.word.length;j++){
 			barword[this.word.length-1-j] = this.bar(this.get(j));
 		}
 		return new Word(barword,this.base);
	 }
	}

  addOne(){
		var count=0;
		for(var i=0;i<this.word.length;i++){
			if(this.word[i]==this.base-1){
				count++;
			}
		}
		if(count==this.word.length){
			this.word.length = this.word.length + 1;
			for(var j=0;j<this.word.length-1;j++){
				this.word[j+1] = this.word[j];
			}
			this.word[0] = 0;
		}
 	 var h = 1;
 	 while (h <this.word.length & this.word[this.word.length-h] == this.base-1){
 		 this.word[this.word.length-h]=0;
 		 h++;
 	 }
 	 if(h==this.word.length & this.word[0]==this.base-1){
 		 this.word[0]=0;
 	 }else if(h <=this.word.length) {
 		 this.word[this.word.length-h]=this.word[this.word.length-h]+1;
 	 }
  }
  /******\\
 	* *
 	*Retursn the word plus one.
 	* @param v
 	* @param base
 	* @return
 	*/
  addOneWord(){
 	 var h = 1;
 	 while (h <this.word.length & this.word[this.word.length-h] == this.base-1){
 		 this.word[this.word.length-h]=0;
 		 h++;
 	 }
 	 if(h==this.word.length & this.word[0]==this.base-1) this.word[0]=0;
 	 else if(h <=this.word.length)
 		 this.word[this.word.length-h]=this.word[this.word.length-h]+1;
 	 return new Word(this.word,this.base);
  }
  /**
 	* Return if the Word is not in u = v^k form, where k>1
 	*
  @return true if primitive, false otherwise.
 	*/
  isPrimitive() {
 	 for(var n = 1; n <= this.word.length/2;n++){
 		 if(this.word.length%n==0){
 			 var h = true;
 			 for(var j=0;j<this.word.length/n;j++){
 				 var hit = true;
 				 for(var i=0;i<n;i++){
 					 if(this.get(i)!=this.get(j*n+i)){
 						 hit = false;
 						 break;
 					 }
 				 }
 				 if(hit == false){
 					 h = false;
 					 break;
 				 }
 			 }
 			 if(h){
 				 return false;
 			 }
 		 }
 	 }
 	 return true;
  }


  static	commutator(a, b, base){
 			 var com =Array(2*(a.length()+b.length())).fill(0)
 			 for (var i=0; i<a.length(); i++){
 			 com[i]=a.word[i];
 			 }

 			 for (i=0; i<b.length(); i++){
 			 com[a.length()+i]=b.word[i];
 			 }

 			 for (i=0; i<a.length(); i++){
 					 if (a.word[a.length()-i-1] % 2 == 0)
 					 com[a.length()+b.length()+i] = a.word[a.length()-i-1]+1;
 					 else com[a.length()+b.length()+i] = a.word[a.length()-i-1]-1;
 			 }

 			 for (i=0; i<b.length(); i++){
 					 if (b.word[b.length()-i-1] % 2 == 0)
 					 com[2*a.length()+b.length()+i] = b.word[b.length()-i-1]+1;
 					 else com[2*a.length()+b.length()+i] = b.word[b.length()-i-1]-1;
 			 }

 			 var w1 = new Word(com, base);
 			 return w1.reduce()
 				 }
  /**
 	* Return if the Word's array representation is all zeros
 	*
  @return true if it's all zeros, false otherwise.
 	*/
  isAllZeros(){
 	 for(var i=0;i < this.length();i++){
 		 if(this.word[i]!=0){
 			 return false;
 		 }
 	 }
 	 return true;
  }

  /**
 	* Create a Word's array representation from String
 	*
  @param s the String
 	*
  @param base the base
 	*
  @return array representation from a String
 	*/
static  fromString(s,base){
	 var p = [];
 	 for(var i=0;i<s.length;i++){
		 p[i] =s.charCodeAt(i);
		 //console.log(s.charCodeAt(i));
		// console.log(p[i]);
 		 //p[i] = s.charAt(i);
 		 if(p[i] >= 97){
 			 p[i]-=97;
 			 p[i]=p[i]*2;
 		 }else{
 			 p[i]-=65;
 			 p[i]=p[i]*2+1;
 		 }
 	 }
 	 return new Word(p,base);
  }

  /**
 	* Compare the current CyclicWord with another
 	*
  @param a the other CyclicWord
 	*
  @return
 	*/
  compareTo(a){
 	 if(this.word.length()<a.length()){
 		 return -1;
 	 }else if(this.word.length()>a.length()){
 		 return 1;
 	 }
 	 for(var i=0;i<a.length();i++){
 		 if(this.word.get(i)<a.get(i)){
 			 return -1;
 		 }else if(this.word.get(i)>a.get(i)){
 			 return 1;
 		 }
 	 }
 	 return 0;
  }

  /**
 	* If u=v^k, where u is this Word and v is some other Word then return the largest k.
 	*
  @return    The largest k
 	*/
  largestPower(){
 	 //n = partition size
 	 for(var n = 1; n<this.length()/2+1;n++){
 		 if(this.length()%n==0){
 			 var h = true;
 			 for(var j=0;j<this.length()/n;j++){
 				 var hit = true;
 				 for(var i=0;i<n;i++){
 					 if(this.get(i)!=this.get(j*n+i)){
 						 hit = false;
 						 break;
 					 }
 				 }
 				 if(hit == false){
 					 h = false;
 					 break;
 				 }
 			 }
 			 if(h){
 				 return this.length()/n;
 			 }
 		 }
 	 }
 	 return 1;
  }

  equals(that2){
 	 if ( this.word == that2 ) return true;

 				 //use instanceof instead of getClass here for two reasons
 				 //1. if need be, it can match any supertype, and not just one class;
 				 //2. it renders an explict check for "that == null" redundant, since
 				 //it does the check for null already - "null instanceof [type]" always
 				 //returns false. (See Effective Java by Joshua Bloch.)
 	 if ( !(that2 instanceof this.word) ) return false;
 		 that = that2;
 		 return (compareTo(that)==0);
  }
  /**
 	* Returns the string form of the Word
 	*
 	* This fails as base is larger than 52. This is highly unlikely
  @return    The String that represent the CyclicWord
 	*/


  //This works up to 52 edges. I assume no one will go that far
toString(){
 	 var c = [];
 	 for(var i=0;i<this.word.length;i++){
 		 if(this.get(i)%2==0){
 			 c[i] =  String.fromCharCode(this.get(i)/2 + 97);
 		 }else{
 			 c[i] =  String.fromCharCode(this.get(i)/2 + 65);
 		 }
 	 }
	 return c;
  }


  //Returns a cyclically reduced version of the Word

  reduce(){
 	 var v= this.word;
 	 var count = 0;
 	 var n = new Word(v,this.base);
 	 while (count + 1 < n.length()) {
 		 if (n.get(count) == this.bar(n.get(count + 1))) {
 			 v = n.word;
 			 if (n.length() == 2) return null;
 			 var w = [];
 			 if (count > 0){
 			w=	 this.arraycopy(v, 0, w, 0, count);
 			 }
 			 if(v.length - count - 2 > 0){
 				w= this.arraycopy(v, count + 2, w, count, v.length - count - 2);
 			 }
 			 n = new Word(w,this.base);
			// console.log(n)
 			 //count=0;
 			 if (count > 0){
 				 //System.out.println(count+" ,, ");
 				 count--;}
 		 } else count++;
 	 }
 	 return n;
  }

  //checks for reduced NOT necessarily cyc reduced
  is_reducedNNC( ) {
 	 var v= this.word;
 	 var count = 0;
 	 var n = new Word(v,base);
 	 while (count + 1 < n.length()) {

 		 if (n.get(count) == bar(n.get(count + 1))) {
 			 return false;
 		 } else count++;

 	 }
 	 return true;
  }

  Is_Cyc_reduced( ) {
 	 var v= this.word;
 	 var count = 0;
 	 var n = new Word(v,base);
 	 while (count + 1 < n.length()) {

 		 if (n.get(count) == bar(n.get(count + 1))) {
 			 return false;
 		 } else count++;

 	 }
 	 if(n.get(0)==bar(n.get(n.length()-1))){
 		 return false;
 	 }
 	 return true;
  }

  Is_reduced( ) {
 	 var v= this.word;
 	 var count = 0;
 	 var n = new Word(v,base);
 	 while (count + 1 < n.length()) {

 		 if (n.get(count) == bar(n.get(count + 1))) {
 			 return false;
 		 } else count++;

 	 }
 	 return true;
  }
  //gives the linearly reduced vector
  //NOTE: It does not reduce cyclically.

  reduce1( ) {
 	 var v= this.word;
 	 var count = 0;
 	 while (count + 1 < v.length) {

 		 if (v[count] == bar(get(v[count + 1]))) {
 			 if (v.length == 2) return null;

 			 var w = [];
 			 arraycopy(v, 0, w, 0, count);
 			 var n = new Word(w,base);
 			 console.log("mid "+n.toString());
 			 arraycopy(v, count + 2, w, count, v.length - count - 2);
 			 v = w;
 				n = new Word(w,base);
 			 console.log(n.toString());
 			 if (count > 0)
 				 count--;
 		 } else count++;
 	 }
 	 n = new Word(v,base);
 	 console.log(n.toString());
 	 return new Word(v,base);
  }

  cyclicallyReduce( ) {
 	 var w1 = this.word.reduce();
 	 //System.out.println("xxx"+w1.toString());
 	 var v= w1.word;
 	 var count = 0;
 	 while(count < v.length/2 & w1.get(count) == bar(w1.get(v.length-count-1 ))) count++;
 	 if(count>0) {
 		 var w = new int[v.length-2*count];
 		 arraycopy(v,count , w, 0, v.length-2*count);
 		 //System.out.println(count);
 		 return new Word(w,base);
 	 } else return new Word(v,base);
  }

  //@return true if reduced, false otherwise.

  isWordReduced(){
 	 for(var i = 0 ; i < this.word.length() ; i++){
 		 if(get(i) == bar(get(i+1))){
 			 return false;
 		 }
 	 }
 	 return true;
  }

  next(){
 	 var v = this.word.clone();
 	 v.addOne();
 	 return v;
  }

 	//@return the next CyclicWord

  nextReduced(){
 	 var v = this.word.clone();
 	 while(true){
 		 v.addOne();
 		 //check if reduced and smallest
 		 if(v.isWordReduced()){
 			 return v;
 		 }
 	 }
 }

arraycopy(v,vi,w,wi,count){
var outArray=w;
for (var i=0;i<count;i++)
{
outArray[i+wi]=v[vi+i];
}
	return outArray;
}


}
