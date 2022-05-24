const canvas = d3.select("#canvas");

const width = 1000;
const height = 1000;
const margin = { top: 20, left: 60, bottom: 50, right: 20 };
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top - margin.bottom;
const url =
  "https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json";

const svgG1 = canvas.append("svg");

svgG1.attr("width", width);
svgG1.attr("height", height);

let g = svgG1
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

d3.json(url).then((data) => {
  const maxPopulation = Math.max.apply(
    null,
    [data.map((d) => parseFloat(d.value))][0]
  );
  const x = d3.scaleLinear().domain([0, maxPopulation]).range([0, iheight]);

  const y = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, iwidth])
    .padding(0.1);

  g.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x))
    .attr("transform", `translate(10, ${iheight})`);

  g.append("g").classed("y--axis", true).call(d3.axisLeft(y));

  const bars = g.selectAll("rect").data(data);

  bars
    .enter()
    .append("rect")
    .attr("class", "bar")
    .style("fill", "red")
    .attr("x", 10)
    .attr("y", (d) => y(d.name))
    .attr("width", (d) => d.value / 1000)
    .attr("height", y.bandwidth());
});

const urlV2 =
  "https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json";

const svgG2 = canvas.append("svg");

svgG2.attr("width", width);
svgG2.attr("height", height);

let gv2 = svgG2
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

d3.json(urlV2).then((data) => {
  console.log(data);

  const maxPurchasingPower = Math.max.apply(
    null,
    [data.map((d) => parseFloat(d.purchasingpower))][0]
  );
  const xV2 = d3
    .scaleLinear()
    .domain([0, maxPurchasingPower])
    .range([0, iheight]);

  gv2
    .append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(xV2))
    .attr("transform", `translate(10, ${iheight})`);

  const maxLifeExpectancy = Math.max.apply(
    null,
    [data.map((d) => parseFloat(d.lifeexpectancy))][0]
  );
  const yV2 = d3
    .scaleLinear()
    .domain([0, maxLifeExpectancy])
    .range([iheight, 0]);

  gv2.append("g").classed("y--axis", true).call(d3.axisLeft(yV2));

  var node = gv2.selectAll(".node").data(data);

  node
    .enter()
    .append("circle")
    .attr("id", (d) => d.country)
    .attr("r", (d) => d.population / 2000000)
    .style("fill", "red")
    .attr("cx", (d) => d.purchasingpower / 50)
    .attr("cy", (d) => d.lifeexpectancy * 5);
});
