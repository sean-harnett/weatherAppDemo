import React from 'react';


class SecondaryCard extends React.Component {
    constructor(props) {
        super(props);
    }


    _renderCards() {

        const cards = this.props.weather.map((hour, ix) => {
            return (<div key={ix}
                className="glass-background weatherAppContainer__secondaryCardContainer__card">
                <h5 className="small-degree-c weatherAppContainer__secondaryCardContainer__card__title">{hour.temp}</h5>
                <span className="weatherAppContainer__secondaryCardContainer__card__span">{hour.time}</span>

                <img src={hour.weathericon} alt="" className="weatherAppContainer__secondaryCardContainer__card__img" />

            </div>)
        });

        return cards;

    }

    render() {
        return (<section className="weatherAppContainer__secondaryCardContainer">


            {this._renderCards()}
            {/* 
            <div
                className="glass-background weatherAppContainer__secondaryCardContainer__card">
                <h5 className="small-degree-c weatherAppContainer__secondaryCardContainer__card__title">19</h5>
                <span className="weatherAppContainer__secondaryCardContainer__card__span">4:00 pm</span>
                <i className="wi wi-day-cloudy weatherAppContainer__secondaryCardContainer__card__icon"></i>
            </div>
            <div className="glass-background weatherAppContainer__secondaryCardContainer__card">
                <h5 className="small-degree-c weatherAppContainer__secondaryCardContainer__card__title">19</h5>
                <span className="weatherAppContainer__secondaryCardContainer__card__span">4:00 pm</span>
                <i className="wi wi-day-cloudy weatherAppContainer__secondaryCardContainer__card__icon"></i>
            </div>


            <div
                className="glass-background weatherAppContainer__secondaryCardContainer__card">
                <h5 className="small-degree-c weatherAppContainer__secondaryCardContainer__card__title">19</h5>
                <span className="weatherAppContainer__secondaryCardContainer__card__span">4:00 pm</span>
                <i className="wi wi-day-cloudy weatherAppContainer__secondaryCardContainer__card__icon"></i>
            </div> */}
        </section>);
    }
}

export { SecondaryCard };