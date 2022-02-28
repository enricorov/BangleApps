/*
 *
 * Ruler format :
 * 
 *    <------------------HOURS----------------><---------------------DAYS---------------------->
 *    |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | |
 *    22 0  2  4  6  8  10 12 14 16 18 20 22 0  2  4  6  8  10 12 14 16 18 20 22 24 26 28 30 1 2
 *
 * Hours part is (hour_size * 26) pixels
 * Days part is (hour_size * 33) pixels
 * Total size is (hour_size * 59) pixels
 * 
 * In "normal" hour mode, position is depending only on the number of minutes since midnight
 * In "animRunning" day mode, position is depending on the day
 * 
 */
Graphics.prototype.setFontLECO1976Regular42 = function (scale) {
    // Actual height 42 (41 - 0)
    g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAA/AAAAAAAAH/AAAAAAAA//AAAAAAAP//AAAAAAB///AAAAAAP///AAAAAB////AAAAAf////AAAAD////4AAAAf////AAAAH////4AAAA////+AAAAA////wAAAAA///+AAAAAA///gAAAAAA//8AAAAAAA//gAAAAAAA/4AAAAAAAA/AAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////gD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4B/gH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/wB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/wB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAH+AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"), 46, atob("ERkmHyYmJiYmJCYmEQ=="), 60 + (scale << 8) + (1 << 16));
};

Graphics.prototype.setFontLECO1976Regular22 = function (scale) {
    // Actual height 22 (21 - 0)
    g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/nA/+cD/5wP/nAAAAAAAAPwAA/gAD+AAPwAAAAAD+AAP4AA/gAAAAAAAAAAAAAcOAP//A//8D//wP//AHDgAcOAP//A//8D//wP//AHDgAAAAAAAAH/jgf+OB/44H/jj8OP/w4//Dj/8OPxw/4HD/gcP+Bw/4AAAAAAAP+AA/8AD/wQOHHA4c8D//wP/8A//gAD4AAfAAH/8A//wP//A84cDjhwIP/AA/8AB/wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8ABwAAAAAAAAD8AAP4AA/gAD8AAAAAAAAAAAEAAD+AB//A///v/D//gB/wABwAAAAAADgAA/wAf/4P8///wf/4AP8AAOAAAAAAAAAyAAHcAAPwAD/gAP/AA/8AA/AAH8AAMwAAAAAAAAAAAAADgAAOAAA4AAf8AD/wAP/AA/8AAOAAA4AADgAAAAAAAAAAD8AAfwAB/AAD8AAAAAAAADgAAOAAA4AADgAAOAAA4AADgAAAAAAAAAADgAAOAAA4AADgAAAAAAAAABwAB/AA/8A//gP/gA/wADwAAIAAAAAAD//wP//A//8D//wOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA4AcDgBwOAHA//8D//wP//A//8AABwAAHAAAcAAAAAAAA+f8D5/wPn/A+f8DhxwOHHA4ccDhxwP/HA/8cD/xwP/HAAAAAAAAOAHA4AcDhxwOHHA4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/wAP/AA/8AD/wAAHAAAcAABwAAHAA//8D//wP//A//8AAAAAAAA/98D/3wP/fA/98DhxwOHHA4ccDhxwOH/A4f8Dh/wOH/AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccDh/wOH/A4f8Dh/wAAAAAAAD4AAPgAA+AADgAAOAAA4AADgAAP//A//8D//wP//AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA//8D//wP//A//8AAAAAAAAOA4A4DgDgOAOA4AAAAAAAAOA/A4H8DgfwOA/AAAAAAAAB4AAPwAA/AAD8AAf4ABzgAPPAA8cAHh4AAAAAAAAAAAAHHAAccABxwAHHAAccABxwAHHAAccABxwAHHAAAAAAAAAOHAA4cADzwAPPAAf4AB/gAD8AAPwAAeAAB4AAAAAAAAA+AAD4AAPgAA+ecDh9wOH3A4fcDhwAP/AA/8AD/wAP/AAAAAAAAAP//4///j//+P//44ADjn/OOf845/zjnHOP8c4//zj//OP/84AAAAAAAP//A//8D//wP//A4cADhwAOHAA4cAD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA//8D//wP9/A/j8AAAAAAAA//8D//wP//A//8DgBwOAHA4AcDgBwOAHA4AcDgBwOAHAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA8A8D//wH/+AP/wAf+AAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4ccDhxwOAHA4AcAAAAAAAA//8D//wP//A//8DhwAOHAA4cADhwAOHAA4cADgAAOAAAAAAD//wP//A//8D//wOAHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA//8D//wP//A//8ABwAAHAAAcAABwAP//A//8D//wP//AAAAAAAAP//A//8D//wP//AAAAAAAAOAHA4AcDgBwOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA//8D//wP//A//8AHwAA/AAP8AB/wAPn/A8f8DB/wIH/AAAAAAAAP//A//8D//wP//AAAcAABwAAHAAAcAABwAAHAAAAAAAAP//A//8D//wP//Af8AAP+AAH/AAD8AAHwAD/AB/wAf8AP+AA//8D//wP//AAAAAAAAP//A//8D//wP//AfwAAfwAAfwAAfwAAfwP//A//8D//wAAAAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHAA4cADhwAOHAA/8AD/wAP/AA/8AAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//+P//4///j//+AAA4AADgAAAP//A//8D//wP//A4eADh+AOH8A4f4D/3wP/HA/8MD/wQAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA4AADgAAOAAA//8D//wP//A//8DgAAOAAA4AADgAAAAAA//8D//wP//A//8AABwAAHAAAcAABwP//A//8D//wP//AAAADAAAPgAA/wAD/4AB/8AA/8AAfwAB/AA/8Af+AP/AA/wAD4AAMAAA4AAD+AAP/gA//8AH/wAB/AAf8Af/wP/4A/4AD/gAP/4AH/8AB/wAB/AB/8D//wP/gA/gADgAAIABA4AcDwDwPw/Afn4Af+AA/wAD/AA//AH5+A/D8DwDwOAHAgAEAAAAP/AA/8AD/wAP/AAAf8AB/wAH/AAf8D/wAP/AA/8AD/wAAAAAAAADh/wOH/A4f8Dh/wOHHA4ccDhxwOHHA/8cD/xwP/HA/8cAAAAAAAAf//9///3///f//9wAA3AADcAAMAAAOAAA/gAD/wAH/8AB/8AA/wAAPAAAEAAAAHAADcAANwAB3///f//9///wAA"), 32, atob("BwYLDg4UDwYJCQwMBgkGCQ4MDg4ODg4NDg4GBgwMDA4PDg4ODg4NDg4GDQ4MEg8ODQ8ODgwODhQODg4ICQg="), 22 + (scale << 8) + (1 << 16));
};

Graphics.prototype.setFontLECO1976Regular38 = function (scale) {
    // Actual height 34 (33 - 0)
    g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAAAAAH8AAAAAAH8AAAAAAH8AAAAAAH8AAAAAAH8AAAAAAH8AAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAB8AAAAAAP8AAAAAD/8AAAAAf/8AAAAH//8AAAA///8AAAH///8AAB////4AAP///+AAA////wAAA///8AAAA///gAAAA//8AAAAA//AAAAAA/4AAAAAA/AAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/gAAH8AA/gAAH8AA/gAAH8AA/gAAH8AA/gAAH8AA/gAAH8AA/gAAH8AA/gAAH8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAH8AA/gAAH8AA/gAAH8AA/gAAH8AA/gAAH8AA/gAAH8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AAAAAAH8AAAAAAH8AAAAAAH8AAAAAAH8AAAAAAH8AAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8P//8AA/8P//8AA/8P//8AA/8P//8AA/8P//8AA/8P//8AA/8P//8AA/8P//8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA///4H8AA///4H8AA///4H8AA///4H8AA///4H8AA///4H8AA///4H8AA///4H8AA///wD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAH8AA/gAAH8AA/gAAH8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///4AAAA///4AAAA///4AAAA///4AAAA///4AAAA///4AAAA///4AAAA///4AAAAAAP4AAAAAAP4AAAAAAP4AAAAAAP4AAAAAAP4AAAAAAP4AAAAAAP4AAAAAAP4AAAA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///4/8AA///4/8AA///4/8AA///4/8AA///4/8AA///4/8AA///4/8AA///4/8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/AP//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/gP//8AA/AP//8AAAAAAAAAAAAAAAAAAAAAAAAAA/8AAAAAA/8AAAAAA/8AAAAAA/8AAAAAA/8AAAAAA/8AAAAAA/8AAAAAA/8AAAAAA/gAAAAAA/gAAAAAA/gAAAAAA/gAAAAAA/gAAAAAA/gAAAAAA/gAAAAAA/gAAAAAA/gAAAAAA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///4H8AA///4H8AA///4H8AA///4H8AA///4H8AA///4H8AA///4H8AA///4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/gP4H8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AA/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAH8AAAfwAH8AAAfwAH8AAAfwAH8AAAfwAH8AAAfwAH8AAAfwAH8AAAfwAH8AAAAAAAAAAAAAAAAAA"), 46, atob("DRQeGR4eHh4eHR4eDQ=="), 48 + (scale << 8) + (1 << 16));
    return g;
}

const SETTINGS_FILE = "pebbleDistance.json";
let settings;

function loadSettings() {
    settings = require("Storage").readJSON(SETTINGS_FILE, 1) || { 'bg': '#0f0', 'color': 'Green', 'avStep': 0.75 };
}
const smallClock = true;

const HEIGHT = g.getHeight();
const WIDTH = g.getWidth();
const XOFFSET = 7;
const YOFFSET = 4;

const RULER_XOFFSET = 10;
const ANIM_DELAY = 1000;
const ANIM_DURATION = 2000;
const LINE_INTERVAL = 5;
const MARK_0 = 42;
const MARK_5 = 12;
const MARK_15 = 22;
const MARK_30 = 32;
const NUM_LABELS = 59;

const mark1 = {
    x: 24 + XOFFSET,
    y: YOFFSET
};
const mark2 = {
    x: XOFFSET,
    y: YOFFSET
};

let hour_line_ypos = 84 + YOFFSET;

const line1_p1 = {
    x: 0,
    y: 84
};

const line1_p2 = {
    x: 143,
    y: 84
};

let line2_p1;
let line2_p2;

// const TEXT_OFFSET_X = -37;
const TEXT_OFFSET_X = XOFFSET + 30;
const TEXT_OFFSET_Y = 50;
// const font_offset_fix = 16;
const font_offset_fix = (smallClock ? 8 : 16);

let rect_text = {
    x: MARK_0 + TEXT_OFFSET_X,
    y: TEXT_OFFSET_Y
};

const ha = 2 * HEIGHT / 5 - 11;
const h2 = 3 * HEIGHT / 5 - 19;
const h3 = 7 * HEIGHT / 8 - 10;

const bgColor = "#000";
const fgColor = "#FFF";
const hourColor = "#FFF";
const lineColor = "#F00";

const COLOR_HOUR_MARK = "#fff";
//const COLOR_HALF_MARK = "#868686";
const COLOR_HALF_MARK = "#fff";
// const COLOR_HALF_MARK = "#FFFFFF";
// const COLOR_QUARTER_MARK = "#494d2e";
const COLOR_QUARTER_MARK = "#dddddd";
const COLOR_5MIN_MARK = "#ddd";

const markWidth = [MARK_0, MARK_5, MARK_5, MARK_15, MARK_5, MARK_5, MARK_30, MARK_5, MARK_5, MARK_15, MARK_5, MARK_5];

const labels_12h = [10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1];
const labels = [22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1];

function setHourLinePoints() {
    hour_line_ypos = HEIGHT / 2;

    // if (battery) {
    //   hour_line_ypos -= 11;
    // }

    line1_p1.y = line1_p2.y = hour_line_ypos;
    line2_p1 = line1_p1;
    line2_p2 = line1_p2;
    line2_p1.y++;
    line2_p2.y++;
}


let anim_phase = 0;
let anim_time = 0;
let animRunning = false;

function init() {

    // setColors();
    setHourLinePoints();

}

function draw() {


    g.reset();
    g.setColor(bgColor).fillRect(0, 0, WIDTH, HEIGHT);

    let i, j;
    let hour_offset, day_offset, yh, yd, y;
    const now = new Date();
    const hour_size = 12 * LINE_INTERVAL; // 12 marks, one every 5 minutes
    const hour_part_size = 26 * hour_size;

    // Pixel offset of the middle of the screen
    // Offset for hour mode, starting at 22
    hour_offset = ((now.getHours()+2) * hour_size) + (now.getMinutes() * hour_size / 60);
    // hour_offset = ((12+2) * hour_size) + (30 * hour_size / 60);
    // hour_offset = ((23 + 2) * hour_size) + (59 * hour_size / 60);
    // Offset for day mode
    day_offset = hour_part_size + now.tm_mday * hour_size;
    // day_offset = hour_part_size + 12 * hour_size;

    yd = hour_line_ypos - day_offset;
    yh = hour_line_ypos - hour_offset;
    // y = yh;

    // console.log(`hour_offset: ${hour_offset}`);
    
    if (animRunning === true) {
        let scaling = 10000; //slow
        // if (anim_phase == 1) {
        //     // Phase 1, move from hour to day
        //     y = ((yd - yh) * anim_time) / scaling + yh;
        // } else {
            // Phase 2, move from day to hour
        y = ((yh - yd) * anim_time) / scaling + yd;
        // }
        (anim_time < 15000 ? anim_time-=100 : 0);
        // console.log("y", y, "anim_time", anim_time);
    } else {
        y = yh;
    }


    // draw middle line

    g.setColor(lineColor).fillRect(0, hour_line_ypos - 1, WIDTH, hour_line_ypos + 1);
    //g.setColor(lineColor).drawRect(0, hour_line_ypos-1, WIDTH, hour_line_ypos+1);

    g.setColor(fgColor);

    for (i = 0; i < NUM_LABELS; i++) {
        // console.log("i", i);
        for (j = 0; j < 12; j++) {
            if ((y > -20) && (y < HEIGHT + 20)) {
                if ((y >= 0) && (y < HEIGHT)) {
                    // console.log("drawing", i, j);
                    mark1.y = mark2.y = y;
                    mark2.x = mark1.x + markWidth[j];

                    // console.log(`${mark1.y}`)

                    if (j == 0) {
                        g.setColor(COLOR_HOUR_MARK);
                        console.log("HOUR_MARK")
                    } else if (j == 6) {
                        g.setColor(COLOR_HALF_MARK);
                        console.log("HALF_MARK")
                    } else if ((j == 3) || (j == 9)) {
                        g.setColor(COLOR_QUARTER_MARK);
                        console.log("QUARTER_MARK")
                    } else {
                        g.setColor(COLOR_5MIN_MARK);
                        console.log("5MIN_MARK")
                    }

                    // g.fillRect(mark1.x, mark1.y - 1, mark2.x, mark2.y + 1); 
                    g.drawRect(mark1.x, mark1.y - 1, mark2.x, mark2.y + 1);
                    // console.log(mark1.x, mark1.y - 1, mark2.x, mark2.y + 1); 
                }

                if (j == 0) {
                    text = `${labels[i]}`

                    g.setColor(hourColor);

                    // g.setFontLECO1976Regular22();
                    // g.setFontLECO1976Regular42();
                    (smallClock === true ? g.setFontLECO1976Regular22() : g.setFontLECO1976Regular38());

                    rect_text.y = y - font_offset_fix;
                    g.drawString(text, rect_text.x, rect_text.y);
                }
            }
            y += LINE_INTERVAL;
        }
    }

}


g.clear();
init();
// setInterval(draw, 15000); // refresh every 15s
draw();
Bangle.setUI("clock");