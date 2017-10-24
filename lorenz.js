/*lorenz attractor*/

/*
The lorenz attractor was first studied by Ed N. Lorenz, a meterologist, around 1963.
It was derived from a simplified model of convection in the earths atmosphere.
It also arises naturally in models of lasers and dynamos. 
The system is most commonly expressed as 3 coupled non-linear differential equations.

dx / dt = a (y - x)
dy / dt = x (b - z) - y
dz / dt = xy - c z

One commonly used set of constants is a = 10, b = 28, c = 8 / 3. 
Another is a = 28, b = 46.92, c = 4. 
"a" is sometimes known as the Prandtl number and "b" the Rayleigh number.
*/

var x_1 =0.1;
var y_1 =0;
var z_1 =0;
var x_2;
var y_2;
var z_2;
var  a =10.0;
var b =28.0;
var c =8.0/3.0;
var h = 0.01;

inlets= 4;
outlets=3;

if(jsarguments.length>1) // argument 0 is the name of the js file
{
	a = jsarguments[1];
}
if(jsarguments.length>2) 
{
	b = jsarguments[2];
}
if(jsarguments.length>3) 
{
	c = jsarguments[3];
}

function msg_float(x) {
	if (inlet == 0) a = x;
	if (inlet == 1) b = x;
	if (inlet == 2) c = x;
	if (inlet == 3) h = x;
}

function bang() {

	x_2 = x_1 + h * a * (y_1 - x_1);
	y_2 = y_1 + h * (x_1 * (b - z_1) - y_1);
	z_2 = z_1 + h * (x_1 * y_1 - c * z_1);
	outlet(0, x_2);
	outlet(1, y_2);
	outlet(2, z_2);
	x_1 = x_2;
	y_1 = y_2;
	z_1 = z_2;
}