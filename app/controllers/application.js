import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    setRange(from, to) {
      this.setProperties({ from, to });
    }
  }
});
