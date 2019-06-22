import * as React from 'react';

// material-ui
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from '@material-ui/styles';

// Models
import MyAnimeListModel from "../../../@types/MyAnimeLIstModel";

// Other Components
import ScoreListItem from "../../GenericComponents/List/ScoreListItem";

const styles = (theme: any) => ({
    listView: {
        width: "50%",
        height: "300px"
    },
    list: {
        width: "100%",
    },
  });

interface Props {
    data: MyAnimeListModel;
    classes?: any;
}

interface State {

}

class StudiosView extends React.Component<Props, State> {
    
    render() {
        const { classes, data } = this.props;
        var x = data.anime.find(anime => anime.series_title == "whatever");
        console.log(data);

        return (
            <div className={classes.listView}>
                <List className={classes.list}>
                    {data.anime.map((a:any) => (
                        <ListItem button>
                            <ListItemText primary={a.series_title} />
                        </ListItem>
                    ))}
                </List>
                <div/>
            </div>
            
        )
    }
}

export default withStyles(styles)(StudiosView);