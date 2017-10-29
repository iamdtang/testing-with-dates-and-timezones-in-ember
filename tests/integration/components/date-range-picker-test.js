import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import { click } from 'ember-native-dom-helpers';
import { freezeDateAt, unfreezeDate } from 'ember-mockdate-shim';

moduleForComponent('date-range-picker', 'Integration | Component | date range picker', {
  integration: true,
  beforeEach() {
    freezeDateAt(new Date(2017, 9, 29, 5, 14, 36)); // Oct 29th, 2017 5:14:36
  },
  afterEach() {
    unfreezeDate();
  }
});

test('onchange is invoked with the from and to dates when Last 7 days is clicked', function(assert) {
  let handleChange = this.set('handleChange', sinon.spy());
  this.render(hbs`{{date-range-picker onchange=handleChange}}`);
  click('#last-7-days');
  let [ from, to ] = handleChange.getCall(0).args;
  assert.equal(from, '2017-10-22');
  assert.equal(to, '2017-10-28');
});