function viewChange() {	//画面切替
	if (document.getElementById('n_dice')) {
		id = document.getElementById('n_dice').value;
		if (id == 'select_1d6') {
			document.getElementById('view_6d').style.display = "";
			document.getElementById('view_1d6').style.display = "";
			document.getElementById('view_2d6').style.display = "none";
			document.getElementById('view_3d6').style.display = "none";
			document.getElementById('view_10d').style.display = "none";
			document.getElementById('view_1d10').style.display = "none";
			document.getElementById('view_2d10').style.display = "none";
			document.getElementById('view_3d10').style.display = "none";
		}
		else if (id == 'select_2d6') {
			document.getElementById('view_6d').style.display = "";
			document.getElementById('view_1d6').style.display = "";
			document.getElementById('view_2d6').style.display = "";
			document.getElementById('view_3d6').style.display = "none";
			document.getElementById('view_10d').style.display = "none";
			document.getElementById('view_1d10').style.display = "none";
			document.getElementById('view_2d10').style.display = "none";
			document.getElementById('view_3d10').style.display = "none";
		}
		else if (id == 'select_3d6') {
			document.getElementById('view_6d').style.display = "";
			document.getElementById('view_1d6').style.display = "";
			document.getElementById('view_2d6').style.display = "";
			document.getElementById('view_3d6').style.display = "";
			document.getElementById('view_10d').style.display = "none";
			document.getElementById('view_1d10').style.display = "none";
			document.getElementById('view_2d10').style.display = "none";
			document.getElementById('view_3d10').style.display = "none";
		}
		else if (id == 'select_1d10') {
			document.getElementById('view_6d').style.display = "none";
			document.getElementById('view_1d6').style.display = "none";
			document.getElementById('view_2d6').style.display = "none";
			document.getElementById('view_3d6').style.display = "none";
			document.getElementById('view_10d').style.display = "";
			document.getElementById('view_1d10').style.display = "";
			document.getElementById('view_2d10').style.display = "none";
			document.getElementById('view_3d10').style.display = "none";
		}
		else if (id == 'select_2d10') {
			document.getElementById('view_6d').style.display = "none";
			document.getElementById('view_1d6').style.display = "none";
			document.getElementById('view_2d6').style.display = "none";
			document.getElementById('view_3d6').style.display = "none";
			document.getElementById('view_10d').style.display = "";
			document.getElementById('view_1d10').style.display = "";
			document.getElementById('view_2d10').style.display = "";
			document.getElementById('view_3d10').style.display = "none";
		}
		else if (id == 'select_3d10') {
			document.getElementById('view_6d').style.display = "none";
			document.getElementById('view_1d6').style.display = "none";
			document.getElementById('view_2d6').style.display = "none";
			document.getElementById('view_3d6').style.display = "none";
			document.getElementById('view_10d').style.display = "";
			document.getElementById('view_1d10').style.display = "";
			document.getElementById('view_2d10').style.display = "";
			document.getElementById('view_3d10').style.display = "";
		}
	}
	window.onload = viewChange;
}
