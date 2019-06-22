import * as React from 'react';

// Material UI
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

// utils
import { parseString } from "xml2js";

// Models
import MyAnimeListModel from "../../../@types/MyAnimeLIstModel";
const styles = (theme: any) => ({
    card: {
        maxWidth: 400,
        minHeight: 400,
        justifyContent: "center",
        marginTop: 20,
    },
    content: {
        alignItems: "center"
    }
  });

interface Props {
    classes?: any;
    onNewFile(newData: MyAnimeListModel): void;
}

interface State {

}

class HomeView extends React.Component<Props, State> {

    loadedFile: MyAnimeListModel = {} as MyAnimeListModel;
    hasNewFile: boolean = false;

    changeFile = (newData: MyAnimeListModel) => {
        this.loadedFile = newData;
        this.hasNewFile = true;
    }

    onFileChange = (e: any) => {
        let files = e.target.files;
        if(files.length === 1){
            let reader: FileReader = new FileReader();
            const changeFileFunc = this.changeFile;
    
            reader.onload = (e:any) => {
              parseString(e.target.result, (err, res) =>{
                changeFileFunc(res.myanimelist);
              })
            }
    
            reader.readAsText(files[0]);
        }
        
    }

    sendNewData = () => {
        console.log(this.hasNewFile)
        if(this.hasNewFile)
            this.props.onNewFile(this.loadedFile);
    }

    render() {

        const { classes } = this.props;

        return (
            <div style={{justifyContent: "center"}}>
            <Card className={classes.card}>
                <CardContent className={classes.content} style={{alignItems: "center"}}>
                    <Input type="file" onChange={(e) => {this.onFileChange(e)}}></Input>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.sendNewData}>Upload</Button>
                </CardActions>
            </Card>
            </div>
        );
    }
}

export default withStyles(styles)(HomeView)

