console.log("HELLO this is working!, Hello node!");

var dog = {
  raining: true,
  noise : "woof",
  makeNoise: function() {
    if (this.raining === true){
    console.log(this.noise);
    }
  }
};
var cats = {
  raining: true,
  noise: "meow, meow",
  makeNoise: function(){
    if(this.raining === true){
      console.log(this.noise);
    }
  }
};
dog.makeNoise();
cats.makeNoise();

function massHysteria(cats, dog) {
  if (cats.raining === true && dog.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER!! MASS HYSTERIA");
  }
}
massHysteria(cats, dog);
