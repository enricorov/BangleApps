// module.js

require('colors');

const GFX_ORIGIN = {
    x: 0,
    y: 0       
}

const BTN_STYLE_DEF = {
    col_border : PURPLE,
    col_bg : GREY_BRIGHT,
    col_text: RED,
}

const BTN_DEFAULT_SIZE = 30;

const BTN_CALL_DEF = function () { 

    console.log(`Tapped ${this.label}`);

}
