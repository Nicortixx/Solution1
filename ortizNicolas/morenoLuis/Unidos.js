let datosX = [];
let datosY = [];
let datosX1 = [];
let datosY1 = [];
for (let valX = -3; valX <=3; valX +=0.01)
{
	datosX.push(valX);
	datosY.push(Math.pow(2.7182,valX));
	datosX1.push(valX);
	datosY1.push(Math.pow(2.7182,-valX));
}
let parabola =
{
	x:datosX,
	y:datosY,
	type: 'scatter'
}
let parabola1 =
{
	x:datosX1,
	y: datosY1,
	type: 'scatter'
}
 let layout = {
	title: 'Funciones Exponenciales',
	xaxis: {
		title: 'x'
	},
	yaxis: {
		title: 'y'
	},
	showlegend: true
}
let contenedor = document.getElementById("Grafico");
//console.log(contenedor)
Plotly.newPlot(contenedor, [parabola, parabola1], layout);