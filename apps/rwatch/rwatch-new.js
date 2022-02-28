class Feature {

  constructor(name) {
    this.name = name;

    this.ticks = [];
  }

  add(feature) {
    this.ticks.push(feature);
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }

  render() {
    // render ticks list
    for (var tick in this.ticks) {
      try {
        tick.redenr();
      } catch (TypeError) {
        console.log(`${tick.label} has no render()`)
      }
    }
  }
}

class Tick {

  constructor(label) {
    this.label = label;
    return this;
  }

  setParams(origin, length) {
    this.origin = origin;
    this.length = length;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }
}

function init() {
  // init stuff here?
}

// g.clear();
init();
let steve = new Feature("Ruler");
steve.introduceSelf();
tick = new Tick();

steve.add(tick);

steve.render();


// draw();
// setInterval(draw, 15000); // refresh every 15s
Bangle.setUI("clock");