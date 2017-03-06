# youGuessIt

Get the AMD module located at `youguessit.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'YouGuessIt': 'youguessit'
  }
});

require(['react', 'YouGuessIt'], function(React, YouGuessIt) {

  React.render(React.createElement(YouGuessIt), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
