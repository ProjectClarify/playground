import { LitElement, css, html, property, customElement } from 'lit-element';

import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

interface FeedbackDataItem {
  label: string,
  value: number
}

// This element is *not* connected to the Redux store.
@customElement('feedback-radar')
export class FeedbackRadar extends LitElement {

  @property({ type: Number })
  radius = 5;

  @property({ type: Number })
  height = 600;

  @property({ type: Number })
  width = 600;

  @property({ type: Number })
  factor = 1;

  @property({ type: Number })
  factorLegend = 0.85;

  @property({ type: Number })
  levels = 3;

  @property({ type: Number })
  maxValue = 0;

  @property({ type: Number })
  radians = 2 * Math.PI;

  @property({ type: Number })
  opacityArea = 0.5;

  @property({ type: Number })
  toRight = 5;

  @property({ type: Number })
  translateX = 80;

  @property({ type: Number })
  translateY = 30;

  @property({ type: Number })
  extraWidthX = 100;

  @property({ type: Number })
  extraWidthY = 100;

  @property({ type: Number })
  //color = d3.scale.category10();
  color = 1; /* todo: these should be given by label type model */

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`

        .feedback-card {
            border-radius: 10px;
            background-color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            max-width: 400px;
            max-height: 400px;
            height: 80vw;
            width: 80vw;
        }

        .feedback-legend {
          position: relative;
          width: 120px;
          top: 10px;
          left: 10px;
        }

        .feedback-legend-icon-current, .feedback-legend-icon-target {
          height: 14.8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .feedback-legend-icon-current > svg > circle {
          fill: #f1c232ff;
        }

        .feedback-legend-icon-target > svg > circle {
          fill: var(--app-primary-color);
        }

        .feedback-legend {
        }

        .feedback-legend-item {
          display: flex;
          flex-direction: row;
        }

        .feedback-legend-item-text {
          margin-left: 10px;
          color: black;
          font-size: 10px;
          font-weight: 100;
        }

        .feedback-viz {
            fill: #242424;
            text-align: center;
            cursor: default;
        }

        .feedback-viz-tooltip {
            fill: #333333;
        }
      
      `];
  }

  renderSmallCircle() {
    return html`
      <svg width="8" height="8" viewbox="0 0 8 8">
        <circle cx="4" cy="4" r="4" fill="white" />
      </svg>
    `
  }

  drawRadarChart(){

    let current = [{label:"Flow", value:0.59},
                   {label:"Confidence", value:0.56},
                   {label:"Kindness", value:0.42},
                   {label:"Focus", value:0.34},
                   {label:"Calm", value:0.48},
                   {label:"Happiness", value:0.56}];

    let target = [{label:"Flow", value:0.95},
                  {label:"Confidence", value:0.68},
                  {label:"Kindness", value:0.55},
                  {label:"Focus", value:0.52},
                  {label:"Calm", value:0.62},
                  {label:"Happiness", value:0.72}];

    this.drawRadarChartGivenData(current, target);

  }

  drawRadarChartGivenData(currentLabels: Array<FeedbackDataItem>,
                          targetLabels: Array<FeedbackDataItem>) {

    /*

    TODO:
    1. Avoid drawing duplicate labels, assume both data structures have the same.
      - possibly by creating a static structure state object with only a certain set of labels.


    var svg = d3.select(this.shadowRoot!.querySelector("#dataviz"));
    var circle = svg.selectAll("circle");
    circle.style("fill", "steelblue");
    circle.attr("r", 30);

    */

    let vizId = "#feedback-viz";
    //let legendId = "#feedback-legend";
    let radians = this.radians;
    let factor = this.factor;
    let height = this.height;
    let width = this.width;
    let levels = this.levels;
    let factorLegend = this.factorLegend;

    /*

    // Get the maximum data item .value
    let allData = [currentLabels, targetLabels];
	this.maxValue = Math.max(this.maxValue, 
                             d3.max(allData, function(i: any){
                                 return d3.max(i.map(
                                     function(o: any){return o.value;}
                                     ));
                                 });
                            );

	let labels = (currentLabels.map(function(i){return i.label}));
    let total = labels.length;
	let radius = this.factor * Math.min(this.width / 2, this.height / 2);
	let Format = d3.format('%');

	let tooltip;

    // Remove any existing <svg> element
	d3.select(vizId).select("svg").remove();

    // Establish an <svg> element of the desired dimensions and positioning
	var g = d3.select(vizId)
			  .append("svg")
			  .attr("width", width + this.extraWidthX)
			  .attr("height", height + this.extraWidthY)
			  .append("g")
			  .attr("transform", "translate(" + this.translateX + "," + this.translateY + ")");

	// Circular segments
	for ( let j = 0; j < levels - 1; j++ ) {

	  let levelFactor = factor * radius * ((j+1) / levels);

      let translateW = (width / 2 - levelFactor);
      let translateH = (height / 2 - levelFactor)

      let getLevelX1 = function(d: any, i: number){
          return levelFactor * (1 - factor * Math.sin(i * radians / total));};

      let getLevelY1 = function(d: any, i: number){
          return levelFactor * (1 - factor * Math.cos(i * radians / total));};

      let getLevelX2 = function(d: any, i: number){
          return levelFactor * (1 - factor * Math.sin( (i + 1) * radians / total));};

      let getLevelY2 = function(d: any, i: number){
          return levelFactor * (1 - factor * Math.cos( (i + 1) * radians / total));};

	  g.selectAll(".levels")
	   .data(labels)
	   .enter()
	   .append("svg:line")
	   .attr("x1", getLevelX1)
	   .attr("y1", getLevelY1)
	   .attr("x2", getLevelX2)
	   .attr("y2", getLevelY2)
	   .attr("class", "line")
	   .style("stroke", "grey")
	   .style("stroke-opacity", "0.75")
	   .style("stroke-width", "0.3px")
	   .attr("transform", "translate(" + translateW + ", " + translateH + ")");
	}

	// Text indicating at what % each level is
	for (let j = 0; j < levels; j++) {

	  var levelFactor = factor * radius * ((j + 1) / levels);
      let translateW = (width / 2 - levelFactor + this.toRight);
      let translateH = (height / 2 - levelFactor);
      let dummySin = levelFactor * (1 - factor * Math.sin(0));
      let dummyCos = levelFactor * (1 - factor * Math.cos(0));

	  g.selectAll(".levels")
	   .data([1]) //dummy data
	   .enter()
	   .append("svg:text")
	   .attr("x", function(d: any){return dummySin;})
	   .attr("y", function(d: any){return dummyCos;})
	   .attr("class", "legend")
	   .style("font-family", "sans-serif")
	   .style("font-size", "10px")
	   .attr("transform", "translate(" + translateW + ", " + translateH + ")")
	   .attr("fill", "#737373")
	   .text(Format((j+1) * this.maxValue / levels));
	}
	
	let series = 0;

	var axis = g.selectAll(".axis")
			.data(labels)
			.enter()
			.append("g")
			.attr("class", "axis");

    let getLineTerminusX = function(d: any, i: number){
        return width / 2*(1 - factor * Math.sin(i * radians/total));
    }

    let getLineTerminusY = function(d: any, i: number){
        return height / 2*(1 - factor * Math.cos(i * radians/total));
    }

	axis.append("line")
		.attr("x1", width / 2)
		.attr("y1", height / 2)
		.attr("x2", getLineTerminusX)
		.attr("y2", getLineTerminusY)
		.attr("class", "line")
		.style("stroke", "grey")
		.style("stroke-width", "1px");

    let getTextX = function(d: any, i: number){
        let partA = factorLegend * Math.sin(i * radians / total);
        let partB = 60 * Math.sin(i * radians / total);
        return width / 2 * (1 - partA - partB);
    };

    let getTextY = function(d: any, i: number){
        let partA = Math.cos(i * radians/total);
        let partB = 20 * Math.cos(i * radians/total);
        return height / 2 * (1 - partA - partB);
    };

	axis.append("text")
		.attr("class", "legend")
		.text(function(d){return d})
		.style("font-family", "sans-serif")
		.style("font-size", "11px")
		.attr("text-anchor", "middle")
		.attr("dy", "1.5em")
		.attr("transform", function(d, i){return "translate(0, -10)"})
		.attr("x", getTextX)
		.attr("y", getTextY);

    */

  }

  protected render() {
    return html`

      <div class="feedback-card">

        <div class="feedback-legend">
          <div class="feedback-legend-item"><div class="feedback-legend-icon-current">${this.renderSmallCircle()}</div><div class="feedback-legend-item-text">Current</div></div>
          <div class="feedback-legend-item"><div class="feedback-legend-icon-target">${this.renderSmallCircle()}</div><div class="feedback-legend-item-text">Goal</div></div>
        </div>

        <div class="feedback-viz"></div>        

    `;
  }
}
