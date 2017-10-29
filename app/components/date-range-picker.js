import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({
  actions: {
    selectLast7Days() {
      let from = moment().subtract(7, 'days').format('YYYY-MM-DD');
      let to = moment().subtract(1, 'day').format('YYYY-MM-DD');
      this.get('onchange')(from, to);
    }
  }
});
