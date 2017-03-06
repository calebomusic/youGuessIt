import React from 'react/addons';
import YouGuessIt from '../lib/youguessit.jsx';

describe('YouGuessIt', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <YouGuessIt/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('youguessit');
  });
});
