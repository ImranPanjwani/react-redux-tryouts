import React, { Component} from 'react';

// class based component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchString : '' };
    }
    render() {
        return (
            <div className='search-bar'>
                <input
                    value={this.state.searchString} 
                    onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    onInputChange(searchString) {
        this.setState({ searchString });
        this.props.onVideoSearch(searchString);
    }
}

export default SearchBar;