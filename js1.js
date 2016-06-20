var x= parseInt(prompt("Ingrese un numero"));
var y= parseInt(prompt("Ingrese segundo numero"));
var z= parseInt(prompt("Ingrese tercer numero"));
function menor(x, y, z)
{
	var menor=0;

	if(x<y && x<z)
	{
		alert("El menor es "+ x)

	}
	else
	{
		if(y<x && y<z)
		{
			alert("el menor es" +y);
		}
		else
		{
			alert("El menor es"+ z);
		}
	}
}

menor(x, y, z);