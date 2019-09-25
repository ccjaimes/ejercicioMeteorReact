import React, { Component } from 'react';

export default class DayForecast extends Component {
  state = {}
  componentDidMount(){
    if(this.props.report.img === "sunny.png"){
      this.setState({img:"https://image.flaticon.com/icons/svg/979/979585.svg"})
    }
    if(this.props.report.img === "snowflake.png"){
      this.setState({img:"https://image.flaticon.com/icons/svg/642/642000.svg"})
    }
    if(this.props.report.img === "cloudy.png"){
      this.setState({img:"https://image.flaticon.com/icons/svg/1146/1146869.svg"})
    }
    if(this.props.report.img === "clouds.png"){
      this.setState({img:"https://image.flaticon.com/icons/svg/414/414927.svg"})
    }
  }
  render() {
    return (
      <div class="col">
        <div className={`card border-${this.props.report.card} mb-3`}>
          <div className="card-header">{this.props.report.dayName}</div>
          <div className={`card-body text-${this.props.report.card}`}>
            <h5 className="card-title">{this.props.report.status}</h5>
            <img style={{height:"3em"}} src={this.state.img} alt={this.props.img} />
            <p className="card-text">{this.props.report.minTemp + "°C - " + this.props.report.maxTemp + "°C"}</p>
          </div>
        </div>
      </div>
    );
  }
}