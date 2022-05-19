function ring() {
	　　document.getElementById("DiceSound").play();
	}
	
	var aX = 0, aY = 0, aZ = 0;                     // 加速度の値を入れる変数を3個用意
	var alpha = 0, beta = 0, gamma = 0;
	var old_dice1 = 0,old_dice2 = 0,old_dice3 = 0;
	var dicefuck=0;
	var timer;
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
	
	
	
	
	function get_1d6(num) {
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
		if(num==0){
		count--;
		if (count >=1 )	{ tim = setTimeout("get_1d6(0)",mSec);}
		if (count ==0 )	{ count = 20 ;} 
		}else if(num==1){
			count-=4;
			if (count >=1 )	{ tim = setTimeout("get_1d6(1)",mSec);}
			if (count ==0 )	{ count = 20 ;} 
		}
	}
	
	
	function get_1d10(num) {
		var dice1 = Math.floor( Math.random() *10) ;
		var dice2 = Math.floor( Math.random() *10) ;
		var dice3 = Math.floor( Math.random() *10) ;
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
		if(num==0){
		count--;
		if (count >=1 )	{ tim = setTimeout("get_1d10(0)",mSec);}
		if (count ==0 )	{ count = 20 ;} 
		}else if(num==1){
			count-=4;
			if (count >=1 )	{ tim = setTimeout("get_1d10(1)",mSec);}
			if (count ==0 )	{ count = 20 ;} 
		}
	}
	
	
	
	// 加速度センサの値が変化したら実行される devicemotion イベント
	window.addEventListener("devicemotion", (dat) => {
		aX = dat.acceleration.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
		aY = dat.acceleration.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
		aZ = dat.acceleration.z;    // z軸の重力加速度（Android と iOSでは正負が逆）
		alpha = dat.rotationRate.alpha
		beta = dat.rotationRate.beta
		gamma = dat.rotationRate.gamma
	});
	
	function time(){
		
				timer = window.setInterval(() => {
					sai();
				}, 40); // 33msごとに（1秒間に約30回）
			
	}
	
	
	function sai(){
		
		var os = navigator.platform;                // OS名の取得
			if(os === "iPhone" || os === "iPad" || os === "iPod") {     // iOSなら
				aX *= -1;                               // 加速度の正負を反転させる
				aY *= -1;                               // a *= b は a = a * b の意味
				aZ *= -1;
			}
		
		if (aX<0){
			aX *= -1; 
		}
		if (aY<0){
			aY *= -1; 
		}
		if (aZ<0){
			aZ *= -1; 
		}
		if (alpha<0){
			alpha *= -1; 
		}
		if (beta<0){
			beta *= -1; 
		}
		if (gamma<0){
			gamma *= -1; 
		}
		
		var acc = 0,gyro = 0;
		acc = aX+aY+aZ;
		gyro = alpha+beta+gamma;
		random(acc,gyro);
	
	}
	
	
	function random(num1,num2){
		
		var max = 6;
		var stop = false;
		var dice_or=0;
		if (document.getElementById('n_dice')) {
			id = document.getElementById('n_dice').value;
			if (id == 'select_1d10' || id == 'select_2d10' || id == 'select_3d10') {
				max = 10;
				dice_or=10;	
			}else{
				max = 6;
				dice_or=6;
			}
		}
	
		if (num1>=5,num2>=250){
			//ran = Math.floor( Math.random() *(max))+1 ; //ランダム
			var dice1 = Math.floor( Math.random() *(max)-1)+1 ;
			old_dice1 = dice1;
			var dice2 = Math.floor( Math.random() *(max)-1)+1 ;
			old_dice2 = dice2;
			var dice3 = Math.floor( Math.random() *(max)-1)+1 ;
			old_dice3 = dice3;
			/*if(dice_or == 10){
				get_1d10(1);
			}else if(dice_or==6){
				get_1d6(1);
			}*/
		}else{
			var dice1=old_dice1;
			var dice2=old_dice2;
			var dice3=old_dice3;
			stop = true;
		}
	
		if (document.getElementById('n_dice')) {
			id = document.getElementById('n_dice').value;
			if (id == 'select_1d10' || id == 'select_2d10' || id == 'select_3d10') {
				document.img_1d10.src =  getdice10[dice1];     
				document.img_2d10.src =  getdice10[dice2];
				document.img_3d10.src =  getdice10[dice3];
				if(stop==false){
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
				}
				
			}else{
				document.img_1d6.src =  getdice6[dice1];
				document.img_2d6.src =  getdice6[dice2];
				document.img_3d6.src =  getdice6[dice3];
				if(stop==false){
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
			}
			}
		}
		
	}
	
	function tmrOff(num){
		if (num==0)
	  {
		clearInterval(timer);
	  }
	}