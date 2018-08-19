/*function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState=="4" && xhr.status==200){
			callback(xhr.responseText);
		}
	}
	xhr.send(null);
}
json("javascript.json",function(text){
	let d=JSON.parse(text);
	console.log(d);
	carr(d.carrier);
	cheith(d.basicdetails);
	edu(d.education);
	techskills(d.skills);
	achieve(d.achievements);
	desc(d.description);
})*/

//fetch API
 fetch("javascript.json")
 .then(function(response){
 	return response.json();
 })
 .then(function(d){
 	console.log(d);
 	cheith(d.basicdetails);
	edu(d.education);
	techskills(d.skills);
	achieve(d.achievements);
	desc(d.description);
 })

var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function cheith(CSE){

var i=document.createElement("img");
i.src=CSE.image;
i.alt="profile photo";
l.appendChild(i);
var num=document.createElement("h3");
num.textContent=CSE.name;
l.appendChild(num);
var nam=document.createElement("h3");
nam.textContent=CSE.phone;
l.appendChild(nam);
var mail=document.createElement("h3");
mail.textContent=CSE.Email;
l.appendChild(mail);
var address=document.createElement("h3");
address.textContent=CSE.address;
l.appendChild(address);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(e){
   var e1=document.createElement("div");
   e1.classList.add("educa");
   r.appendChild(e1);
      var head=document.createElement("h4")
      head.textContent="Education Details";
      e1.appendChild(head);
      head.appendChild(document.createElement("HR"));
      for(var i=0;i<e.length;i++){
      			var h=document.createElement("h3");
      	      	h.textContent=e[i].course;
      	      	e1.appendChild(h);
      	      	var m=document.createElement("h3");
      	      	e1.appendChild(m);
      	      	var list=document.createElement("li");
      	      	list.textContent=e[i].college;
      	      	m.appendChild(list);
      	      	var list1=document.createElement("li");
      	      	list1.textContent=e[i].percentage;
      	      	list.appendChild(list1);


      }
}
function techskills(s){
	var d=document.createElement("div");
	d.textContent="Skill Set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for(var i=0;i<s.length;i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carr(car){
	var ca1=document.createElement("div");
	r.appendChild(ca1)
	var h1=document.createElement("h1");
	h1.textContent="carrier objective",
	ca1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=car.ca;
	ca1.appendChild(para);
}
function achieve(ach){
	var d=document.createElement("div");
	d.setAttribute("id","achievements");
	r.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Achievements";
	d.appendChild(h);
	h.appendChild(document.createElement("HR"));
	for(i in ach){
		var u=document.createElement("ul");
		d.appendChild(u);
		var list=document.createElement("li");
		list.textContent=ach[i];
	}	u.appendChild(list);
}
	function desc(D){
	var ca1=document.createElement("div");
	r.appendChild(ca1)
	var h1=document.createElement("h1");
	h1.textContent="description";
	ca1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=D.des;
	ca1.appendChild(para);

}
