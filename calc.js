// let calculator = {
//     sum(){
//         return this.a + this.b;
//     },

//     mul(){
//         return this.a * this.b;
//     },

//     read(){
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


// let ladder = {
//     step: 0,
//     stepMax: 5,

//     // height(){
//     //     console.log(this.stepMax)
//     // },

//     up(){
//         if(this.step !== this.stepMax){
//             this.step++;
//         } else{
//             alert("max step reached");
//         }
//     },
//     down(){
//         this.step --;
//     },
//     showStep: function(){
//         console.log(this.step);
//     }
// };

// ladder.up(); //go up one step 
// ladder.up(); 
// ladder.up(); 
// ladder.up(); 
// ladder.up(); 
// ladder.down(); //go down 1 step
// ladder.height(5) //will not increase passed 5
// ladder.showStep(); //show what step you are on. 1 in this case