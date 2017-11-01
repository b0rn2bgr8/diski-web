import React, {Component} from 'react';
import FixtureList from './fixtureList';

class FixtureListContainer extends Component{
    render(){
        return(
            <FixtureList fixtures={this.props.fixtures} />
        )
    }
}

export default FixtureListContainer;