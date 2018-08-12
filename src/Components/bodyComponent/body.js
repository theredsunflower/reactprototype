import React, { Component } from 'react';
import clean from './clean.jpg';
import content from './content.jpg';
import mobile from './mobile.jpg';
import speaker from './speaker.jpg';
import teacher from './teacher.JPG';
import Form from './form';


class Body extends Component {
  render() {
    return (
      <div className="Body">
      	<div className="summary">
      		<Form />
     	  </div>
        <div id="main-content">
          <div class="content-block">
            <h1>Clean</h1>
            <p>I create clean, simple designs that bring digital media to the forefront.</p>
            <img src={clean} className="content-item-img" alt="clean" />
          </div>

          <div class="content-block">
            <h1>Mobile-First</h1>
            <p>A flawless mobile experience to increase conversion rates.</p>
            <img src={teacher} className="content-item-img" alt="mobile" />
          </div>

          <div class="content-block">
            <h1>Performant</h1>
            <p>Fast, lightweight, and offline-capable.</p>
            <img src={content} className="content-item-img" alt="content" />
          </div>

          <div class="content-block">
            <h1>Content Driven</h1>
            <p>Deliver your message loud and clear with effective digital content.</p>
            <img src={speaker} className="content-item-img" alt="speaker" />
          </div>          
        </div>
      </div>
    );
  }
}

export default Body;