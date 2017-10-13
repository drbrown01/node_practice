
//constructor for charaters
function Character(name, profession, gender, age, strength, HitPoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.HitPoints = HitPoints;
  //method inside contructor that prinst all the stats for each character

  this.PrintStats = function PrintStats() {
    console.log("Name" + this.name +
                "\nProfession: " +this.profession +
                "\nGender: " + this.gender +
                "\nAge: "+ this.age +
                "\nStrength: "+ this.strength +
                "\nHitPoints: "+ this.HitPoints)
              };
    //method that prints weather a cahracter is alive or not
    this.IsAlive = function IsAlive() {
      if (this.HitPoints >0) {
        console.log(this.name + "is Alive!!");
        return true;
      }
      console.log(this.name + " is DEAD!");
      return false;
      };
};
    // this.attack = function Attack(character2) {



var warrior = new Character("Bob", "Fighter", "Male", 21, 50, 100);

warrior.PrintStats();
