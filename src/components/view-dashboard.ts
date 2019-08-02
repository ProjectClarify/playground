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
import { store, RootState } from '../store.js';

// These are the actions needed by this element.
import { navigate } from '../actions/app.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import { moduleItemIcon } from './my-icons.js';

import "/node_modules/@polymer/iron-collapse/iron-collapse.js";

import {
    updateLoadingAnimationState
} from '../actions/app.js';

@customElement('view-dashboard')
export class ViewDashboard extends connect(store)(PageViewElement) {

  @property({type: Object})
  _user = '';

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

        .dash-hero {
          /* Container for the dash hero section */
          margin-top: 100px;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .dash-hero-avatar {
          /* Container for the user's avatar / photo */
          height: 150px;
          width: 150px;
          border-radius: 50%;
          border: 4px solid white;
          background-size: 100%;
        }

        .dash-hero-name {
          /* The user's human name */
          font-size: 24px;
          margin-top: 12px;
          margin-bottom: 0px;
        }

        .dash-hero-vocation {
          /* The user's vocation */
          font-size: 16px;
          margin-top: 0px;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .dash-hero-current-phase-container {
          /* A container for the current phase display */
          display: flex;
          flex-direction: row;
          margin-top: 24px;
          font-size: 16px;
          font-weight: 300;
          margin-bottom: 0px;
        }

        .dash-hero-current-phase-prefix {
          /* The part that says "Current phase:" */
          margin-right: 4px;
        }

        .dash-hero-current-phase-actual {
          /* The actual current phase */
          font-weight: 400;
        }

        .dash-curriculum {
          /* Container for whole curriculum display */

        }

        .dash-module {
          /* Container for title and collapseable section of module display */
          border: 1px solid #efefef;
          margin-top: 24px;
          margin-bottom: 24px;
          font-size: 14px;
          width: 80%;
          max-width: 800px;
        }

        .dash-module-title {
          /* Container for module title, icon, and number; collapse toggle */
          border: 1px solid #efefef;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 10px;
          padding-top: 10px;
          padding-left: 10px;
          padding-right: 10px;
          padding-bottom: 10px;
        }

        .dash-module-title:hover {
          background-color: #efefef;
        }

        .dash-module-title-number {
          /* Number of module */
          margin: 0px;
          padding-right: 4px;
        }

        .dash-module-title-text {
          /* The text of the title of the module */
          margin: 0px;
        }

        .dash-module-title-icon {
          /* Chevron icon changing orientation 180 each toggle */
          margin: 0px;
        }

        .dash-module-collapse {
          /* Container for the collapseable section of module display */
          padding-bottom: 10px;
          padding-top: 10px
        }

        .dash-module-item {
          /* Container for an individual module item */
          font-size: 12px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 0px;
          padding-left: 10px;
          padding-right: 10px;
          padding-bottom: 0px;
        }

        .dash-module-item:hover {
          background-color: #fafafa;
        }

        .dash-module-item-left {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 300px;
        }

        .dash-module-item-left > svg > circle {
          fill: white;
        }

        .dash-module-item-title {
          /* Title of a module item */
          font-weight: 400;
          min-width: 100px;
        }

        .dash-module-item-type {
          /* Type of a module item */
          font-weight: 100;
        }

        .dash-module-item-link {
          /* Link to trigger display of modal */
          font-weight: 100;
          color: #6d9eeb;
        }

        .dash-module-item-completeness {
          /* Percent completeness of the module item (e.g. 100%) */
          color: #3c78d8;
          font-weight: 600;
        }

        /* Wide layout: when the viewport width is bigger than 460px, layout
        changes to a wide layout */
        @media (max-width:  460px) {
          .dash-module-item-type {
              display: none;
          }
          .dash-module-item-link {
              display: none;
          }
          .dash-module-item-left {
              width: 150px;
          }
        }

      `
    ];
  }

  protected render() {
    return html`

    <section class="dash-hero">
      <div class="dash-hero-avatar" style="background-image: url('${this._user.photoURL}')"></div>
      <p class="dash-hero-name">${this._user.displayName}</p>
      <p class="dash-hero-vocation">Astronaut</p>
      <div class="dash-hero-current-phase-container">
        <p class="dash-hero-current-phase-prefix">Current phase:</p>
        <p class="dash-hero-current-phase-actual">Enrollment and baselines</p>
      </div>
    </section>

    <section class="dash-curriculum">

        <div class="dash-module">
          <div class="dash-module-title" @click="${this.handleModuleTitleTap}">
            <p class="dash-module-title-text">
                <span class="dash-module-title-number">1</span>Enrollment and baselines
            </p>
            <p class="dash-module-title-icon">^</p>
          </div>
          <iron-collapse class="dash-module-collapse">
            <div class="dash-module-item" @click="${this._handleModuleItemClick}">
              <div class="dash-module-item-left">
                ${moduleItemIcon}
                <p class="dash-module-item-title">Basic information</p>
                <p class="dash-module-item-type">Enrollment module</p>
                <p class="dash-module-item-link">Start </p>
              </div>
              <p class="dash-module-item-completeness">0%</p>
            </div>
            <div class="dash-module-item">
              <div class="dash-module-item-left">
                ${moduleItemIcon}
                <p class="dash-module-item-title">Study consent</p>
                <p class="dash-module-item-type">Enrollment module</p>
                <p class="dash-module-item-link">Start </p>
              </div>
              <p class="dash-module-item-completeness">0%</p>
            </div>
            <div class="dash-module-item">
              <div class="dash-module-item-left">
                ${moduleItemIcon}
                <p class="dash-module-item-title">Data usage</p>
                <p class="dash-module-item-type">Enrollment module</p>
                <p class="dash-module-item-link">Start </p>
              </div>
              <p class="dash-module-item-completeness">0%</p>
            </div>
            <div class="dash-module-item">
              <div class="dash-module-item-left">
                ${moduleItemIcon}
                <p class="dash-module-item-title">Integrations</p>
                <p class="dash-module-item-type">Enrollment module</p>
                <p class="dash-module-item-link">Start </p>
              </div>
              <p class="dash-module-item-completeness">0%</p>
            </div> <!-- .dash-module-item -->
          </iron-collapse> <!-- .dash-module-collapse -->
        </div> <!-- .dash-module -->
        <div class="dash-module">
          <div class="dash-module-title">
             <p class="dash-module-title-text">
                <span class="dash-module-title-number">2</span>Training
             </p>
            <p class="dash-module-title-icon">^</p>
          </div>
        </div>
        <div class="dash-module">
          <div class="dash-module-title">
             <p class="dash-module-title-text">
                <span class="dash-module-title-number">3</span>Practice: Phase I
             </p>
            <p class="dash-module-title-icon">^</p>
          </div>
        </div>
        <div class="dash-module">
          <div class="dash-module-title">
             <p class="dash-module-title-text">
                <span class="dash-module-title-number">4</span>Practice: Phase II
             </p>
            <p class="dash-module-title-icon">^</p>
          </div>
        </div>
        <div class="dash-module">
          <div class="dash-module-title">
             <p class="dash-module-title-text">
                <span class="dash-module-title-number">5</span>Practice: Phase III
             </p>
            <p class="dash-module-title-icon">^</p>
          </div>
        </div>
        <div class="dash-module">
          <div class="dash-module-title">
             <p class="dash-module-title-text">
                <span class="dash-module-title-number">6</span>Post-assessment
             </p>
            <p class="dash-module-title-icon">^</p>
          </div>
        </div>

    </section>

    `;
  }

  stateChanged(state: RootState) {
    this._user = state.user!.currentUser;
  }

  handleModuleTitleTap(e: Event) {
    let moduleContainer = e.path[0];
    let indices = [1, 2, 3];
    for (let index of indices) {
      if (moduleContainer.className == "dash-module") {
        break;
      };
      moduleContainer = e.path[index];
    };
    let collapse = moduleContainer.querySelector("iron-collapse");
    let titleIcon = moduleContainer.querySelector(".dash-module-title-icon");
    if (collapse.attributes.opened != null) {
      let opened = collapse.attributes.opened.nodeValue;
      collapse.removeAttribute("opened");
      titleIcon.setAttribute("style", "transform: rotate(0deg); transition: 0.1s");
    } else {
      collapse.setAttribute("opened", true);
      titleIcon.setAttribute("style", "transform: rotate(180deg); transition: 0.1s");
    }
  }

  /* For development purposes */
  _handleModuleItemClick() {
    store.dispatch(navigate("/interactive-base"));
  }

  firstUpdated() {
    //store.dispatch(updateLoadingAnimationState(false));
  }

}
