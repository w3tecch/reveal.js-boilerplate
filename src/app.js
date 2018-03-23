import './sass/main.scss';

import 'babel-polyfill';
import $ from 'jquery';
import Reveal from 'reveal.js';
import hljs from 'highlight.js';
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown';

import pageJS from './slides/000-page-js.slide';
import pageHTML from './slides/000-page-html.slide.html';
import pageMarkDown from './slides/000-page-md.slide.md';

// -------------------------------------------------------------------------
// Slides
// -------------------------------------------------------------------------

const slides = [
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
