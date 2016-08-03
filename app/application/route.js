import Ember from 'ember';
const { A, Route } = Ember;

export default Route.extend({
  model() {
    return {
      links: A([
        {
          linkTo: 'home',
          text: 'Home',
          type: 'linkTo'
        },
        {
          linkTo: 'ember-consulting',
          text: 'Ember Consulting',
          type: 'linkTo'
        },
        {
          linkTo: 'open-source',
          text: 'Open Source',
          type: 'linkTo'
        },
        {
          linkTo: 'contact',
          text: 'Contact',
          type: 'linkTo'
        },
        {
          href: 'http://blog.shipshape.io',
          text: 'Blog',
          type: 'href'
        }
      ])
    };
  }
});
