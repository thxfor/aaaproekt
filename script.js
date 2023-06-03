let paper = document.querySelector('.paper');
let body = document.querySelector('.body');
let back = document.querySelector('.back');
let locker = document.querySelector('.locker');
let answ = document.querySelector('.answers');
let klass = document.querySelector('.klass')
let loh = document.querySelector('.loh');
let vhod = document.querySelector('.vhod');
let rebus = document.querySelector('.rebus')
let zamok = document.querySelector('.zamok')
let zamokot = document.querySelector('.zamok2')
let dengi = document.querySelector('.dengi')
let monkey = document.querySelector('.money')
let izklassa = document.querySelector('.izklassa')
let dude = document.querySelector('.knb')
let top1 = document.querySelector('.top1')
let top2 = document.querySelector('.top2')
let top3 = document.querySelector('.top3')
let pobeda = document.querySelector('.pobeda')
let l = document.querySelector('.l')
let b = document.querySelector('.i')
let s = document.querySelector('.s')
let a = document.querySelector('.a')
let money = 0;
let poshel = 0;
let first_letter = null;
let second_letter = null;
let third_letter = null;
let fourth_letter = null;
let fifth_letter = null;
let let1 = true;
let let2 = false;
let let3 = false;
let let4 = false;
let let5 = false;
let player1 = true;
let player2 = false;
let player1_choice = null;
let player2_choice = null;
let info = document.querySelector(".info");
let elem1 = document.querySelector(".choice-player-1");
let elem2 = document.querySelector(".choice-player-2");
let stolovka = document.querySelector(".stolovka");
let op = 0;
let heeey = 0;
let duude = 0;
let sphereID = 0;
let topS = 0;
let point = 0;
let fruit = ["apple","banana"];
let sphere = document.querySelectorAll('.sphere');
let slovil = 0;

let poshelti = function(){
	paper.style.display = "block"
	body.style.backgroundImage = "url(school.jpg)"
	back.style.display = "none"
	locker.style.display = "block"
	loh.style.display = "none"
	answ.style.display = "block"
	klass.style.display = "block"
	stolovka.style.display = "block"
}

let hey = function(){
	alert("Хэй, хочешь поиграть на деньги?")
}

let help = function(){

}

let hey2 = function(){
	alert("Ну что? А сейчас хочешь?")
}

let idi = function(){
	alert("Ты за ответами? 3000 деняг")
	alert("Нет деньга? Так чего ты ко мне подошёл тогда?")
}

let iditi = function(){
	alert("Ну че? Принёс?")
	alert("Нет? Так иди ищи тогда!")
}

let final = function(){
	alert("Ну че? Как там с деньгами?")
	alert("Хорошо, вот тебе ответы. Удачи тебе")
	body.style.backgroundImage = "none"
	body.style.backgroundColor = "white"
	pobeda.style.display = "block"
	loh.style.display = "none"
}


alert("Осталось всего 4 дня до экзаменов")
alert("Мне нужно купить ответы")

paper.onclick = function(){
	paper.style.display = "none"
	body.style.backgroundImage = "none"
	back.style.display = "block"
	locker.style.display = "none"
	answ.style.display = "none"
	klass.style.display = "none"
	rebus.style.display = "block"
	stolovka.style.display = "none"
}

back.onclick = function(){
	paper.style.display = "block"
	body.style.backgroundImage = "url(school.jpg)"
	back.style.display = "none"
	locker.style.display = "block"
	answ.style.display = "block"
	klass.style.display = "block"
	rebus.style.display = "none"
	zamok.style.display = "none"
	zamokot.style.display = "none"
	l.style.display = "none"
	i.style.display = "none"
	s.style.display = "none"
	a.style.display = "none"
	stolovka.style.display = "block"
	clearTimeout(clock)
}

locker.onclick = function(){
	paper.style.display = "none"
	body.style.backgroundImage = "none"
	back.style.display = "block"
	locker.style.display = "none"
	answ.style.display = "none"
	klass.style.display = "none"
	rebus.style.display = "none"
	zamok.style.display = "block"
	stolovka.style.display = "none"
	if(op==1){
		zamok.style.display = "none"
		zamokot.style.display = "block"
	}

	if(first_letter=="Л"){
		l.style.display = "block"
	}

	if(second_letter=="И"){
		i.style.display = "block"
	}

	if(third_letter=="С"){
		s.style.display = "block"
	}

	if(fifth_letter=="А"){
		a.style.display = "block"
	}

	let clock = function(){
		document.addEventListener("keydown", function(arg){
			if(let1 == true && let2 == false){
				if(arg.code == "KeyK"){
	            	l.style.display = "block"
	            	first_letter = "Л"
	            	let1 = false;
	            	let2 = true;
	        	}
	        }

	        if(let2 == true && let3 == false){
	        	if(arg.code == "KeyB"){
	            	b.style.display = "block"
	            	second_letter = "И"
	            	let2 = false;
	            	let3 = true;
	        	}
	        }

	        if(let3 == true && let4 == false){
	        	if(arg.code == "KeyC"){
	        		s.style.display = "block"
	            	third_letter = "С"
	            	let3 = false;
	            	let4 = true;
	        	}
	        }

	        if(let4 == true){
	        	if(arg.code == "KeyF"){
	            	a.style.display = "block"
	            	fifth_letter = "А"
	            	let4 = false;
	            	setTimeout(finish, 100)
	        	}
	        }
		})

		function finish(){
	        if(first_letter=="Л" && second_letter=="И" && third_letter=="С" && fifth_letter=="А"){
	            alert("Код подошёл")
	            alert("В ящике ты нашёл 1000 дублей")
	        }
	        paper.style.display = "block"
			body.style.backgroundImage = "url(school.jpg)"
			back.style.display = "none"
			locker.style.display = "block"
			answ.style.display = "block"
			klass.style.display = "block"
			stolovka.style.display = "block"
			zamok.style.display = "none"
			l.style.display = "none"
			b.style.display = "none"
			s.style.display = "none"
			a.style.display = "none"
			op = op + 1
			money = money + 1000
			dengi.innerHTML = money
	    }
	}
	setTimeout(clock, 100)
}

answ.onclick = function(){
	paper.style.display = "none"
	body.style.backgroundImage = "url(toilet.png)"
	body.style.backgroundSize = "100% 100%"
	body.style.height = "1080px"
	locker.style.display = "none"
	loh.style.display = "block"
	answ.style.display = "none"
	klass.style.display = "none"
	stolovka.style.display = "none"

	if (money<3000){

		if (poshel==0){
			setTimeout(poshelti, 1500)
			setTimeout(idi, 1500)
		}

		if (poshel>=1){
			setTimeout(poshelti, 1500)
			setTimeout(iditi, 1500)
		}

		poshel = poshel + 1
	}

	if (money>=3000){
		setTimeout(final, 200)
	}
}



stolovka.onclick = function(){
	paper.style.display = "none"
	body.style.backgroundImage = "url(столовка.jpg)"
	locker.style.display = "none"
	answ.style.display = "none"
	klass.style.display = "none"
	stolovka.style.display = "none"
	dengi.style.display = "none"
	monkey.style.display = "none"

	function ahtung(){
		alert("Осторожно!")
		myInt = setInterval(changeTop, 300)
	}

	setTimeout(ahtung, 100)

	for(i=0; i<10; i= i + 1) {
		let sphere = document.createElement('div')
		document.body.appendChild(sphere);
		sphere.classList.add('sphere');
		let randomX = Math.round(Math.random()*1840)
		sphere.style.left = randomX + "px";

		let typeIndex = Math.round(Math.random()*1)
		sphere.myType = fruit[typeIndex]

		if(sphere.myType=="apple"){
			sphere.style.backgroundImage = "url(хлебушек.png)"
			sphere.style.backgroundSize = "100% 100%"
		}

		else if(sphere.myType=="banana"){
			sphere.style.backgroundImage = "url(каша.png)"
			sphere.style.backgroundSize = "100% 100%"
		}
	}

	let sphera = document.querySelectorAll('.sphere')


	let changeTop = function(){
		topS = topS + 150
		sphera[sphereID].style.top = topS + "px"

		if (sphereID>=9){
			clearInterval(myInt)
			alert("Ффуух, ты нас спас, спасибо. Вот тебе 1000 дублей за это")
			money = money + 1000
			dengi.innerHTML = money
			dengi.style.display = "block"
			monkey.style.display = "block"
			setTimeout(izklasa, 2000)
		}

		sphera[sphereID].onclick = function(){
			sphera[sphereID].style.display = "none"
			if (sphera[sphereID].myType=='apple'){
				point = point + 10
				sphereID = sphereID + 1
			}

			else if (sphera[sphereID].myType=='banana') {
				point = point + 20
				sphereID = sphereID + 1
			}
			topS = 0
		}

		if(topS>=1050){
			sphera[sphereID].style.display = "none"
			topS = 0
			sphereID = sphereID + 1
		}
	}
}

klass.onclick = function(){
	paper.style.display = "none"
	body.style.backgroundImage = "url(klass.jpg)"
	locker.style.display = "none"
	answ.style.display = "none"
	klass.style.display = "none"
	izklassa.style.display = "block"
	stolovka.style.display = "none"

	if(heeey==0 && duude<=0){
		heey = setTimeout(hey, 1000)
	}

	if(heeey>=1 && duude<=0){
		heey2 = setTimeout(hey2, 1000)
	}

	if(duude<=0){
		dude.style.display = "block"
	}

	heeey = heeey + 1
}

izklassa.onclick = function(){
	paper.style.display = "block"
	body.style.backgroundImage = "url(school.jpg)"
	back.style.display = "none"
	locker.style.display = "block"
	answ.style.display = "block"
	klass.style.display = "block"
	rebus.style.display = "none"
	zamok.style.display = "none"
	zamokot.style.display = "none"
	izklassa.style.display = "none"
	dude.style.display = "none"
	stolovka.style.display = "block"
	clearTimeout(heey)
	clearTimeout(heey2)
}

function izklasa(){
	paper.style.display = "block"
	body.style.backgroundImage = "url(school.jpg)"
	back.style.display = "none"
	locker.style.display = "block"
	answ.style.display = "block"
	klass.style.display = "block"
	rebus.style.display = "none"
	zamok.style.display = "none"
	zamokot.style.display = "none"
	izklassa.style.display = "none"
	dude.style.display = "none"
	stolovka.style.display = "block"
	clearTimeout(heey)
	clearTimeout(heey2)
}

function explaining(){
	alert("Играем в «Камень ножницы бумага»")
	alert("Если ты победишь, дам тебе 1000 дублей")
}

dude.onclick = function(){
	body.style.backgroundImage = "url(parta.jpg)"
	dude.style.display = "none"
	izklassa.style.display = "none"
	dengi.style.display = "none"
	monkey.style.display = "none"
	top1.style.display = "block"
	top2.style.display = "block"
	top3.style.display = "block"
	setTimeout(explaining, 200)
	setTimeout(game, 200)

	function game(){
		document.addEventListener("keydown", function(arg){
			if(player1 == true && player2 == false){
	        	if(arg.code == "KeyA"){
	            	console.log("Выбран камень")
	            	player1_choice = "камень"
	            	player2_choice = "ножницы"
	            	setTimeout(finish, 2500)
	            	setTimeout(yourItems, 500)
	            	setTimeout(showItems, 1500)
	            	player1 = false;
                	player2 = true;
	        	}
	        	else if(arg.code == "KeyS"){
	            	console.log("Выбраны ножницы")
	            	player1_choice = "ножницы"
	            	player2_choice = "бумага"
	            	setTimeout(finish, 2500)
	            	setTimeout(yourItems, 500)
	            	setTimeout(showItems, 1500)
	            	player1 = false;
                	player2 = true;
	        	}
		        else if(arg.code == "KeyD"){
		            console.log("Выбрана бумага")
		            player1_choice = "бумага"
		            player2_choice = "камень"
		            setTimeout(finish, 2500)
		            setTimeout(yourItems, 500)
		            setTimeout(showItems, 1500)
		            player1 = false;
                	player2 = true;
	        	}
	        }
		})

	    function yourItems(){
		    if(player1_choice == "камень"){
		       	elem1.style.display = "block"
		        elem1.style.backgroundImage = "url(stone.png)"
		        elem1.style.backgroundSize = "100% 100%"
		    }
		    else if(player1_choice == "ножницы"){
		    	elem1.style.display = "block"
		    	elem1.style.backgroundImage = "url(scissors.png)"
		        elem1.style.backgroundSize = "100% 100%"
		    }
		    else if(player1_choice == "бумага"){
		        elem1.style.display = "block"
		        elem1.style.backgroundImage = "url(bumaga.png)"
		        elem1.style.backgroundSize = "100% 100%"
		    }
		}

	    function showItems(){
	        if(player2_choice == "камень"){
	            elem2.style.display = "block"
	            elem2.style.backgroundImage = "url(stone.png)"
	            elem2.style.backgroundSize = "100% 100%"
	        }
	        else if(player2_choice == "ножницы"){
	            elem2.style.display = "block"
	            elem2.style.backgroundImage = "url(scissors.png)"
	            elem2.style.backgroundSize = "100% 100%"
	        }
	        else if(player2_choice == "бумага"){
	            elem2.style.display = "block"
	            elem2.style.backgroundImage = "url(bumaga.png)"
	            elem2.style.backgroundSize = "100% 100%"
	        }
	    }

	    function finish(){
	        if(player1_choice == "камень" && player2_choice == "ножницы"){
	            alert("Ты победил! Вот твои деньги.")
	            money = money + 1000
				dengi.innerHTML = money
				dengi.style.display = "block"
				monkey.style.display = "block"
				dude.style.display = "none"
				elem1.style.display = "none"
				elem2.style.display = "none"
				top1.style.display = "none"
				top2.style.display = "none"
				top3.style.display = "none"
				duude = duude + 1
				setTimeout(izklasa, 100)
	        }

	        else if(player1_choice == "ножницы" && player2_choice == "бумага"){
	            alert("Ты победил! Вот твои деньги.")
	            money = money + 1000
				dengi.innerHTML = money
				dengi.style.display = "block"
				monkey.style.display = "block"
				dude.style.display = "none"
				elem1.style.display = "none"
				elem2.style.display = "none"
				top1.style.display = "none"
				top2.style.display = "none"
				top3.style.display = "none"
				duude = duude + 1
				setTimeout(izklasa, 100)
	        }

	        else if(player1_choice == "бумага" && player2_choice == "камень"){
	            alert("Ты победил! Вот твои деньги.")
	            money = money + 1000
				dengi.innerHTML = money
				dengi.style.display = "block"
				monkey.style.display = "block"
				dude.style.display = "none"
				elem1.style.display = "none"
				elem2.style.display = "none"
				top1.style.display = "none"
				top2.style.display = "none"
				top3.style.display = "none"
				duude = duude + 1
				setTimeout(izklasa, 100)
	        }
	    }
	}
}
