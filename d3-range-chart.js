const d3 = window.d3;

export function legend(element, data, options) {
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
