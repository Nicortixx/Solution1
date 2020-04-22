let datosX = [];
let datosY = [];
for (let valX = -5; valX <=5; valX +=0.01)
{
	datosX.push(valX);
	datosY.push(2*valX - 4);
}
let recta =
{
	x:datosX,
	y: datosY,
	type: 'scatter'
}
 let layout = {
	title: 'Funcion 1',
	xaxis: {
		title: 'x'
	},
	yaxis: {
		title: 'y'
	},
	showlegend: false
}
let contenedor = document.getElementById("Grafico");
Plotly.newPlot(contenedor, [recta], layout);

let datosX1 = [];
let datosY1 = [];
for (let valX1 = -4; valX1 <=4; valX1 +=0.01)
{
	datosX1.push(valX1);
	datosY1.push(6*(valX1*valX1) - 3*valX1 - 8);
}
let parabola1 =
{
	x:datosX1,
	y: datosY1,
	type: 'scatter'
}
 let layout1 = {
	title: 'Funcion 1',
	xaxis: {
		title: 'x'
	},
	yaxis: {
		title: 'y'
	},
	showlegend: false
}
let contenedor1 = document.getElementById("Grafico1");
Plotly.newPlot(contenedor1, [parabola1], layout1);

let datosX2 = [];
let datosY2 = [];
for (let valX2 = -7; valX2 <=7; valX2 +=0.01)
{
	datosX2.push(valX2);
	datosY2.push(Math.sin(valX2));
}
let parabola2 =
{
	x:datosX2,
	y: datosY2,
	type: 'scatter'
}

	let layout2 = {
	title: 'Funcion 2',
	xaxis: {
		title: 'x'
	},
	yaxis: {
		title: 'y'
	},
    showlegend: false
}
let contenedor2 = document.getElementById("Grafico2");
Plotly.newPlot(contenedor2, [parabola2], layout2);