let ladder = {
  step: 0,
  up() {
    this.step++;
    return this.step;
  },
  down() {
    this.step--;
    return this.step;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this.step;
  }
};




ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0