function check(str,type){
	switch(type){
		case "phone":var r=/^1[3-9]\d{9}$/; break;
		case "pass":var r=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/; break;
	}
	return r.test(str);
}