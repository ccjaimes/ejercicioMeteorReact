import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import DayForecast from "./DayForecast.js";

class WeekForecast extends Component {

    renderDays() {
        return this.props.forecast.map((d) => (
            <DayForecast key={d._id} report={d} />
        ));
    }

    render() {
        return (
            <React.Fragment>
                <div className="row text-center">
                    <div className="col">
                        <h1 className="display-4">Week #{this.props.semana}</h1>
                    </div>
                </div>
                <div className="row">
                    {this.renderDays()}
                </div>
            </React.Fragment>
        );
    }
}

export default withTracker(({semana}) => {
    return {
        forecast: Forecast.find({ week: semana }).fetch(),
    };
})(WeekForecast);