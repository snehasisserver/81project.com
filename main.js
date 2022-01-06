canvas = document.getElementById("thecanva");
ctx = canvas.getContext("2d");

function display(){
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=5;
    ctx.arc(280,200,60,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=5;
    ctx.arc(425,200,60,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=5;
    ctx.arc(570,200,60,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=5;
    ctx.arc(350,250,60,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=5;
    ctx.arc(500,250,60,0,2*Math.PI);
    ctx.stroke();

    console.log();
}


