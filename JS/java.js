var mainFigure = document.getElementById("figure"); 
var arrFigures = ["circle", "oval", "triangle", "triangle2", "trapeze", "parallelogram", "rectangle", "heart"]; //массив фигур
var arrColors = ["red", "yellow", "blue", "pink", "black", "purple", "brown", "#4ee138", "green"]; //цвета фигур
var rand = Math.floor(Math.random() * arrFigures.length); //рандомим число для выбора фигуры в массиве
var figureColor = arrColors[Math.floor(Math.random() * arrColors.length)]; //рандомный цвет
var timerStop = false;
var startTime = new Date().getTime();
mainFigure.classList.toggle(arrFigures[rand]); //первая фигура

function getRandomIntInclusive(min, max) {
  //функция для генерации рандомной маржи
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

mainFigure.addEventListener("click", function(){
	 var finishTime = new Date().getTime();
	 var reactionTime = (finishTime - startTime) / 1000;
	 document.querySelector("#timer").innerHTML = reactionTime + " seconds";
	 this.classList.remove(arrFigures[rand]);
	 rand = Math.floor(Math.random() * arrFigures.length);
	 this.classList.toggle(arrFigures[rand]);
	 this.style.marginTop = getRandomIntInclusive(1, 700) + "px";
	 this.style.marginLeft = getRandomIntInclusive(10, 1500) + "px";
	 figureColor = arrColors[Math.floor(Math.random() * arrColors.length)];
	 var generateSize = (Math.floor(Math.random() * (200 - 80 + 1)) + 80);

	 this.style.background = null;
	 this.style.borderBottomColor = null;
	 this.style.borderTopColor = null;
	 this.style.width = "0px";
	 this.style.height = "0px";
	 this.style.borderLeft = null;
	 this.style.borderRight = null;
	 this.style.borderBottom = null;
	 this.style.borderTop = null;
	 
     if(arrFigures[rand] === "circle"){
     	this.style.background = figureColor;
     	this.style.width = generateSize + "px";
	    this.style.height = generateSize + "px";

     } else if (arrFigures[rand] === "oval"){
     	this.style.background = figureColor;
     	this.style.width = generateSize + "px";
	    this.style.height = (generateSize/2) + "px";
	    this.style.borderRadius = generateSize / (generateSize/2)
     
     } else if (arrFigures[rand] === "triangle"){
     	this.style.borderLeft = (generateSize/2) + "px" + " solid" + " transparent";
     	this.style.borderRight = (generateSize/2) + "px" + " solid" + " transparent";
     	this.style.borderBottom = generateSize + "px" + " solid";
     	this.style.borderBottomColor =  figureColor;
     
     } else if (arrFigures[rand] === "triangle2"){
     	this.style.borderLeft = (generateSize/2) + "px" + " solid" + " transparent";
     	this.style.borderRight = (generateSize/2) + "px" + " solid" + " transparent";
     	this.style.borderTop = generateSize + "px" + " solid";
     	this.style.borderTopColor =  figureColor;

     } else if (arrFigures[rand] === "trapeze"){
     	this.style.borderLeft = (generateSize/2) + "px" + " solid" + " transparent";
     	this.style.borderRight = (generateSize/2) + "px" + " solid" + " transparent";
     	this.style.borderBottom = generateSize + "px" + " solid";
     	this.style.borderBottomColor =  figureColor;
     	this.style.width = generateSize + "px";   	
     
     } else if (arrFigures[rand] === "parallelogram"){
     	this.style.background = figureColor;
     	this.style.width = generateSize + (generateSize/2) + "px";
	    this.style.height = generateSize  + "px";
     }
     else if (arrFigures[rand] === "rectangle"){
     	this.style.background = figureColor;
     	 this.style.width = (generateSize/2)  + generateSize + "px";
	     this.style.height = generateSize  + "px";
     }
     console.log(figureColor);
     startTime = new Date().getTime();
	 })

	
 // })
