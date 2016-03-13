const tap = require('tap');
const renderCode =require('../lib/render-code');

tap.equal(renderCode(''), '<pre class="language-unknown"><code></code></pre>');
tap.equal(renderCode('test'), '<pre class="language-unknown"><code>test</code></pre>');
tap.equal(renderCode('test', 'js'), '<pre class="language-js"><code>test</code></pre>');
tap.equal(renderCode('test()', 'js'), '<pre class="language-js"><code><span class="token function" >test</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span></code></pre>');