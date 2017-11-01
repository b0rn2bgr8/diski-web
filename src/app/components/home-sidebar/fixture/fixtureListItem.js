import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {SvgIcon} from 'material-ui';
import Chip from 'material-ui/Chip';
import {format} from 'date-fns';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      background: theme.palette.background.paper,
    },
  });

class FixtureListItem extends Component{
    render(){
        const { classes } = this.props;        
        return(
            <ListItem dense button className={classes.listItem}>
                <SvgIcon>
                <path fill="#000000" d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18V21Z" />
                </SvgIcon>
                <ListItemText primary={((this.props.fixture.home_team.name).substring(0,3)).toUpperCase()} />
                <h6 className="text-danger" style={{marginRight: 15}}>V</h6>
                <SvgIcon>
                <path fill="#000000" d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18V21Z" />
                </SvgIcon>
                <ListItemText primary={((this.props.fixture.away_team.name).substring(0,3)).toUpperCase()} />
                <ListItemSecondaryAction>
                
                </ListItemSecondaryAction>
                <div>
                <Chip label={format(this.props.fixture.match_date, 'Do MMM')} />
                </div>
            </ListItem>
        )
    }
}

export default withStyles(styles)(FixtureListItem);