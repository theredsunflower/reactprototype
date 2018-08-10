import React, { Component } from 'react';
import clean from './clean.jpg';
import content from './content.jpg';
import mobile from './mobile.jpg';


class Body extends Component {
  render() {
    return (
      <div className="Body">
      	<div className="summary">
      		<p>This is a summary</p>
     	</div>
        <div className="content-item">
        	<h1>Clean</h1>
        	<p>I create clean, simple designs that bring website content to the forefront</p>
        	<img src={clean} className="content-item-img" alt="clean image" />
        </div>

        <div className="content-item">
        	<h1>Mobile-First</h1>
        	<p>I create my initial design for mobile devices and progressively enhance the experience for larger screens. This also helps for cross-browser compatibility</p>
        	<img src={mobile} className="content-item-img" alt="clean image" />
       </div>

        <div className="content-item">
        	<h1>Content Driven</h1>
        	<p>I organize content so that the objective of the website is immediately clear</p>
        	<img src={content} className="content-item-img" alt="clean image" />
      	</div>
      </div>
    );
  }
}

export default Body;