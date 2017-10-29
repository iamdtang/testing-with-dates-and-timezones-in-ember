import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import { click } from 'ember-native-dom-helpers';
import { freezeDateAt, unfreezeDate } from 'ember-mockdate-shim';

moduleForComponent('date-range-picker', 'Integration | Component | date range picker', {
  integration: true,
  beforeEach() {
    // October 29th, 2017 5:14:36
    // The month integer begins with 0 for January
    freezeDateAt(new Date(2017, 9, 29, 5, 14, 36));
  },
  afterEach() {
    unfreezeDate();
  }
});

// test('onchange is invoked with the from and to dates when Last 7 days is clicked', function(assert) {
//   let handleChange = this.set('handleChange', sinon.spy());
//   this.render(hbs`{{date-range-picker onchange=handleChange}}`);
//   click('#last-7-days');
//   let [ from, to ] = handleChange.getCall(0).args;
//   assert.equal(from, '2017-10-22');
//   assert.equal(to, '2017-10-28');
// });

test('onchange is invoked with "from" and "to" as ISO 8601 strings in UTC when Last 7 days is clicked', function(assert) {
  let handleChange = this.set('handleChange', sinon.spy());
  this.render(hbs`{{date-range-picker onchange=handleChange}}`);
  click('#last-7-days');
  let [ from, to ] = handleChange.getCall(0).args;
  assert.equal(from, '2017-10-22T07:00:00.000Z');
  assert.equal(to, '2017-10-29T06:59:59.999Z');
});
