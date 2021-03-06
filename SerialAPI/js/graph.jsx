import React from "react";
let Chart = require('chart.js');

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.options = {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6','7','8','9','10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                datasets: [{
                    label: this.props.title,
                    borderColor: 'rgba(00, 188, 212, 1.0)',
                    data: [
                        this.props.data
                    ],
                    fill: false
                }]
            },
            options: {
                animation: {
                    easing: "linear",
                    duration: 0
                },
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: this.props.title,
                    fontSize: 20
                },
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        type: "linear",
                        display: true,
                        position: "left",
                        scaleLabel: {
                            display: true,
                            labelString: this.props.label
                        }
                    }]
                },
                responsive: true
            }
        };
    }

    componentDidMount() {
        this.options.data.datasets.data = this.props.data;
        this.canvas = document.getElementById(this.props.id);
        this.ctx = this.canvas.getContext('2d');
        this.chart = new Chart(this.ctx, this.options)
    }

    componentDidUpdate() {
        this.chart.data.datasets.forEach((dataset) => {
            dataset.data = this.props.data
        });
        this.chart.update();
    }

    render() {
        return (
            <span className="graph-container">
                <canvas id={this.props.id}/>
            </span>
        )
    }
}

export default Graph
