function level2(){
	
	var arr = [];
	
	goal1 = new collectible();
	goal1.init();
	goal1.x = 60;
	goal1.y = 380;
	goal2 = new collectible();
	goal2.init();
	goal2.x = 260;
	goal2.y = 380;
	goal3 = new collectible();
	goal3.init();
	goal3.x = 360;
	goal3.y = 380;
	goal4 = new collectible();
	goal4.init();
	goal4.x = 560;
	goal4.y = 380;
	arr.push(goal1);
	arr.push(goal2);
	arr.push(goal3);
	arr.push(goal4);
	return arr;
}