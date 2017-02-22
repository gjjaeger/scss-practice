function Journal(){	
  
}

Journal.prototype.getwordcount=function(entry){
	var wholetext=entry.split(" ");
	return wholetext.length;
};

Journal.prototype.getvowel=function(entry){
	var wholetext=entry.split(" ");
	var vowels=0;
	var consonants=0;
	for (var i = 0; i<wholetext.length; i++){
		for(var j = 0; j<wholetext[i].length; j++){
			var testing = wholetext[i].charAt(j);
			if (testing == 'a'||testing == 'e'||testing == 'i'||testing == 'o'||testing == 'u'||testing == 'A'||testing == 'E'||testing == 'I'||testing == 'O'||testing == 'U'){
				vowels++;
			}
			else{
				consonants++;
			}
		}
	}
	var vowncons=[];
	vowncons.push(vowels);
	vowncons.push(consonants);
	return vowncons;
};

Journal.prototype.getfsentence=function(entry){
	if (entry.search(".") >= 0){
		var wholetext=entry.split(".");
		var eightwords = wholetext[0].split(" ");
		if (eightwords.length<=8){
				console.log(eightwords);
				return eightwords;	
		}

		else{
			var slicewdots=eightwords.slice(0,8);
			return slicewdots;
		}
	}
	else {
		var wholtext=entry.split(" ");
		var textslice= wholtext.slice(0,8);
		return textslice;
	}
};
exports.journalModule = Journal;
