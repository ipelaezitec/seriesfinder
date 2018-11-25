import React,{Component} from 'react';


class SingleSeries extends Component {
  state = {
    show : null
  }

  componentDidMount(){

    const {id} = this.props.match.params // este modo de asignar ES6 mezcla las key value de un objeto
    // doc : https://stackoverflow.com/questions/41058569/what-is-the-difference-between-const-and-const-in-javascript
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show : json }));
  }

  render (){
    const {show} = this.state;
    return(
      <div>
        {show == null && <div className="loader"></div>}
        {
          show !== null
          &&
          <div>
            <p>{show.name}</p>
            <p> Estreno - {show.premiered}</p>
            <p> Puntaje - {show.rating.average } </p>
            <p> Episodios - {show._embedded.episodes.length}</p>
            <p>
              <img alt="serie imagen" src={show.image.medium}/>
            </p>
          </div>
        }
        {/* <p> Single Series - the show id will be {this.props.match.params.id} </p> */}
      </div>
    )
  }
}

export default SingleSeries;