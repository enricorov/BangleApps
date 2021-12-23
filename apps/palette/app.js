// require('module.js');

const BLACK = "#000000"
const WHITE = "#FFFFFF"

const GREY_DARK = "#272727"
const GREY = "#555555"
const GREY_BRIGHT = "#7d7d7d"

const RED = "#FF0000";
const GREEN = "#00FF00";
const BLUE = "#0000FF";

const PURPLE = "#ff00ff";
const YELLOW = "#ffff00";
const transp = -1;

const COLORS = [BLACK, WHITE, GREY_DARK, GREY, GREY_BRIGHT, RED, GREEN, BLUE, PURPLE, YELLOW];

const GFX_ORIGIN = {
  x: g.getWidth() / 2,
  y: g.getHeight() / 2
}

const left = 3;
const _screen_mid = g.getWidth() / 2;
const right = 176 - 4;

const border = 4;
const top_start = 25;

const pos_y = [
  30,
  100,
  160
];

// list of points to render
const LAYOUTS = {
  "3x2": [
    { type: "btn", origin:{x: left, y: pos_y[0]}, size: {w: 80, h: 80}, label:"One" },
      // { type: "btn", origin:{x: 10, y: 10}, size: {w: 80, h: 40}, label:"Two" },
      { type: "btn", origin:{x: 100, y: 170}, size: {w: 10, h: 70}, label:"Three" },
  { type: "btn", origin:{x: left, y: pos_y[2]}, label:"test" },
  // { type: "btn", origin:{x: _screen_mid + 2, y: pos_y[0]}, label:"test" },
  // { type: "btn", origin:{x: _screen_mid + 2, y: pos_y[1]}, label:"test" },
  // { type: "btn", origin:{x: _screen_mid + 2, y: pos_y[2]}, label:"test" },
  ],
  "OK": [
    {x: 50, y: 50, label: "OK"},
  ]
};

const BTN_STYLE_DEF = {
  col_border : PURPLE,
  col_bg : WHITE,
  col_text: BLACK,
}

const BTN_DEFAULT_SIZE = {
  w: 30,
  h: 46,
};

const BTN_CALL_DEF = function () { 

  console.log(`Tapped ${this.label}`);

}

class Window {
  constructor(label, bgCol) {
    this.label = "win_"
    this.label += (typeof label !== "undefined") ? label : "Unset";
    // console.log(`Constructing Window ${this.label}, args: ${arguments}`)

    this.bgCol = bgCol;
    this.layers = [];
  }

  push(layer) {
    layer.label=`${this.layers.length}_${layer.label}`;
    this.layers.push(layer);
  }
  pop() {
    this.layers.pop();
  }

  top_layer() {
    return this.layers[this.layers.length - 1];
  }

  render() {

    if (this.bgCol !== transp) {
      // console.log(`${this.label}: filling bg in ${this.bgCol}`);
      g.setColor(this.bgCol);
      g.fillRect(0, 0, g.getWidth(), g.getHeight());
    }


    let i = 0;
    this.layers.forEach((lyr) => {
      // console.log(`Rendering Layer ${i} ${lyr.label}`)
      i++;
      lyr.render();
    });
  }
}

class Layer {

  constructor(label) {

    this.layout = [];
    this.label = "lyr_"

    this.label += (typeof label !== "undefined") ? label : "Unset";
    console.log(`Constructing Layer ${this.label}, args: ${arguments}`)
    this.items = [];
    // console.log(`bg is ${bg} type ${typeof bg}`)

  }

  add_features(new_layout) {

    for (let i = 0; i < new_layout.length; i++) {
      
      let feature = new_layout[i];
      let type = feature.type;
      // this.type = (typeof type !== "undefined") ? type : "Unset";
      if (typeof type !== "undefined") {
        // console.log(`Parsing feature: ${JSON.stringify(feature)}`)
        if (type === "btn") {
          let item = new Button();

          item.label = (typeof feature.label !== "undefined") ? feature.label : "undef";
          item.style = (typeof feature.style !== "undefined") ? feature.style : BTN_STYLE_DEF;
          item.origin = (typeof feature.origin !== "undefined") ? feature.origin : GFX_ORIGIN;
          item.size = (typeof feature.size !== "undefined") ? feature.size : BTN_DEFAULT_SIZE;
          
        }
      }
      else {
        console.log(`Undefined entry: ${type}`);
      }
      
      this.layout.push(item);
      // console.log(`Added new item: ${JSON.stringify(item)}`)

    }
  }

  push(button) {
    this.items.push(button);
  }

  setLabel(label) {
    this.label = label;
  }

  parseTaps(xy) {
    this.items.forEach(item => {
      // // print(item)
      if (item.was_tapped(xy)) {
        // pass parent layer to the tapped button
        item.callback(this);
      }
    });
  }

  render() {

    this.layout.forEach((item) => {

      item.render();
    });
  }
}

class Button {

  constructor(){

      this.origin = GFX_ORIGIN;
      this.style = BTN_STYLE_DEF;
      this.label = "Blank";

      this.callback = {
        "short_tap" : BTN_CALL_DEF
      }

      this.size = BTN_DEFAULT_SIZE;
    }
    
    was_tapped(xy) {
      var x = xy.x;
      var y = xy.y;
      
      let x1 = this.origin.x;
      let y1 = this.origin.y;
      let x2 = this.origin.x + this.size.h;
      let y2 = this.origin.y + this.size.w;

    if ((x > x1 && x < x2) && (y > y1 && y < y2)) {
      return true;
    }
    else {
      return false;
    }
  }
  set_label(label) {
    this.label = label;
    return this; // for chaining
  }

  set_style(style) {
    // keep features if we only pass some colors
    this.style.col_bg = (is_undefined(style.col_bg)) ? this.style.col_bg : style.col_bg;
    this.style.col_border = (is_undefined(style.col_border)) ? this.style.col_border : style.col_border;
    this.style.col_text = (is_undefined(style.col_text)) ? this.style.col_text : style.col_text;
    return this;
  }

  set_origin(origin) {
    this.origin = origin;
    return this;
  }

  set_size(size) {
    this.size = size;
    return this;
  }
  
  render() {
    
    let x1 = this.origin.x;
    let y1 = this.origin.y;
    let x2 = this.origin.x + this.size.w;
    let y2 = this.origin.y + this.size.h;

    // console.log(`Rendering Button ${JSON.stringify(this.label)}`);
    // console.log(`  ${x1}, ${y1} | ${x2}, ${y2}`)
    // console.log(`  ${JSON.stringify(this.style)}`)
    
    g.setColor(this.style.col_bg).fillRect(x1, y1, x2, y2);
    g.setColor(this.style.col_border).drawRect(x1, y1, x2, y2);
    g.setColor(this.style.col_text);

    g.setFontAlign(0, 0).setFont("Vector", 20).drawString(this.label, (x1+x2)/2, (y1+y2)/2);
  }

  set_origin(origin) {
      this.origin = origin;
      return this;
    }
  }
  
  function is_undefined(variable) {
    if (typeof variable !== "undefined") {
      return false;
    }
    else {
      return true;
    }
  }
  
  // --------- Headers finished. Onto Timer stuff.
  
  let tickTimer;
  
  function clearTickTimer() {
    if (tickTimer) {
      clearTimeout(tickTimer);
      tickTimer = undefined;
    }
  }
  
  function queueNextTick() {
    clearTickTimer();
    tickTimer = setTimeout(tick, 100);
  }
  
  function tick() {
    // console.log("tick");
    draw();
    queueNextTick();
  }

  console.log(`So far so good..`)
  
  // --------- Timer finished. Onto drawing stuff.
  
  // Clear the screen once, at startup
  g.clear();

  var main_window = new Window("palette", BLACK);
  var layer_buttons = new Layer();
  
var grid_layout = [];

const top_left_x = 3;
const top_left_y = 3;
const width = 20;
const height = 20;
const spacing = 3

const N =10;
const M =10;
// Generate sample layout
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    
    grid_layout.push(
      {
        type: "btn", 
        origin: {
        x: top_left_x + (width + spacing)*i ,
        y: top_left_y + (height + spacing)*j,
        },
        size: {w:width, h:height}, 
        // label: `${i},${j}`,
        style: {col_bg: (i%2===1)?GREEN:RED, col_text: BLACK, col_border:WHITE}
      });
    }
}

var ok_layout = [
  {
    type: "btn",
    origin: {
      x: 3, y: 3
    },
    size: {w:_screen_mid, h:40},
    style: {col_bg:RED},
    label: ""
  },
  {
    type: "btn",
    origin: {
      x: 3, y: 100
    },
    size: {w:40, h:40},
    style: {col_bg:RED},
    label: ""
  },
  {
    type: "btn",
    origin: {
      x: 3,
      y: 3
    },
    size: {w:40, h:40},
    style: {col_bg:RED},
    label: ""
  },
]

// add it to the layer
// layer_buttons.add_features(grid_layout);
layer_buttons.add_features(ok_layout);

// make some changes
layer_buttons.layout[3].set_style(
  {
    col_bg: PURPLE
  }
).set_label("xx").set_origin({x:39, y:80});

main_window.push(layer_buttons);
main_window.render();

console.log(`Created all.`)

Bangle.on('touch', function (button, xy) {

  console.log(`Tapped ${JSON.stringify(xy)}`)
  // window.render();

});

function draw() {
  main_window.render();
}

// Tick
tick();