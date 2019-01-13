import React, {Component} from 'react';
import PhotoGrid from 'react-photos-grid';

class App extends Component {
    render() {
        const photos = [
            {
                src: 'images/bcn/1.jpeg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/2.jpeg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/3.jpeg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/4.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/5.jpeg',
                width: 640,
                height: 959,
            },
            {
                src: 'images/bcn/6.jpeg',
                width: 640,
                height: 423,
            },
            {
                src: 'images/bcn/7.jpeg',
                width: 640,
                height: 960,
            },
            {
                src: 'images/bcn/8.jpeg',
                width: 640,
                height: 360,
            },
            {
                src: 'images/bcn/9.jpeg',
                width: 640,
                height: 360,
            },
            {
                src: 'images/bcn/10.jpeg',
                width: 640,
                height: 480,
            },
            {
                src: 'images/bcn/11.jpeg',
                width: 640,
                height: 853,
            },
            {
                src: 'images/bcn/12.jpeg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/13.jpeg',
                width: 640,
                height: 428,
            },
            {
                src: 'images/bcn/14.jpeg',
                width: 640,
                height: 480,
            },
            {
                src: 'images/bcn/15.jpeg',
                width: 640,
                height: 854,
            },
            {
                src: 'images/bcn/16.jpeg',
                width: 640,
                height: 468,
            },
            {
                src: 'images/bcn/17.jpeg',
                width: 640,
                height: 959,
            },
            {
                src: 'images/bcn/18.jpeg',
                width: 640,
                height: 423,
            },
            {
                src: 'images/bcn/19.jpeg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/20.jpg',
                width: 640,
                height: 326,
            },
            {
                src: 'images/bcn/21.jpg',
                width: 640,
                height: 452,
            },
            {
                src: 'images/bcn/22.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/23.jpg',
                width: 640,
                height: 428,
            },
            {
                src: 'images/bcn/24.jpg',
                width: 480,
                height: 640,
            },
            {
                src: 'images/bcn/25.jpg',
                width: 480,
                height: 640,
            },
            {
                src: 'images/bcn/26.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/27.jpg',
                width: 640,
                height: 427,
            },
            {
                src: 'images/bcn/28.jpg',
                width: 640,
                height: 292,
            },
            {
                src: 'images/bcn/29.jpg',
                width: 640,
                height: 427,
            },
            {
                src: 'images/bcn/30.jpg',
                width: 640,
                height: 446,
            },
            {
                src: 'images/bcn/31.jpg',
                width: 640,
                height: 428,
            },
            {
                src: 'images/bcn/32.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/33.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/34.jpg',
                width: 640,
                height: 427,
            },
            {
                src: 'images/bcn/35.jpg',
                width: 640,
                height: 360,
            },
            {
                src: 'images/bcn/36.jpg',
                width: 640,
                height: 324,
            },
            {
                src: 'images/bcn/37.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/38.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/39.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/40.jpg',
                width: 426,
                height: 640,
            },
            {
                src: 'images/bcn/41.jpg',
                width: 498,
                height: 640,
            },
            {
                src: 'images/bcn/42.jpg',
                width: 640,
                height: 442,
            },
            {
                src: 'images/bcn/43.jpg',
                width: 640,
                height: 435,
            },
            {
                src: 'images/bcn/44.jpg',
                width: 640,
                height: 480,
            },
            {
                src: 'images/bcn/45.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/46.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/47.jpg',
                width: 480,
                height: 640,
            },
            {
                src: 'images/bcn/48.jpg',
                width: 480,
                height: 640,
            },
            {
                src: 'images/bcn/49.jpg',
                width: 640,
                height: 535,
            },
            {
                src: 'images/bcn/50.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/51.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/52.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/53.jpg',
                width: 640,
                height: 426,
            },
            {
                src: 'images/bcn/54.jpg',
                width: 640,
                height: 480,
            },
        ];

        return (
            <div className="App">
                <PhotoGrid photos={photos} optimalHeight={400}/>
            </div>
        );
    }
}

export default App;
