import React from "react";

// Types
import MyAnimeListModel from "../@types/MyAnimeLIstModel";

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Other Components

import ListView from "./MainView/List/ListView";
import StudiosView from "./MainView/Studios/StudiosView";

// sass
import "../css/App.scss";

interface Props{

}

interface State {
  mainView: ViewType;
  data: MyAnimeListModel;
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
      data: data.myanimelist,
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

  render() {
    const { data } = this.state;
    
    return (
      <React.Fragment>
       <AppBar className="root" position="relative">
          <Toolbar className="toolbar">
            <Typography variant="h6" className="title">
              MyWeebsList
            </Typography>
            <Button onClick={this.changeToList} color="inherit" className="menuButton">List</Button>
            <Button onClick={this.changeToStudios} color="inherit" className="menuButton">Studio</Button>
          </Toolbar>
        </AppBar>
        <main className="mainView">
          <ListView data={data}/>
          {/*this.state.mainView === ViewType.List ? <ListView data={data}/> : <StudiosView data={data} />*/}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
