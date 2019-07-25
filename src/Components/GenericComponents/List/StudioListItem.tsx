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
});

interface Props {
    classes?: any,
    anime: AnimeModel,
}

class StudioListItem extends React.Component<Props> {

    render(){
        const { classes, anime } = this.props;
        let avatarClass;
        const score: number = parseInt(anime.my_score);
        const studio: string = anime.my_tags;
        console.log(studio);


        return (
            <ListItem>
                <ListItemText primary={studio} />
            </ListItem>
        );
    }

}

export default withStyles(styles)(StudioListItem);