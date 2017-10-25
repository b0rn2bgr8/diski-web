import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import TournamentBar from '../components/appBar/appBar';
import LeagueTable from '../components/tourTable/leagueTable';
import {connect} from 'react-redux';

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  });

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }
    render(){
        console.log("table", this.props);
        const { classes, theme } = this.props;
        return (
                <div className={classes.root}>
                    <TournamentBar value={this.state.value} handleChange={this.handleChange} />
                    <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                    >
                        <div dir={theme.direction}><LeagueTable teams={this.props.tournaments[1].teams} /></div>
                        <div dir={theme.direction}><LeagueTable teams={this.props.tournaments[2].teams} /></div>
                        <div dir={theme.direction}><LeagueTable teams={this.props.tournaments[0].teams} /></div>
                        <div dir={theme.direction}>Group Table</div>
                        <div dir={theme.direction}>Group Table</div>
                    </SwipeableViews>
            </div>
        )
    }
    handleChange = (event, value) => {
        this.setState({ value });
      };
    
      handleChangeIndex = index => {
        this.setState({ value: index });
      };
    
}
function matchStateToProps(state){
    return {
        tournaments: state.tournaments
    }
}

export default connect(matchStateToProps)(withStyles(styles, { withTheme: true })(Table));