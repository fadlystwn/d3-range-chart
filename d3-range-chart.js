const d3 = window.d3;

function legend(element, data, options) {
  const margin = { top: 8, right: 8, bottom: 8, left: 8 };
  const tickerRatio =
    (options.blockWidth / options.tickerStep) * options.tickerValue;

  const color = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.key))
    .range(data.map((d) => d.color));

  const svg = d3
    .select(element)
    .attr("width", data.length * options.frameWidth)
    .attr("height", options.frameHeight)
    .style("font", "10px sans-serif")
    .style("margin-top", `${margin.top}px`)
    .style("margin-left", `${margin.left}px`)
    .style("display", "block")
    .attr("text-anchor", "middle");

  const g = svg
    .append("g")
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", (d, i) => `translate(${i * options.blockWidth},0)`);

  const toolTip = svg
    .append("g")
    .attr("width", "66")
    .attr("height", "26")
    .attr("transform", `translate(${tickerRatio}, 28)`);

  if (options.toolTip) {
    toolTip
      .append("rect")
      .attr("y", "9")
      .attr("width", "66")
      .attr("height", "18")
      .attr("fill", "black");

    toolTip
      .append("path")
      .attr("d", "M-4.12953e-07 0L9 9H0L-4.12953e-07 0Z")
      .attr("fill", "black");

    toolTip
      .append("text")
      .text(options.tooltTipText)
      .attr("fill", "#FFF")
      .attr("transform", `translate(35, 22)`);
  }
  const tickerTop = svg
    .append("g")
    .attr("transform", `translate(${tickerRatio}, 10)`)
    .attr("x", 0)
    .attr("y", 10);

  if (options.tickerTop) {
    tickerTop
      .append("line")
      .attr("x1", "0.5")
      .attr("x2", "0.5")
      .attr("y1", 10)
      .attr("y2", 30)
      .attr("marker-start", "url(#arrowhead)")
      .attr("stroke", "black");
  }
  if (options.topTickerText) {
    tickerTop
      .append("text")
      .attr("transform", `translate(${tickerRatio}, 10)`)
      .text(options.topTickerText);
  }

  const tickerBottom = svg
    .append("g")
    .attr("transform", `translate(${options.tickerBottomPosition}, 10)`)
    .attr("x", 0)
    .attr("y", 24);

  const marker = tickerBottom
    .append("defs")
    .append("marker")
    .attr("id", "arrowhead")
    .attr("markerWidth", 10)
    .attr("markerHeight", 7)
    .attr("refX", 0)
    .attr("refY", 3.5)
    .attr("orient", "auto");

  marker.append("polygon").attr("points", "0 0, 10 3.5, 0 7");

  if (options.BottomTicker) {
    tickerBottom
      .append("line")
      .attr("x1", "0.5")
      .attr("x2", "0.5")
      .attr("y1", 10)
      .attr("y2", 30)
      .attr("marker-start", "url(#arrowhead)")
      .attr("stroke", "black");
  }

  if (options.BottomTickerText)
    tickerBottom
      .append("text")
      .attr(
        "transform",
        `translate(${tickerRatio}, ${options.bottomTickerTextY})`
      )
      .text(options.BottomTickerText);

  g.append("text")
    .style("font", "8px sans-serif")
    .attr("x", options.labelPosition ? options.labelPosition.x : 0)
    .attr("y", options.labelPosition ? options.labelPosition.y : 0)
    .text((d, i) => data[i].bottom);

  g.append("rect")
    .attr(
      "width",
      options.blockSpacing
        ? options.blockWidth - options.blockSpacing
        : options.blockWidth
    )
    .attr("height", options.blockHeight)
    .attr("y", options.blockPosition ? options.blockPosition.y : 0)
    .attr("x", options.blockPosition ? options.blockPosition.x : 0)
    .attr("fill", (d) => color(d.key));

  g.append("text")
    .attr("x", options.textPosition ? options.textPosition.x : 0)
    .attr("y", options.textPosition ? options.textPosition.y : 0)
    .attr("fill", options.blockTextColor)
    .text((d) => d.key);

  return svg.node();
}

const vitaminData = [
  { key: 20, bottom: "TOO LOW", color: "#dc4437" },
  { key: [20, 40], bottom: "BORDERLINE", color: "#f5b400", active: 24.75 },
  { key: [40, 100], bottom: "NORMAL", color: "#109d58" },
  { key: [100], bottom: "HIGH", color: "#dc4437" }
];
const bloodRangeData = [
  { key: "", bottom: "", color: "#dc4437" },
  { key: "1.25", bottom: "7", color: "#109D58" },
  { key: "180", bottom: "6", color: "#F5B400" }
];

const BloodSugarData = [
  { key: "<60", bottom: "LOW", color: "#dc4437" },
  { key: "60-100", bottom: "NORMAL", color: "#109D58" },
  { key: ">100", bottom: "HIGH", color: "#dc4437" }
];

const liquidProfileData = [
  { key: "<60", color: "#dc4437" },
  { key: "60-100", color: "#109D58" },
  { key: ">100", color: "#dc4437" }
];

const vitaminOptions = {
  frameWidth: 150,
  frameHeight: 80,
  blockWidth: 80,
  blockHeight: 18,
  blockSpacing: 3,
  blockPosition: { x: 0, y: 10 },
  labelPosition: { x: 21, y: 8 },
  textPosition: { x: 16, y: 21 },
  tickerStep: 20,
  tickerValue: 24.75,
  blockTextColor: "#FFF",
  toolTip: true,
  tooltTipText: "YOU 24.75"
};

const bloodRangeOptions = {
  frameWidth: 150,
  frameHeight: 80,
  blockWidth: 145,
  blockHeight: 10,
  blockTextColor: "#FFF",
  tickerTop: true,
  bottomTickerTextY: 50,
  BottomTickerText: "YOU 24.75"
};

const bloodSugarOptions = {
  frameWidth: 128,
  frameHeight: 48,
  blockWidth: 80,
  blockHeight: 16,
  blockSpacing: 2,
  blockPosition: { x: 0, y: 10 },
  labelPosition: { x: 16, y: 8 },
  textPosition: { x: 16, y: 21 }
};

const liquidProfileOptions = {
  frameWidth: 128,
  frameHeight: 24,
  blockWidth: 120,
  blockHeight: 8,
  blockSpacing: 4,
  blockPotition: 4,
  textPosition: { x: 12, y: 8 }
};

window.addEventListener(
  "load",
  legend("#vitamin", vitaminData, vitaminOptions)
);

window.addEventListener(
  "load",
  legend("#bloodRange", bloodRangeData, bloodRangeOptions)
);
window.addEventListener(
  "load",
  legend("#bloodSugar", BloodSugarData, bloodSugarOptions)
);

// LIQUID PROFILE
window.addEventListener(
  "load",
  legend("#liquidProfile01", liquidProfileData, liquidProfileOptions)
);

window.addEventListener(
  "load",
  legend("#liquidProfile02", liquidProfileData, liquidProfileOptions)
);

window.addEventListener(
  "load",
  legend("#liquidProfile03", liquidProfileData, liquidProfileOptions)
);

window.addEventListener(
  "load",
  legend("#liquidProfile04", liquidProfileData, liquidProfileOptions)
);

window.addEventListener(
  "load",
  legend("#liquidProfile05", liquidProfileData, liquidProfileOptions)
);
