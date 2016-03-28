import Word from '../boundary/word.js'
import CyclicWord from '../boundary/CyclicWord.js'

export default class Mcg {

static ab(s){
		var answer ="";
		var sw = s.toString();
		for(var h = 0 ; h < s.length ; h++){
			if(sw[h] =='a' || sw[h]=='A') answer = answer+sw[h];
			else if (sw[h]=='b') answer = answer+ "ab";
			else answer= answer +"BA";
		}
		var w = Word.fromString(answer, 4);
		var w1=w.reduce();
		var w2=w1.permute(2);
		w1=w2.reduce();
		return w1.toString();
	}

	static Ab(s){
			var answer ="";
			var sw = s.toString();
			for(var h = 0 ; h < s.length ; h++){
				if(sw[h] =='a' || sw[h]=='A') answer = answer+sw[h];
				else if (sw[h]=='b') answer = answer+ "Ab";
				else answer= answer +"Ba";
			}
			var w = Word.fromString(answer, 4);
			var w1=w.reduce();
			var w2=w1.permute(2);
			w1=w2.reduce();
		  return w1.toString();
	}

	static swab(s){
		var answer ="";
		var sw = s.toString();
		for(var h = 0 ; h < s.length ; h++){
			if(sw[h]=='a') answer = answer+'b';
			else if (sw[h]=='b') answer = answer+ 'a';
			else if (sw[h]=='A') answer = answer+ 'B';
			else answer= answer +"A";
		}
		var w = Word.fromString(answer, 4);
		var w1 = w.reduce();
		return w1.toString();
	}

	static bB(s){
		var answer ="";
		var sw = s.toString();
		for(var h = 0 ; h < s.length ; h++){
			if(sw[h]=='a') answer = answer+'a';
			else if (sw[h]=='b') answer = answer+ 'B';
			else if (sw[h]=='A') answer = answer+ 'A';
			else answer= answer +"b";
		}
		var w = Word.fromString(answer, 4);
		var w1 = w.reduce();
		return w1.toString();
	}

	static count(s, x){
		var answer=0;
		var sw = s.toString();
		for(var h =0 ; h< s.length ; h++){
			if(sw[h]==x) answer++;
		}
		return answer;
	}

	static normalize(sent1){
		var w1 = Word.fromString(sent1,4);
		var p1 = w1.getWord();
		var w11 = new CyclicWord(p1,4);
		var w12 = w11.toString();
		if (w11.isDoublySmallest()) {
			return w12;
		} else {
			w1 = Word.bar(w11);
			p1 = w1.getWord();
			w11 = new CyclicWord(p1,4);
		 return w11.toString();
		}
	}

  static once(st){
		var answer = new Set();
		answer.add(Mcg.normalize(Mcg.ab(st)));
		answer.add(Mcg.normalize(Mcg.Ab(st)));
		answer.add(Mcg.normalize(Mcg.swab(st)));
		answer.add(Mcg.normalize(Mcg.bB(st)));
		return answer;
	}

}
