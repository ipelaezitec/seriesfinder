import React ,{ Component }from 'react';


class Intro extends Component{
  constructor(props){
    super(props);
    this.state ={}
  }
  render(){
    return(
        <p className="App-intro">{this.props.message}</p>
    );
  }
  
}

export default Intro;