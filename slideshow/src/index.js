import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Slider from "./components/Slider";

require("./style/style.css");

var propsObj = {
    items: [
        {
            src: require("./images/1.jpg"),
            alt: "img1"
        },
        {
            src: require("./images/2.jpg"),
            alt: "img2"
        },
        {
            src: require("./images/3.jpg"),
            alt: "img3"
        },
        {
            src: require("./images/4.jpg"),
            alt: "img4"
        }
    ],
    dots: true,
    arrow: true,
    interval: 2000
};

ReactDOM.render(
    <Slider {...propsObj} />, 
    document.querySelector("#root")
);
registerServiceWorker();
