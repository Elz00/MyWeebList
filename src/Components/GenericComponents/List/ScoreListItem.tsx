import * as React from 'react';

// material-ui
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { green, red, yellow } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/styles';

// Utils
import * as _ from "lodash";

// Models
import { AnimeModel } from "../../../@types/MyAnimeLIstModel";

// Other Components
import ListItemText from '@material-ui/core/ListItemText';


const styles = (theme: any) => ({
    goodAvatar: {
        backgroundColor: green[400],
    },
    averageAvatar: {
        backgroundColor: yellow[400],
    },
    badAvatar: {
        backgroundColor: red[400],
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

        if(score >= 8){
            avatarClass = classes.goodAvatar;
        } else if(score >= 6) {
            avatarClass = classes.averageAvatar;
        } else {
            avatarClass = classes.badAvatar;
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