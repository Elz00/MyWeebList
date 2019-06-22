import React from "react";

// Types
import MyAnimeListModel from "../@types/MyAnimeLIstModel";

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from "@material-ui/core/Input";
import { withStyles } from '@material-ui/styles';

// utils
import { parseString } from "xml2js";

// Other Components
import ListView from "./MainView/List/ListView";
import StudiosView from "./MainView/Studios/StudiosView";
import HomeView from "./MainView/Home/HomeView";

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
    console.log(newData);
    this.setState({
      data: newData,
      isDataLoaded: true,
    })
  }

  

  render() {
    const { data, isDataLoaded } = this.state;
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
              </div>
            : null}
          </Toolbar>
        </AppBar>
        <main>
          {isDataLoaded ? <ListView data={data}/> : <HomeView onNewFile={this.changeFile}/>}
          {/*this.state.mainView === ViewType.List ? <ListView data={data}/> : <StudiosView data={data} />*/}
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
