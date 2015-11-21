function TestModule() {
    this.variable = 1;
    this.publicFunction = function() {
        return "hiya";
    };
    this.var = 2342;
    this.publicVar = 20;
}

TestModule.prototype.otherFunction = function (text) {
    console.log("here! "+ text);
    if (text != undefined)    
        return text.toLowerCase();
    return "asfd";
};

module.exports = TestModule;