const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")

const locations = [
    {
        name: "Bangladesh",
        "button text" : ["Makan" , "Smart", "Mystery"],
        "button functions" : [goMakan, goSmart, goMystery],
        text: "Welcome back to the Akhtar Khan game"
    },
    
    {
    name : "makan",
    "button text" : ["Cumilla", "Chicken Fry", "Frozen Foods"],
    "button functions" : [goCumil, goChicken, goFrozen],
    text : "Where do you want to eat?"
   },

   {
    name : "SMART",
    "button text": ["Man", "Woman", "Cumilla"],
    "button functions" : [goMan, goWoman, goCumilla],
    text : "Who is the smart pipul?"
   },

   {
    name : "MYSTERY",
    "button text" : ["option1", "option2", "option3"],
    "button functions" : [go1, go2, go3],
    text : "Choose a mystery option"
   },

   {
    name : "Cumil",
    "button text" : ["Restart", "Restart", "Restart"],
    "button functions" : [res,res,res],
    text: "Warld femus food in Cumilla. Yummy yummy in your tummy !! Targal Targal"
   },

   {
    name : "Chicken",
    "button text" : ["Restart","Restart","Restart"],
    "button functions" : [res,res,res],
    text: "Chicken fry soooo good. Targal Targal "
   },

   {
    name : "Frozen",
    "button text" : ["Restart","Restart","Restart"],
    "button functions" : [res,res,res],
    text: "Cum here for frozen fud, Yummy Yummy in your Tummy !!"
   },

   {
    name : "man",
    "button text" : ["Restart","Restart","Restart"],
    "button functions" : [res,res,res],
    text: "Man is the man of smart pipul. I love man !"
   },

   {
    name : "Woman",
    "button text" : ["Restart","Restart","Restart"],
    "button functions" : [res,res,res],
    text: "Woman is the man of smart pipul. I love woman !"
   },

   {
    name : "Cumilla",
    "button text" : ["Restart","Restart","Restart"],
    "button functions" : [res,res,res],
    text: "Cumilla is the man of smart pipul. I love Cumilla !"
   },

   {
    name : "go1",
    "button text" : ["Restart","Restart","Restart"],
    "button functions" : [res,res,res],
    text: "Don't leave me beby, I feel sooooo pain. Come back, blocklist !!!!"
   },

   {
    name : "go2",
    "button text" : ["Restart","Restart","Restart"],
    "button functions" : [res,res,res],
    text: "Your attitude like my shoes. Very costly but always under my feet !!"
   },

   {
    name : "go3",
    "button text" : ["Restart","Restart","Restart"],
    "button functions" : [res,res,res],
    text: "This is Canada. No baby, this is North Korea !!"
   }
]


button1.onclick = goMakan;
button2.onclick = goSmart;
button3.onclick = goMystery;

function update(locations){
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
	button3.innerText = locations["button text"][2];
	button1.onclick = locations["button functions"][0];
	button2.onclick = locations["button functions"][1];
	button3.onclick = locations["button functions"][2];
    text.innerText = locations.text;    
}


function goMakan(){
    update(locations[1]);
}

function goSmart(){
    update(locations[2]);
}

function goMystery(){
    update(locations[3]);
}

function goCumil(){
   update(locations[4]);
}

function goChicken(){
    update(locations[5]);
}

function goFrozen(){
    update(locations[6]);
}

function goMan(){
    update(locations[7]);
}

function goWoman(){
    update(locations[8]);
}

function goCumilla(){
    update(locations[9]);
}


function go1(){
    update(locations[10]);
}

function go2(){
    update(locations[11]);
}

function go3(){
   update(locations[12]);
}

function res(){
  update(locations[0]);
}