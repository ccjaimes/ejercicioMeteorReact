import React, { Component } from 'react';
import WeekForecast from './WeekForecast';

class MonthForecast extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="jumbotron text-center">
                    <h1>How is the weather?</h1>
                </div>
                <div className="container-fluid">
                    <WeekForecast key={1} semana={1}/>
                </div>
                <div className="container-fluid">
                    <WeekForecast key={2} semana={2}/>
                </div>
                <div className="container-fluid">
                    <WeekForecast key={3} semana={3}/>
                </div>
                <div className="container-fluid">
                    <WeekForecast key={4} semana={4}/>
                </div>
            </React.Fragment>
        );
    }
}

export default MonthForecast;