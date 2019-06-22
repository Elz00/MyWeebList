import * as React from 'react';

// material-ui
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/styles';

// Models
import MyAnimeListModel from "../../../@types/MyAnimeLIstModel";

// Other Components
import ScoreListItem from "../../GenericComponents/List/ScoreListItem";

import "../../../css/App.scss";



interface Props {
    data: MyAnimeListModel,
    classes?: any,
}

interface State {

}

const styles = (theme: any) => ({
    listView: {
        width: "50%",
        height: "300px"
    },
    list: {
        width: "100%",
    },
  });
  

class ListView extends React.Component<Props, State> {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.listView}>
                <List className={classes.list}>
                    {this.props.data.anime.map((a:any) => (
                        <ScoreListItem anime={a}/>
                    ))}
                </List>
                <div>
                    
                </div>
            </div>
            
        )
    }
}

export default withStyles(styles)(ListView);