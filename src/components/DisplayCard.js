import React from "react";

class DisplayCard extends React.Component {

    render() {
        return (
            <section className="glass-background weatherAppContainer__displayCard ">
                <div className="weatherAppContainer__displayCard__weatherContainer">
                    <img src={this.props.icon} alt="" />
                    <h3 className="weatherAppContainer__displayCard__weatherContainer__temp large-degree-c">{this.props.temp}</h3>
                    <span className="weatherAppContainer__displayCard__weatherContainer__description">{this.props.description}</span>
                </div>

                <div className="weatherAppContainer__displayCard__weatherContainer__weatherAttributesContainer">
                    <div>
                        <i className="wi wi-strong-wind weatherAppContainer__displayCard__weatherContainer__weatherAttributesContainer__icon"></i>
                        <span className="weatherAppContainer__displayCard__weatherContainer__weatherAttributesContainer__span">{this.props.windSpeed}</span>
                    </div>
                    <div>
                        <i className="wi wi-humidity weatherAppContainer__displayCard__weatherContainer__weatherAttributesContainer__icon"></i>
                        <span className="weatherAppContainer__displayCard__weatherContainer__weatherAttributesContainer__span">{this.props.humidity}</span>
                    </div>
                </div>
            </section>
        );
    }
}

export { DisplayCard };

