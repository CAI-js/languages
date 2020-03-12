module.exports = text => text.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter(x => x);
