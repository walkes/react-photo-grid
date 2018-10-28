import React, { Component } from 'react';
import PhotoGrid from './PhotoGrid';

class App extends Component {
    render() {
        const photos = [
            {
                src: 'images/adventure-alps-amazing-552785.jpg',
                width: 858,
                height: 500,
            },
            {
                src: 'images/aerial-alpine-ceresole-reale-1562.jpg',
                width: 750,
                height: 500,
            },
            {
                src: 'images/autumn-beautiful-city-210243.jpg',
                width: 750,
                height: 500,
            },
            {
                src: 'images/background-calm-clouds-747964.jpg',
                width: 792,
                height: 500,
            },
            {
                src: 'images/blue-bubble-calamity-287229.jpg',
                width: 696,
                height: 500,
            },
            {
                src: 'images/bright-clouds-cold-618833.jpg',
                width: 749,
                height: 500,
            },
            {
                src: 'images/clouds-fog-forest-9754.jpg',
                width: 800,
                height: 500,
            },
            {
                src: 'images/dawn-dusk-lake-355423.jpg',
                width: 2000,
                height: 500,
            },
            {
                src: 'images/daylight-environment-forest-459225.jpg',
                width: 1053,
                height: 500,
            },
            {
                src: 'images/hd-wallpaper-landscape-mountain-peak-51387.jpg',
                width: 1920,
                height: 500,
            },
        ];

        return (
            <div className="App">
                <PhotoGrid photos={photos} maxHeight={180} />
            </div>
        );
    }
}

export default App;
