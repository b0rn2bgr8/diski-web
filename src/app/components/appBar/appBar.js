import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  });

class TournamentBar extends Component{
    
    render(){
        const { classes, theme } = this.props;
        return (
                <div className={classes.root}>
                    <AppBar position="static" color="primary">
                    <Tabs
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        indicatorColor="default"
                        textColor="default"
                        fullWidth
                    >
                        <Tab label="U-17 Championship" />
                        <Tab label="U-15 Championship" />
                        <Tab label="U-13 Championship" />
                        <Tab label="Super Cup" />
                        <Tab label="Discovery National Cup" />
                    </Tabs>
                    </AppBar>
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

export default  withStyles(styles, { withTheme: true })(TournamentBar);