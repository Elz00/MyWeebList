import * as React from 'react';

// material-ui
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { green, red, yellow, indigo, grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/styles';

// Utils
import * as _ from "lodash";

// Models
import { AnimeModel } from "../../../@types/MyAnimeLIstModel";

// Other Components
import ListItemText from '@material-ui/core/ListItemText';


const styles = (theme: any) => ({
    // Score status (old)
    goodAvatar: {
        backgroundColor: green[400],
    },
    averageAvatar: {
        backgroundColor: yellow[400],
    },
    badAvatar: {
        backgroundColor: red[400],
    },
    // Colors status
    colorWatching: {
        backgroundColor: green[800],
    },
    colorOnhold: {
        backgroundColor: yellow[600],
    },
    colorDropped: {
        backgroundColor: red[800],
    },
    colorPtw: {
        backgroundColor: grey[400],
    },
    colorCompleted: {
        backgroundColor: indigo[700],
    },
});

interface Props {
    classes?: any,
    anime: AnimeModel,
}

class ScoreListItem extends React.Component<Props> {

    render(){
        const { classes, anime } = this.props;
        let avatarClass;
        const score: number = parseInt(anime.my_score);
        const status: string = anime.my_status;

        // Color code score avatar by rating (old)
        /*if(score >= 8){
            avatarClass = classes.goodAvatar;
        } else if(score >= 6) {
            avatarClass = classes.averageAvatar;
        } else {
            avatarClass = classes.badAvatar;
        }*/

        // Color code score avatar by user status
        if(status == "Watching"){
            avatarClass = classes.colorWatching;
        } else if(status == "Completed") {
            avatarClass = classes.colorCompleted;
        } else if(status == "On-Hold") {
            avatarClass = classes.colorOnhold;
        } else if(status == "Plan to Watch") {
            avatarClass = classes.colorPtw;
        } else if(status == "Dropped") {
            avatarClass = classes.colorDropped;
        }

        return (
            <ListItem button key={_.uniqueId()}>
                <ListItemAvatar>
                <Avatar className={avatarClass}>
                    {score}
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={anime.series_title} />
            </ListItem>
        );
    }

}

export default withStyles(styles)(ScoreListItem);