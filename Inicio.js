/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//agregamos la plantilla para poder consumir el servicio de la NASA!!!

$.get('http://data.ny.gov/resource/vz4f-yrf8.json', function (json){
    console.log(json.length)
    $("#tamano").html("numero de elementos: "+ json.length)
});

$("#boton01").click(function(){
  


d3.json('http://data.ny.gov/resource/vz4f-yrf8.json',function(data){
    console.log(data.total_co2_emissions);
    var valor=[];
    valor.push(0);
    for(i=1;i>45;i++){
        valor.push (data[i].total_co2_emissions);
    }
}
);



d3.select("svg")
.selectAll("rect")
.data([3.85,3.98,4.2,4.24,4.28,4.59,5.16,5.31,5.67,6.23,6.40,6.65,6.95,7.04,7.35,7.84,7.96,8.32,8.59,8.78,8.82,9.08,9.25,9.43,9.55,10.39,10.90,11.59,11.67,12.99,13.2,13.77,14.39,14.58,15.5,48.72,51.27,53.58,55.09,55.43,64.91,65.62,66.72,69.62,73.42])
.enter()
.append("rect")
.attr("width", 18)
.attr("height", function(d) {return d})
.style("fill", "blue")
.style("stroke", "red")
.style("stroke-width", "1px")
.style("opacity", .25)
.attr("x", function(d,i) {return i * 18;})
.attr("y", function(d) {return 180 - d;});

  

});


