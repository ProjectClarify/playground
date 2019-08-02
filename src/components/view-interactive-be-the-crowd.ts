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
import { checkout } from '../actions/shop.js';

import { mouseIcon } from './my-icons.js';

// We are lazy loading its reducer.
import shop, { cartQuantitySelector } from '../reducers/shop.js';
store.addReducers({
  shop
});

// These are the elements needed by this element.
import './shop-products.js';
import './shop-cart.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import { addToCartIcon } from './my-icons.js';

@customElement('view-interactive-be-the-crowd')
export class ViewInteractiveBeTheCrowd extends connect(store)(PageViewElement) {
  @property({type: Number})
  private _quantity = 0;

  @property({type: String})
  private _error = '';

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
      `
    ];
  }

  protected render() {
    return html`

      <section class="article-hero">
        <p class="article-hero-pre-heading">DATA INTERACTIVE</p>
        <p class="article-hero-heading">Explore crowd sourcing</p>
        <p class="article-hero-subheading">What is it like to be a crowd-sourced contributor to the data used in Project Clarify?</p>
        <div class="article-hero-scroll-cue">
          <p class="article-hero-scroll-cue-text">Scroll to try it yourself!</p>
          ${mouseIcon}
        </div>
      </section>

      <section class="article-section scrollspy-target" id="overview">
        <p class="article-section-pre-title">Overview</p>
        <h2 class="article-section-title">Instructions for crowd-sourcing</h2>
        <p>Duis viverra viverra ligula sed suscipit. Etiam convallis, mauris in luctus ultrices, arcu elit efficitur quam, non fermentum nulla libero non dolor. Maecenas dictum rhoncus lacus. Aenean semper felis id mauris vulputate ornare. Mauris enim elit, sagittis eget convallis vitae, porttitor sed erat. Nunc sodales velit in metus facilisis auctor sit amet non purus. Praesent pulvinar tincidunt erat nec interdum. Nulla viverra orci vitae risus varius, eu dignissim nulla dignissim. Sed vitae semper velit. Aliquam ut bibendum nulla. Sed hendrerit quis eros vitae porta. In diam odio, mollis at pretium id, consectetur in tortor. Ut pretium libero sed vehicula bibendum. Nam sed nunc ligula.</p>
        <p>Donec mattis tortor vel tincidunt mattis. Quisque laoreet quam tempus semper porta. Nulla eget mauris eget massa malesuada eleifend et quis augue. Praesent lobortis arcu at justo lacinia, eget mollis ligula condimentum. Nunc eu lobortis nibh. Ut eu sapien vel dolor luctus rhoncus. Ut non magna accumsan, finibus lectus ac, laoreet neque. Aenean a tempus diam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
        <p>Vestibulum et nisi non nibh commodo faucibus. Duis quis turpis velit. Nam enim massa, posuere a varius ac, malesuada eu felis. Ut neque magna, faucibus sed nibh eget, cursus elementum leo. Donec quis magna a risus accumsan vestibulum. Nulla vulputate, libero eu interdum tempus, mauris magna cursus ligula, eget sagittis odio turpis vel sem. Aliquam erat volutpat. Mauris ultrices vel urna sed finibus. Phasellus laoreet eu mauris at tincidunt. Vestibulum in urna euismod, auctor enim at, cursus augue.</p>
      </section>

      <section class="article-section scrollspy-target" id="interactive">
        <p class="article-section-pre-title">Interactive</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </section>

      <section class="article-section scrollspy-target" id="understand">
        <p class="article-section-pre-title">Understand</p>
        <h2 class="article-section-title">More details on the demonstration</h2>
        <p>Duis viverra viverra ligula sed suscipit. Etiam convallis, mauris in luctus ultrices, arcu elit efficitur quam, non fermentum nulla libero non dolor. Maecenas dictum rhoncus lacus. Aenean semper felis id mauris vulputate ornare. Mauris enim elit, sagittis eget convallis vitae, porttitor sed erat. Nunc sodales velit in metus facilisis auctor sit amet non purus. Praesent pulvinar tincidunt erat nec interdum. Nulla viverra orci vitae risus varius, eu dignissim nulla dignissim. Sed vitae semper velit. Aliquam ut bibendum nulla. Sed hendrerit quis eros vitae porta. In diam odio, mollis at pretium id, consectetur in tortor. Ut pretium libero sed vehicula bibendum. Nam sed nunc ligula.</p>
        <p>Donec mattis tortor vel tincidunt mattis. Quisque laoreet quam tempus semper porta. Nulla eget mauris eget massa malesuada eleifend et quis augue. Praesent lobortis arcu at justo lacinia, eget mollis ligula condimentum. Nunc eu lobortis nibh. Ut eu sapien vel dolor luctus rhoncus. Ut non magna accumsan, finibus lectus ac, laoreet neque. Aenean a tempus diam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
        <p>Vestibulum et nisi non nibh commodo faucibus. Duis quis turpis velit. Nam enim massa, posuere a varius ac, malesuada eu felis. Ut neque magna, faucibus sed nibh eget, cursus elementum leo. Donec quis magna a risus accumsan vestibulum. Nulla vulputate, libero eu interdum tempus, mauris magna cursus ligula, eget sagittis odio turpis vel sem. Aliquam erat volutpat. Mauris ultrices vel urna sed finibus. Phasellus laoreet eu mauris at tincidunt. Vestibulum in urna euismod, auctor enim at, cursus augue.</p>
      </section>

    `;
  }

  private _checkoutButtonClicked() {
    store.dispatch(checkout());
  }

  // This is called every time something is updated in the store.
  stateChanged(state: RootState) {
    this._quantity = cartQuantitySelector(state);
    this._error = state.shop!.error;
  }
}
