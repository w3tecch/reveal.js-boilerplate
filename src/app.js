import './sass/main.scss';

import 'babel-polyfill';
import $ from 'jquery';
import Reveal from 'reveal.js';
import hljs from 'highlight.js';
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown';

import pageJS from './slides/000-page-js.slide';
import pageHTML from './slides/000-page-html.slide.html';
import pageMarkDown from './slides/000-page-md.slide.md';

// Star Wars Theme
import swLead from './slides/100-sw-lead.slide.html';
import swTitle from './slides/100-sw-title.slide.html';
import swOpening from './slides/100-sw-opening.slide.html';
import swGif from './slides/100-sw-gif.slide.html';

// -------------------------------------------------------------------------
// Slides
// -------------------------------------------------------------------------

const slides = [
  swLead,
  swTitle,
  swOpening,
  swGif,

  pageJS,
  pageHTML,
  pageMarkDown,
]
  .forEach(s => $('#slides').append(s));

// -------------------------------------------------------------------------
// Reveal.js Configuration
// -------------------------------------------------------------------------

Reveal.initialize({
  center: false,
  margin: 0,
  width: "100%",
  height: "100%",
});

RevealMarkdown.initialize();

hljs.initHighlightingOnLoad();
