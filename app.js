// Create variable function
function init() {
  d3.json("../data/samples.json").then(function (samples) {
    //console.log(samples);

    // Create a variable that holds the samples array.
    let samplesArray = samples.names;
    console.log(samplesArray);

    let selecttag = d3.select("#selDataset");

    for (id of samplesArray) {
      selecttag.append("option").text(id).property("value", id);
    }
  });
}
init();

//console.log(samplesArray.length);
var counter;

function optionChanged(sampleID) {
  d3.json("../data/samples.json").then(function (data) {
    let samplesALL = data.samples;
    let filteredsample = samplesALL.filter((index) => index.id == sampleID)[0];
    console.log(filteredsample);
    var otu_id = filteredsample.otu_ids;
    var otu_label = filteredsample.otu_labels;
    var sample_value = filteredsample.sample_values;
    var graphdata = [
      {
        type: "bar",
        x: sample_value.slice(0, 10).reverse(),
        y: otu_id.slice(0, 10).reverse(),
        orientation: "h",
      },
    ];

    Plotly.newPlot("bar", graphdata);

    var trace1 = {
      x: otu_id,
      y: sample_value,
      text: otu_label,
      mode: "markers",
      marker: { color: otu_id, size: sample_value },
    };

    var bubbledata = [trace1];

    var layout = {
      title: "Marker Size",
      showlegend: false,
      height: 600,
      width: 600,
    };

    Plotly.newPlot("bubble", bubbledata, layout);
  });
}

// 1. Create a variable that filters the metadata array for the object with the desired sample number.
// 2. Create variables that hold the otu_ids, otu_labels, and sample_values.

// 3. Create a variable that holds the washing frequency.

// 4. Create the yticks for the bar chart.

// 5. Use Plotly to plot the bar data and layout.

// 6. Use Plotly to plot the bubble data and layout.
