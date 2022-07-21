

let eles=["sonam kumari","sangeeta paswan","anjali kumari","sapna panday","rajeev","suraj","sanjana jha","shubhasini maurya","pooja rani","anita"]
update();

function update() {
var j = Math.floor(Math.random()* eles.length);

document.getElementById("firstPerson").innerHTML = eles[j];

j = Math.floor(Math.random()* eles.length);

document.getElementById("secondPerson").innerHTML = eles[j];
}