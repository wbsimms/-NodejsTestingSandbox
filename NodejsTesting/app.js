var tm = require("./scripts/testModule");
var ConsoleEnd = require("ConsoleEnd");
var mongoose = require("mongoose");

var testMod = new tm();

console.log('Hello world');
console.log(testMod.otherFunction("asdfaf" +
    "ASDFAS"));

mongoose.connect("mongodb://localhost/test");

var kittyScheme = mongoose.Schema({
    name: String,
    type : { type: [String], index: 1 }
});

kittyScheme.methods.speak = function() {
    var greeting = this.name ? "My name is " + this.name : "Sad unnamed kitty";
    console.log(greeting);
};
var Cat = mongoose.model("Cat", kittyScheme);
var kitty = new Cat({ name: "Fluffball"+new Date().getUTCMilliseconds(), type: "cat" });
kitty.speak();


kitty.save(function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Meow");
});

Cat.find({type : "cat"}, "name",function(err, cats) {
    console.log("I have " + cats.length + " cats");
    cats.forEach(function(val, index) {
        console.log(val.name + index);
    });
});

new ConsoleEnd().ListenToEnd();