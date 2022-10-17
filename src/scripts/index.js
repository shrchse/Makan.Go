/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/main.css';
import './views/component/jumbotron-component.js';
import './views/component/footer-component.js';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
