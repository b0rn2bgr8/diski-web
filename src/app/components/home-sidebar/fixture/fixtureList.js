import React, {Component} from 'react';
import List from 'material-ui/List';
import FixtureListItem from './fixtureListItem';

class FixtureList extends Component{
    render(){
        return(
            <List>
                {
                    this.props.fixtures.map(item=>{
                       return(
                       <FixtureListItem fixture={item} key={item._id} />
                       )
                    })
                }
                
            </List>
        )
    }
}

export default FixtureList;