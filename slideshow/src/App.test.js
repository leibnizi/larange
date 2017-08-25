import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slider />, div);
});
