import React from "react";

// Types
import MyAnimeListModel from "../@types/MyAnimeLIstModel";

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from "@material-ui/core/Input";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/styles';

// utils
import { parseString } from "xml2js";

// Other Components
import ListView from "./MainView/List/ListView";
import StudiosView from "./MainView/Studios/StudiosView";
import UploadDataDialog from "./MainView/Home/UploadDataDialog";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
  },
  toolbarItem: {
    marginRight: "10px",
  }
});

interface Props{
  classes?: any;
}

interface State {
  mainView: ViewType;
  data: MyAnimeListModel;
  isDataLoaded: boolean;
  isDataDialogOpen: boolean;
}

enum ViewType {
  List = "List",
  Studios = "Studios",
}

class App extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);

    const data: any = require("../Utils/Temp/data.json");
    
    this.state = {
      mainView: ViewType.List,
      data: {} as MyAnimeListModel,
      isDataLoaded: false,
      isDataDialogOpen: false,
    };
  }

  changeToList = () => {
    this.setState({
      mainView: ViewType.List
    })
  }

  changeToStudios = () => {
    this.setState({
      mainView: ViewType.Studios
    })
  }

  changeFile = (newData: MyAnimeListModel) => {
    this.setState({
      data: newData,
      isDataLoaded: true,
      isDataDialogOpen: false,
    })
  }

  resetData = () => {
    this.setState({
      mainView: ViewType.List,
      data: {} as MyAnimeListModel,
      isDataLoaded: false,
    });
  }
  
  openDataDialog = () => {
    this.setState({
      isDataDialogOpen: true,
    })
  }

  closeDataDialog = () => {
    this.setState({
      isDataDialogOpen: false,
    })
  }

  loadDataDialog = () => {
    return (
      <Dialog onClose={this.closeDataDialog} open={this.state.isDataDialogOpen}>
        <DialogTitle id="simple-dialog-title">Load New Account</DialogTitle>
        <UploadDataDialog onNewFile={this.changeFile} />
      </Dialog>
    )
  }

  render() {
    const { data, isDataLoaded, isDataDialogOpen } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
       <AppBar className={classes.root} position="relative">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              MyWeebsList
            </Typography>
            {isDataLoaded ? 
              <div>
                <Button onClick={this.changeToList} color="inherit" className={classes.toolbarItem}>List</Button>
                <Button onClick={this.changeToStudios} color="inherit" className={classes.toolbarItem}>Studio</Button>
                <Button onClick={this.openDataDialog} color="inherit" className={classes.toolbarItem}>Load New File</Button>
              </div>
            : null}
          </Toolbar>
        </AppBar>
        {}
        <main>
          {isDataLoaded ? <ListView data={data}/> : <UploadDataDialog onNewFile={this.changeFile}/>}
          {isDataDialogOpen && this.loadDataDialog()}
          {/*this.state.mainView === ViewType.List ? <ListView data={data}/> : <StudiosView data={data} />*/}
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
