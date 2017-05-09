console.log('Hello World!');
import React from 'react';
import ReactDom from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  React.dom = render(
    React.createElement(Counter)
    document.getElementById('mount')
  );
});
