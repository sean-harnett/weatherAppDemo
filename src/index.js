import ReactDOM from 'react-dom';
import React from 'react';
import { DisplayCard } from './components/DisplayCard';
import { SecondaryCard } from './components/SecondaryCards';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.location = '';
        this.coordinates = null;

        this.state = {
            weather: {
                temp: 0,
                description: '',
                windSpeed: '',
                humdity: '',
                icon: '',
            },
            nextThreeHours: [],
            haveWeather: false,
        }

        this._locationChange = this._locationChange.bind(this);
        this._locationFormSubmit = this._locationFormSubmit.bind(this);
    }
    _locationFormSubmit(e) {
        e.target.reset();
        console.log(this.location);
        const apiCall =  `https://sheltered-headland-22822.herokuapp.com/weather/${this.location}`;        

        fetch(apiCall, { "method": "GET", mode: 'cors' }).then(apiResponse => { return apiResponse.json() }).then(data => {
            console.log(data);

            this.location = '';
            const icon_url = 'http://openweathermap.org/img/wn/%s@2x.png';

            this.setState({ temp: data.current.temp, description: data.current.weather[0].description, humidity: data.current.humidity, windSpeed: data.current.wind_speed, icon: icon_url.replace('%s', data.current.weather[0].icon), haveWeather: true });

            let currentTime = (new Date().getHours());

            this.setState({
                nextThreeHours: data.hourlyData.map((hour, ix) => {

                    return {
                        temp: hour.temp,
                        humidity: hour.humidity,
                        weathericon: icon_url.replace('%s', hour.weather[0].icon),
                        time: this._setHourTime(currentTime, (ix + 1)),
                    }

                })
            });


        });
    }

    _setHourTime(currentTime, offset) {
        console.log(currentTime, offset);

        let postfix = '';

        if ((currentTime + offset) > 11) {
            postfix = ':00pm';
        } else {
            postfix = ':00am';
        }
        if((currentTime + offset) != 12){
            return (((currentTime + offset) % 12) + postfix);    
        }else{
            return ((currentTime + offset) + postfix);
        }        
    }

    _locationChange(e) {

        this.location = e.target.value;

    }

    _renderWeather() {
        if (this.state.haveWeather) {
            return (
                <span >
                    <DisplayCard temp={this.state.temp} description={this.state.description} windSpeed={this.state.windSpeed} humidity={this.state.humidity} icon={this.state.icon}></DisplayCard>
                    <SecondaryCard weather={this.state.nextThreeHours}></SecondaryCard>
                </span>
            );
        }
    }

    render() {


        let displayCard = this.state.haveWeather ? <DisplayCard temp={this.state.temp} description={this.state.description} windSpeed={this.state.windSpeed} humidity={this.state.humidity} icon={this.state.icon}></DisplayCard> : null;
        let secondaryCards = this.state.haveWeather ? <SecondaryCard weather={this.state.nextThreeHours}></SecondaryCard> : null;



        return (
            <main className="weatherAppContainer">
                <div>
                    <form className="app_form" action="#" onSubmit={this._locationFormSubmit}>
                        <input type="text" placeholder="Enter City" onChange={this._locationChange} />
                        <input type="submit" value="Get Weather" />
                    </form>
                </div>
                {displayCard}
                {secondaryCards}



            </main>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));