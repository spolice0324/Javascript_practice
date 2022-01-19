const dynamicType = { //객체 리터럴 구문
    
    put : function(message) {
        
        if (typeof message == 'number')
        {
            this.number = message;
            console.log("right");
        }
        else 
            console.log("error of put part");

    },

    change : function(value) {
        this.value = this.number;
        if (value === 'String')
            this.value = String(this.number);
        else if (value === 'Number')
            this.value = Number(this.number);
        else if (value === 'Array')
            this.value = [this.number];
        else if (value === 'object')
            this.value = new Object(this.number);
       // else 
       // console.log("error of change part");

    },

    printType : function() {
        console.log(this.value);

    }
};

dynamicType.put(42);
dynamicType.change("String");
dynamicType.printType();

dynamicType.put(42);
dynamicType.change("Array");
dynamicType.printType();

dynamicType.put(42);
dynamicType.change("Number");
dynamicType.printType();

dynamicType.put(42);
dynamicType.change("Object");
dynamicType.printType();
