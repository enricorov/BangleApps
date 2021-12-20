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

const GFX_ORIGIN = {
  x: g.getWidth() / 2,
  y: g.getHeight() / 2
}

const left = 3;
const _screen_mid = g.getWidth() / 2;
const right = 176 - 4;

const spacing = 4;
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
    { id: "btn", origin:{x: left, y: pos_y[0]}, size: {w: 80, h: 80}, label:"One" },
      // { id: "btn", origin:{x: 10, y: 10}, size: {w: 80, h: 40}, label:"Two" },
      { id: "btn", origin:{x: 100, y: 170}, size: {w: 10, h: 70}, label:"Three" },
  { id: "btn", origin:{x: left, y: pos_y[2]}, label:"test" },
  // { id: "btn", origin:{x: _screen_mid + 2, y: pos_y[0]}, label:"test" },
  // { id: "btn", origin:{x: _screen_mid + 2, y: pos_y[1]}, label:"test" },
  // { id: "btn", origin:{x: _screen_mid + 2, y: pos_y[2]}, label:"test" },
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
      let id = feature.id;
      // this.id = (typeof id !== "undefined") ? id : "Unset";
      if (typeof id !== "undefined") {
        console.log(`Parsing feature: ${JSON.stringify(feature)}`)
        if (id === "btn") {
          let item = new Button();

          item.label = (typeof feature.label !== "undefined") ? feature.label : "undef";
          item.style = (typeof feature.style !== "undefined") ? feature.style : BTN_STYLE_DEF;
          item.origin = (typeof feature.origin !== "undefined") ? feature.origin : GFX_ORIGIN;
          item.size = (typeof feature.size !== "undefined") ? feature.size : BTN_DEFAULT_SIZE;
          
        }
      }
      else {
        console.log(`Undefined entry: ${id}`);
      }
      
      this.layout.push(item);
      console.log(`Added new item: ${JSON.stringify(item)}`)

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

  set_label(label) {
    this.label = label;
    return this; // for chaining
  }

  set_style(style) {
    this.style = style;
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
    let x2 = this.origin.x + this.size.h;
    let y2 = this.origin.y + this.size.w;

    console.log(`Rendering Button ${JSON.stringify(this.label)} | og ${JSON.stringify(this.origin)} | size : ${JSON.stringify(this.size)}`);
    console.log(`  ${x1}, ${y1} | ${x2}, ${y2}`)
    console.log(`  ${JSON.stringify(this.style)}`)
    
    // console.log(`lol ${lol}`)

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

console.log(`So far so good..`)

// Clear the screen once, at startup
g.clear();

var layer_buttons = new Layer();

// var ok_layout = [
//   {id: "btn", origin: {x: 3, y:3}, size: {w:50, h:50}, label: "", style: {col_bg: GREEN, col_text: BLACK, col_border:BLACK}}
// ]

var ok_layout = [];

const top_left_x = 3;
const top_left_y = 3;
const width = 40;
const height = 40;
const spacing = 3

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    
    ok_layout.push(
      {
        id: "btn", 
        origin: {
        x: top_left_x + (width + spacing)*i ,
        y: top_left_y + (height + spacing)*j,
        },
        size: {w:width, h:height}, 
        label: `${i},${j}`,
        style: {col_bg: GREEN, col_text: BLACK, col_border:WHITE}
      });
    }
}

layer_buttons.add_features(ok_layout);

g.setColor(BLACK);
g.fillRect(0, 0, g.getWidth(), g.getHeight())

layer_buttons.render();

console.log(`Created all.`)

Bangle.on('touch', function (button, xy) {

  console.log(`Tapped ${JSON.stringify(xy)}`)
  // window.render();

});