var delay=2000 //set delay in miliseconds
var curindex=0

var randomimages=new Array()

	randomimages[0]="https://images.pexels.com/photos/2255903/pexels-photo-2255903.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"
	randomimages[1]="https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"
	randomimages[2]="https://images.pexels.com/photos/1143489/pexels-photo-1143489.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"

var preload=new Array()

for (n=0;n<randomimages.length;n++)
{
	preload[n]=new Image()
	preload[n].src=randomimages[n]
}

//document.write('<img name="defaultimage" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')

function rotateimage()
{

if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
curindex=curindex==0? 1 : curindex-1
}
else
curindex=tempindex

	document.getElementById('ri').src=randomimages[curindex]
}

setInterval("rotateimage()",delay)