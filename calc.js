let calculator = {
    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    },

    read(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


let ladder = {

};

ladder.up(); //go up one step 
ladder.up(); 
ladder.down(); //go down 1 step
ladder.showstep(); //show what step you are on. 1 in this case