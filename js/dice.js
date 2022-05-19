function ring() {
　　document.getElementById("DiceSound").play();
}

count = 20;	//　点滅させる回数
mSec = 50;	//　点滅速度（1秒＝1000）

getdice6 = new Array(
	"./img/6d1.svg",
	"./img/6d2.svg",
	"./img/6d3.svg",
	"./img/6d4.svg",
	"./img/6d5.svg",
	"./img/6d6.svg"
);
getdice10 = new Array(
	"./img/10d1.svg",
	"./img/10d2.svg",
	"./img/10d3.svg",
	"./img/10d4.svg",
	"./img/10d5.svg",
	"./img/10d6.svg",
	"./img/10d7.svg",
	"./img/10d8.svg",
	"./img/10d9.svg",
	"./img/10d10.svg"
);

function get_1d6() {
	var dice1 = Math.floor(Math.random() * 6);
	var dice2 = Math.floor(Math.random() * 6);
	var dice3 = Math.floor(Math.random() * 6);
	document.img_1d6.src =  getdice6[dice1];
	document.img_2d6.src =  getdice6[dice2];
	document.img_3d6.src =  getdice6[dice3];
	if (document.getElementById('n_dice')) {
		id = document.getElementById('n_dice').value;
		if (id == 'select_1d6') {
			document.getElementById('condice1d6').innerHTML = "<h1>" + (dice1 + 1) + "</h1>";
		}
		else if (id == 'select_2d6') {
			document.getElementById('condice1d6').innerHTML = "<h1>" + (dice1 + dice2 + 2) + "</h1>";
		}
		else if (id == 'select_3d6') {
			document.getElementById('condice1d6').innerHTML = "<h1>" + (dice1 + dice2 + dice3 + 3) + "</h1>";
		}
	}
	count--;
	if (count >=1 )	{ tim = setTimeout("get_1d6()",mSec);}
	if (count ==0 )	{ count = 20 ;} 
}
function get_1d10() {
	var dice1 = Math.floor(Math.random() * 10);
	var dice2 = Math.floor(Math.random() * 10);
	var dice3 = Math.floor(Math.random() * 10);
	document.img_1d10.src =  getdice10[dice1];     
	document.img_2d10.src =  getdice10[dice2];
	document.img_3d10.src =  getdice10[dice3];
	if (document.getElementById('n_dice')) {
		id = document.getElementById('n_dice').value;
		if (id == 'select_1d10') {
			document.getElementById('condice1d10').innerHTML = "<h1>" + (dice1 + 1) + "</h1>";
		}
		else if (id == 'select_2d10') {
			document.getElementById('condice1d10').innerHTML = "<h1>" + (dice1 + dice2 + 2) + "</h1>";
		}
		else if (id == 'select_3d10') {
			document.getElementById('condice1d10').innerHTML = "<h1>" + (dice1 + dice2 + dice3 + 3) + "</h1>";
		}
	}
	count--;
	if (count >=1 )	{ tim = setTimeout("get_1d10()",mSec);}
	if (count ==0 )	{ count = 20 ;} 
}