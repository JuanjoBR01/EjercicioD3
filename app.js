const canvas = d3.select("#canvas");

/*const ul = canvas.append("ul");

const data = [
  {
    name: "Juan",
    age: 7,
  },
  {
    name: "María",
    age: 9,
  },
  {
    name: "Mafe",
    age: 12,
  },
  {
    name: "CR7",
    age: 37,
  },
];

//data.forEach(d=> ul.append("li").text(d.name));
const li = ul.selectAll("li").data(data);

li.enter()
  .append("li")
  .text((d) => d.name);
  
  const svg = canvas.append("svg");

  svg.attr("width", 800);
svg.attr("height", 800);

svg
.append("rect")
.attr("x", 10)
.attr("y", 10)
  .attr("width", 100)
  .attr("height", 100)
  .style("fill", "red");
  
*/

/*const data = [
  { name: "Cristiano", age: 3 },
  { name: "Messi", age: 39 },
  { name: "Mbappé", age: 7 },
  { name: "Haaland", age: 35 },
  { name: "De Bruyne", age: 10 },
  { name: "Buffon", age: 16 },
  { name: "Neymar", age: 45 },
  { name: "Cristiano1", age: 3 },
  { name: "Messi1", age: 39 },
  { name: "Mbappé1", age: 7 },
  { name: "Haaland1", age: 35 },
  { name: "De1 Bruyne", age: 10 },
  { name: "Buffon1", age: 16 },
  { name: "Neymar1", age: 45 },
];

const height = 600;
const width = 1200;

const margin = { top: 10, bottom: 40, left: 50, right: 10 };
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top - margin.bottom;

const svg = canvas.append("svg");
svg.attr("width", width);
svg.attr("height", height);

let g = svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const y = d3.scaleLinear().domain([0, 40]).range([iheight, 0]);

const x = d3
  .scaleBand()
  .domain(data.map((d) => d.name))
  .range([0, iwidth])
  .padding(0.1);

const bars = g.selectAll("rect").data(data);

bars
  .enter()
  .append("rect")
  .attr("class", "bar")
  .style("fill", "red")
  .attr("x", (d) => x(d.name))
  .attr("y", (d) => y(d.age))
  .attr("height", (d) => iheight - y(d.age))
  .attr("width", x.bandwidth());

g.append("g")
  .classed("x--axis", true)
  .call(d3.axisBottom(x))
  .attr("transform", `translate(0, ${iheight})`);

g.append("g").classed("y--axis", true).call(d3.axisLeft(y));
*/