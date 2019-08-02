/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css, html, property, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store, RootState } from '../store.js';

import { mouseIcon } from './my-icons.js';

// These are the actions needed by this element.
import { increment, decrement } from '../actions/counter.js';

// We are lazy loading its reducer.
import counter from '../reducers/counter.js';
store.addReducers({
  counter
});

// These are the elements needed by this element.
import './counter-element.js';

import '/node_modules/@polymer/paper-button/paper-button.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

@customElement('view-article-residency-program')
export class ViewArticleResidencyProgram extends connect(store)(PageViewElement) {
  @property({type: Number})
  private _clicks = 0;

  @property({type: Number})
  private _value = 0;

  static get styles() {
    return [
      SharedStyles,
      css`
      .float-center-button-container{
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: center
      }
      `
    ];
  }

  protected render() {
    return html`

      <section class="article-hero">
        <p class="article-hero-pre-heading">PROGRAMS</p>
        <p class="article-hero-heading">ML and Data Engineering Residency Program</p>
        <p class="article-hero-subheading">Highly skilled engineers from the tech. industry formally joining the project to complete self-directed, interest-area projects on a quarterly basis</p>
        <div class="article-hero-scroll-cue">
          <p class="article-hero-scroll-cue-text">Scroll to read more</p>
          ${mouseIcon}
        </div>
      </section>

      <section class="article-section scrollspy-target" id="summary">
        <p class="article-section-pre-title">Summary</p>
        <h2 class="article-section-title">What would it be like to participate in the program?</h2>
        <p>Duis viverra viverra ligula sed suscipit. Etiam convallis, mauris in luctus ultrices, arcu elit efficitur quam, non fermentum nulla libero non dolor. Maecenas dictum rhoncus lacus. Aenean semper felis id mauris vulputate ornare. Mauris enim elit, sagittis eget convallis vitae, porttitor sed erat. Nunc sodales velit in metus facilisis auctor sit amet non purus. Praesent pulvinar tincidunt erat nec interdum. Nulla viverra orci vitae risus varius, eu dignissim nulla dignissim. Sed vitae semper velit. Aliquam ut bibendum nulla. Sed hendrerit quis eros vitae porta. In diam odio, mollis at pretium id, consectetur in tortor. Ut pretium libero sed vehicula bibendum. Nam sed nunc ligula.</p>
        <p>Donec mattis tortor vel tincidunt mattis. Quisque laoreet quam tempus semper porta. Nulla eget mauris eget massa malesuada eleifend et quis augue. Praesent lobortis arcu at justo lacinia, eget mollis ligula condimentum. Nunc eu lobortis nibh. Ut eu sapien vel dolor luctus rhoncus. Ut non magna accumsan, finibus lectus ac, laoreet neque. Aenean a tempus diam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
        <p>Vestibulum et nisi non nibh commodo faucibus. Duis quis turpis velit. Nam enim massa, posuere a varius ac, malesuada eu felis. Ut neque magna, faucibus sed nibh eget, cursus elementum leo. Donec quis magna a risus accumsan vestibulum. Nulla vulputate, libero eu interdum tempus, mauris magna cursus ligula, eget sagittis odio turpis vel sem. Aliquam erat volutpat. Mauris ultrices vel urna sed finibus. Phasellus laoreet eu mauris at tincidunt. Vestibulum in urna euismod, auctor enim at, cursus augue.</p>
      </section>

      <section class="article-section scrollspy-target" id="project-opportunities">
        <p class="article-section-pre-title">Project Opportunities</p>
        <h2 class="article-section-title">Freedom to pursue your interests</h2>
        <p>Duis viverra viverra ligula sed suscipit. Etiam convallis, mauris in luctus ultrices, arcu elit efficitur quam, non fermentum nulla libero non dolor. Maecenas dictum rhoncus lacus. Aenean semper felis id mauris vulputate ornare. Mauris enim elit, sagittis eget convallis vitae, porttitor sed erat. Nunc sodales velit in metus facilisis auctor sit amet non purus. Praesent pulvinar tincidunt erat nec interdum. Nulla viverra orci vitae risus varius, eu dignissim nulla dignissim. Sed vitae semper velit. Aliquam ut bibendum nulla. Sed hendrerit quis eros vitae porta. In diam odio, mollis at pretium id, consectetur in tortor. Ut pretium libero sed vehicula bibendum. Nam sed nunc ligula.</p>
        <p>Donec mattis tortor vel tincidunt mattis. Quisque laoreet quam tempus semper porta. Nulla eget mauris eget massa malesuada eleifend et quis augue. Praesent lobortis arcu at justo lacinia, eget mollis ligula condimentum. Nunc eu lobortis nibh. Ut eu sapien vel dolor luctus rhoncus. Ut non magna accumsan, finibus lectus ac, laoreet neque. Aenean a tempus diam.</p>
        <p>Duis viverra viverra ligula sed suscipit. Etiam convallis, mauris in luctus ultrices, arcu elit efficitur quam, non fermentum nulla libero non dolor. Maecenas dictum rhoncus lacus. Aenean semper felis id mauris vulputate ornare. Mauris enim elit, sagittis eget convallis vitae, porttitor sed erat. Nunc sodales velit in metus facilisis auctor sit amet non purus. Praesent pulvinar tincidunt erat nec interdum. Nulla viverra orci vitae risus varius, eu dignissim nulla dignissim. Sed vitae semper velit. Aliquam ut bibendum nulla. Sed hendrerit quis eros vitae porta. In diam odio, mollis at pretium id, consectetur in tortor. Ut pretium libero sed vehicula bibendum. Nam sed nunc ligula.</p>
        <p>Donec mattis tortor vel tincidunt mattis. Quisque laoreet quam tempus semper porta. Nulla eget mauris eget massa malesuada eleifend et quis augue. Praesent lobortis arcu at justo lacinia, eget mollis ligula condimentum. Nunc eu lobortis nibh. Ut eu sapien vel dolor luctus rhoncus. Ut non magna accumsan, finibus lectus ac, laoreet neque. Aenean a tempus diam.</p>
      </section>

      <section class="article-section scrollspy-target" id="faq">
        <p class="article-section-pre-title">FAQ</p>
        <h2 class="article-section-title">Frequently asked questions</h2>
        <p>Duis viverra viverra ligula sed suscipit. Etiam convallis, mauris in luctus ultrices, arcu elit efficitur quam, non fermentum nulla libero non dolor. Maecenas dictum rhoncus lacus. Aenean semper felis id mauris vulputate ornare. Mauris enim elit, sagittis eget convallis vitae, porttitor sed erat. Nunc sodales velit in metus facilisis auctor sit amet non purus. Praesent pulvinar tincidunt erat nec interdum. Nulla viverra orci vitae risus varius, eu dignissim nulla dignissim. Sed vitae semper velit. Aliquam ut bibendum nulla. Sed hendrerit quis eros vitae porta. In diam odio, mollis at pretium id, consectetur in tortor. Ut pretium libero sed vehicula bibendum. Nam sed nunc ligula.</p>
        <p>Donec mattis tortor vel tincidunt mattis. Quisque laoreet quam tempus semper porta. Nulla eget mauris eget massa malesuada eleifend et quis augue. Praesent lobortis arcu at justo lacinia, eget mollis ligula condimentum. Nunc eu lobortis nibh. Ut eu sapien vel dolor luctus rhoncus. Ut non magna accumsan, finibus lectus ac, laoreet neque. Aenean a tempus diam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
        <p>Vestibulum et nisi non nibh commodo faucibus. Duis quis turpis velit. Nam enim massa, posuere a varius ac, malesuada eu felis. Ut neque magna, faucibus sed nibh eget, cursus elementum leo. Donec quis magna a risus accumsan vestibulum. Nulla vulputate, libero eu interdum tempus, mauris magna cursus ligula, eget sagittis odio turpis vel sem. Aliquam erat volutpat. Mauris ultrices vel urna sed finibus. Phasellus laoreet eu mauris at tincidunt. Vestibulum in urna euismod, auctor enim at, cursus augue.</p>
        <p>Vestibulum et nisi non nibh commodo faucibus. Duis quis turpis velit. Nam enim massa, posuere a varius ac, malesuada eu felis. Ut neque magna, faucibus sed nibh eget, cursus elementum leo. Donec quis magna a risus accumsan vestibulum. Nulla vulputate, libero eu interdum tempus, mauris magna cursus ligula, eget sagittis odio turpis vel sem. Aliquam erat volutpat. Mauris ultrices vel urna sed finibus. Phasellus laoreet eu mauris at tincidunt. Vestibulum in urna euismod, auctor enim at, cursus augue.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac varius quam. Nunc vehicula ligula at est posuere, vel pellentesque nulla cursus. Aenean arcu purus, hendrerit interdum nisl sit amet, bibendum varius neque. Vivamus sed tempus nisi. Suspendisse nec efficitur tellus, id commodo lacus. Vestibulum pretium placerat nibh, sit amet rutrum diam gravida vel. Vestibulum tempus imperdiet justo, ac blandit lectus fringilla non. Mauris blandit faucibus porta. Phasellus quis velit diam. Aenean finibus facilisis urna, vel posuere quam finibus at. Nullam eget vehicula sem.</p>
      </section>
      <section class="article-section scrollspy-target" id="apply">
        <p class="article-section-pre-title">Apply</p>
        <h2 class="article-section-title">Applications close August 31st</h2>
        <p>Vestibulum et nisi non nibh commodo faucibus. Duis quis turpis velit. Nam enim massa, posuere a varius ac, malesuada eu felis. Ut neque magna, faucibus sed nibh eget, cursus elementum leo. Donec quis magna a risus accumsan vestibulum. Nulla vulputate, libero eu interdum tempus, mauris magna cursus ligula, eget sagittis odio turpis vel sem. Aliquam erat volutpat. Mauris ultrices vel urna sed finibus. Phasellus laoreet eu mauris at tincidunt. Vestibulum in urna euismod, auctor enim at, cursus augue.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
        <p>Vestibulum et nisi non nibh commodo faucibus. Duis quis turpis velit. Nam enim massa, posuere a varius ac, malesuada eu felis. Ut neque magna, faucibus sed nibh eget, cursus elementum leo. Donec quis magna a risus accumsan vestibulum. Nulla vulputate, libero eu interdum tempus, mauris magna cursus ligula, eget sagittis odio turpis vel sem. Aliquam erat volutpat. Mauris ultrices vel urna sed finibus. Phasellus laoreet eu mauris at tincidunt. Vestibulum in urna euismod, auctor enim at, cursus augue.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
     
        <div class="float-center-button-container">
            <paper-button class="primary-btn">Apply Here</paper-button>
        </div>

      </section>

    `;
  }

  private _counterIncremented() {
    store.dispatch(increment());
  }

  private _counterDecremented() {
    store.dispatch(decrement());
  }

  // This is called every time something is updated in the store.
  stateChanged(state: RootState) {
    this._clicks = state.counter!.clicks;
    this._value = state.counter!.value;
  }

}
