// alert('I am index.js');

const rect = {
    width: 150,
    height: 100,
    draw: function() {
       console.log('I am rectangle');
       this.printProperties()
    },
    printProperties: function(){
        console.log('This is Width', this.width);
        console.log('This is Height', this.height);
    }
}

rect.draw()

const anotherObj = {
    width: 50,
    height: 46,
    print: rect.printProperties
}

anotherObj.print();

//Factory Pattern

const createRect = (width, height) => {
    return {
        width: width,
        height: height,
        draw: function() {
           console.log('I am rectangle');
           this.printProperties()
        },
        printProperties: function(){
            console.log('This is Width', this.width);
            console.log('This is Height', this.height);
        }
    }
}

createRect(10,5).draw()


// Constructor pattern

const Rectangle = function(width, height){
    this.width = width,
    this.height = height,

    this.draw = function(){
        console.log('I am rectangle in constructor pattern')
        this.printProperties()
    }

    this.printProperties = function(){
        console.log('This is width ' +  this.width);
        console.log('This is height ' + this.height);
    }
}


const rect3 = new Rectangle(10,5);
const rect4 = new Rectangle(11,6);

rect3.draw()
rect4.draw()
