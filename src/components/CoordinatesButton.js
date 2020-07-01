// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component{

    coordinates = (event)=>{
        //console.log([event.screenX, event.screenY])
        this.props.onReceiveCoordinates([event.screenX, event.screenY])
        return [event.screenX, event.screenY]
    }

    render(){
        return <button onClick={this.coordinates} />
    }
}