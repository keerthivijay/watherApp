 
import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/Chart';
import GoogleMp from '../components/GoogleMap';


class WeatherList extends Component {

renderWeather(cityData){

    const cityName = cityData.city.name;
    const temps = cityData.list.map( weather => weather.main.temp);
    const pressure = cityData.list.map( weather => weather.main.pressure);
    const humidity = cityData.list.map( weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;
    return (
        <tr key={cityName}>
            <td>
                {cityName}
                <GoogleMp lat={lat} lon={lon} />
            </td>
            <td>
                <Chart data={temps}  color="orange" unit="K" />
            </td>
            <td>
                <Chart data={pressure}  color="green" unit="hPa" />
            </td>
            <td>
                <Chart data={humidity}  color="black" unit="%" />
            </td>
        </tr>
    )
}

    render() {
        return(
            <div>
                 <table className="table table-hover"> 
                 <thead>
                     <tr>
                         <th>City</th>
                         <th>Temperature</th>
                         <th>Pressure (hPa)</th>
                         <th>Humidity (%)</th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.props.weather.map(weather => this.renderWeather(weather))}
                 </tbody>

                 </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        weather:state.weather
    }
}
export default connect(mapStateToProps)(WeatherList)