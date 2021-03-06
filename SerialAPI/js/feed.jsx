import React from 'react'
import PropTypes from 'prop-types'
import Graph from './graph';

class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            chartData: [],
            label: "",
        }
    }

    componentDidMount() {
        this.update();
        this.timerID = setInterval(
            () => this.update(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    update() {
        fetch(this.props.url, { credentials: 'same-origin'})
            .then((response) => {
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            })

            .then((data) => {
                let temp = [];
                if (this.state.chartData.length >= 20) {
                    temp = this.state.chartData.slice(1);
                } else {
                    temp = this.state.chartData;
                }
                temp.push(data.value);

                this.setState({
                    value: data.value,
                    chartData: temp,
                    unit: data.unit
                });
            })
            .catch(error => console.log(error));
    }

    render() {

        return (
            <div className="tile">
                <h1 className="display-header">{this.props.heading}</h1>
                <div className="info-container">
                    <span className="value-display">{this.state.value} {this.props.unit}</span>
                    <Graph id={this.props.heading} data={this.state.chartData} title={this.props.heading} label={this.state.label}/>
                </div>
            </div>
        );
    }
}

Feed.propTypes = {
    url: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
};

export default Feed;