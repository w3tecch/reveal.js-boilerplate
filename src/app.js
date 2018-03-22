import './sass/main.scss';

import 'babel-polyfill';
import $ from 'jquery';
import Reveal from 'reveal.js';
import hljs from 'highlight.js';


$('#slides').append('<section><h1>Test 1</h1></section>');
$('#slides').append('<section><h1>Test 2</h1><pre><code class="javascript">const a = x => x; return a(2);</code></pre></section>');


Reveal.initialize({
  center: false,
  margin: 0,
  width: "100%",
  height: "100%",
});

hljs.initHighlightingOnLoad();
