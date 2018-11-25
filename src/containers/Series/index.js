import React,{Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Intro from '../../components/Intro/Intro';

class Series extends Component {

  state = {
    series:[],
    seriesName:'',
    isFetching : false ,

  }

  onSeriesInputChange = e =>{
    this.setState({seriesName:e.target.value,isFetching : true});
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response) => response.json())
    .then(json=>this.setState(
      {series:json ,
      isFetching:false
    })) 
  }
  render(){
    const {series ,seriesName ,isFetching} = this.state; //componentDidMount. ??????????
    return (
      <div>   
        
        <Intro message="Aquí podes encontrar todas tus series" />

        <div>
          <input 
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange} />
        </div>
          {
          !isFetching && series.length === 0 && seriesName.trim() === '' 
          &&
          <p>Introduce el nombre de la serie</p> 
          // si no esta buscando, si length = 0  y el input esta vacio
          }

          {
            !isFetching && series.length == 0 && seriesName.trim() !==''
            &&
            <p> No se han encontrado series con este nombre.</p> 
            // si  no esta buscando,  si lenght = 0  y el input tiene algo
          }

          {
            // isFetching && <p> Loading.. </p>
            isFetching && <div className="loader"></div>
            // si esta buscando... pone cargar.
          }

          {
            !isFetching && <SeriesList list = {this.state.series} />
            // si no esta buscando por lo tanto muestra la lista de series
          }
        

      </div>


    )
  }
}

export default Series;