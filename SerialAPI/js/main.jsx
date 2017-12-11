import React from 'react';
import PropTypes from 'prop-types';
import Feed from './feed';
import ReactDOM from "react-dom";

class MainFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds: []
        };
    }

    componentDidMount() {
        fetch(this.props.url, { credentials: 'same-origin' })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then((data) => {
                this.setState({
                    feeds: data.feeds
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className='feed-container'>
                {this.state.feeds.map(feed => (
                    <Feed url={feed.url} heading={feed.heading} key={feed.key} unit={feed.unit}/>
                ))}
            </div>
        );
    }
}

MainFeed.propTypes = {
    url: PropTypes.string.isRequired,
};

ReactDOM.render(
    <MainFeed url='/api/' />,
    document.getElementById('main-feed'),
);