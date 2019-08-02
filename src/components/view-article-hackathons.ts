/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css, property, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

import '/node_modules/@polymer/paper-button/paper-button.js';

// We are lazy loading its reducer.
import shop from '../reducers/shop.js';
store.addReducers({
  shop
});

// These are the elements needed by this element.
import './shop-products.js';
import './shop-cart.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

@customElement('view-article-hackathons')
export class ViewArticleHackathons extends connect(store)(PageViewElement) {

  @property({type: Number})
  _tabSelected = 0;

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        button {
          border: 2px solid var(--app-dark-text-color);
          border-radius: 3px;
          padding: 8px 16px;
        }

        button:hover {
          border-color: var(--app-primary-color);
          color: var(--app-primary-color);
        }

        .cart,
        .cart svg {
          fill: var(--app-primary-color);
          width: 64px;
          height: 64px;
        }

        .circle.small {
          margin-top: -72px;
          width: 28px;
          height: 28px;
          font-size: 16px;
          font-weight: bold;
          line-height: 30px;
        }

        .hack-hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0px;
            padding: 0px;
            height: 100vh;
        }

        .hack-hero-content {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            margin: 0px;
            padding: 0px;
            width: 100vw;
        }

        .hh-lr-container {
            display:block;
        }

        .hh-left {
            width: 42vw;
            min-width: 400px;
            height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
            color: var(--app-dark-text-color);
            text-align: center;
        }

        #learn-more-button {
            width: 200px;
        }

        .learn-more-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 30px;
        }

        .hh-right {
            width: 42vw;
            min-width: 400px;
            height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }

        .hh-tab-content {
          display: none;
          height: 400px;
        }

        .hh-tab-content[active="true"] {
          display: block;
        }

        .hh-title {
          font-size: 42px;
          font-weight: 100;
          padding-left: 30px;
          padding-right: 30px;
        }

        .hh-subtitle {

        }

        .hh-date {

        }

        .hh-location {

        }

        .hh-location-place {

        }

        .hh-location-city {
            
        }

        .hh-right-tabs {

        }

        .hh-right-tabs > paper-button {

        }

        .tabs {
            display:flex;
            flex-direction:row;
            justify-content: space-evenly;
            margin-bottom: 20px;
        }

        .tab {
            font-size: 14px;
            padding-top: 4px;
            padding-bottom: 4px;
            border-bottom: 2px solid transparent;
            color: grey;
        }

        .tab[active="true"] {
            border-bottom: 2px solid var(--app-primary-color);
            font-weight: 600;
            color: var(--app-primary-color);
        }

        .map-wrapper {
          height: 100%;
          border: 1px solid #efefef;
          border-radius: 5px;
          padding: 10px;
        }

        .agenda-time {
          font-weight: 100;
          padding-right: 10px;
        }

        .agenda {
            font-size: 16px;
        }

        .agenda-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        td {
          font-weight: 100;
          padding: 5px;
        }

        tr:hover {
          background-color: #fafafa;
        }

        .topics-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding: 10px;
        }

        /* Wide layout: when the viewport width is bigger than 460px, layout
        changes to a wide layout */
        @media (max-width:  945px) {

            .hack-hero {
                display: block;
                margin-top: 100px;
            }

            .hack-hero-content {
                display: block;
                width: 400px;
            }

            .hh-right {
                 margin-top: 100px;
                 margin-bottom: 200px;
                 width: 90vw;
            }

            .hh-lr-container {
                display:flex;
                flex-direction: row;
                justify-content: center;
                width: 100vw;
            }

            .topics {
                text-align: center;
            }

        }

      `
    ];
  }


  protected render() {
    return html`

    <div class="hack-hero">

      <div class="hack-hero-content">

      <div class="hh-lr-container">

      <div class="hh-left">
      
        <p class="hh-title">Join us for the first Project Clarify hackathon!</p>
        <p class="hh-subtitle">Calling all engineers, ML researchers, and designers: Help us build the future of applied neuroscience!</p>
        <p class="hh-date">Saturday, August 31, 2019</p>
  
        <div class="learn-more-container">
          <paper-button id="learn-more-button" @click="${this._navRegister}">Apply to attend</paper-button>
        </div>

      </div>

      </div>
      
      <div class="hh-lr-container">
      <div class="hh-right">

        <div @click="${this._handleTabChange}" class="tabs">

          <div class="tab" tid=0 active="${this._tabSelected == 0}">Location</div>
          <div class="tab" tid=1 active="${this._tabSelected == 1}">Topic Examples</div>
          <div class="tab" tid=2 active="${this._tabSelected == 2}">Agenda</div>

        </div>

        <div class="hh-tab-content" active="${this._tabSelected == 0}">
            <div class="map-wrapper">
            <iframe class="embedded-map" width="100%" height="100%" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/view?zoom=11&center=37.7671%2C-122.3907&key=AIzaSyBNgXEBIS0rHVVgH0YxMqYcgLJXb3U9WrU" allowfullscreen></iframe>
            </div>
        </div>

        <div class="hh-tab-content" active="${this._tabSelected == 1}">
        
          <div class="topics-container">

            <table class="topics">

                <tr><td>Build a data ingestion and preprocessing workflow step for a dataset of interest.</td></tr>
                <tr><td>Implement a tensor2tensor problem for a dataset of interest; visualize examples.</td></tr>
                <tr><td>Characterize bias in a trained emotion labeling model.</td></tr>

                <tr><td>Improve on our existing models by finding and correcting flaws, achieving speedups</td></tr>
                <tr><td>Design an application of deep learning to a new problem formulation.</td></tr>

                <tr><td>Implement a neuropsych assessment task as a simple browser game.</td></tr>
                <tr><td>Build a simple game that integrates a tensorflow js model.</td></tr>

                <tr><td>Build an abstraction to convert trained models using tfjs-converter in batch on Kubernetes.</td></tr>

            </table>
        
          </div>
 
        </div>

        <div class="hh-tab-content" active="${this._tabSelected == 2}">

          <div class="agenda-container">

            <table class="agenda">
                <tr><td class="agenda-time">8 - 8:30AM</td><td>Sign in & badges</td></tr>
                <tr><td class="agenda-time">9 - 9:30AM</td><td>Welcome</td></tr>
                <tr><td class="agenda-time">9:30 - 12PM</td><td>Hack session I</td></tr>
                <tr><td class="agenda-time">12 - 12:45PM</td><td>Break</td></tr>
                <tr><td class="agenda-time">1 - 5PM</td><td>Hack session II</td></tr>
                <tr><td class="agenda-time">5 - 5:45PM</td><td>Break</td></tr>
                <tr><td class="agenda-time">6 - 8PM</td><td>Hack session III</td></tr>
                <tr><td class="agenda-time">8 - 9PM</td><td>Presentations</td></tr>
                <tr><td class="agenda-time">9 - 10PM</td><td>Awards</td></tr>
            </table>

          </div>
        
        </div>

      </div>

      </div>

      </div>

    </div>

    `;
  }

  _handleTabChange(e: Event) {

    let tabElement;

    console.log(e);

    for(let index in [0, 1, 2, 3]) {
      tabElement = e.path[index];
      if (tabElement.className == "tab") {
        this._tabSelected = parseInt(tabElement.getAttribute("tid"));
        return;
      }
    }

  }

  _handleActiveChanged(e: Event) {
    console.log("active changed")
    console.log(e);
  }

  activeChanged(e: Event) {
      console.log(e);
  }

  _navRegister() {
    window.open('https://forms.gle/BRbdiUwRHGddd7NG9', '_blank');
  }

}
