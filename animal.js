// class Animal{
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed = speed;
//         alert(`${this.name} runs with speed ${this.speed}`)
//     }
//     stop(){
//         this.speed = 0;
//         alert(`${this.name} stands still.`);
//     }
// }

// let animal = new Animal('Gerald');

// class Giraffe extends Animal{
//     hide(){
//         alert(`${this.name} hides!`);
//     }
//     stop(){
//         // ..now this will be used for giraffe.stop()
//             //instead of the stop method from the Animal class
//             super.stop(); //this will be the animal stop
//             this.hide(); //then our animal will hide
//     }
// }

// let giraffe = new Giraffe('chad');

// giraffe.run(5);
// giraffe.hide();