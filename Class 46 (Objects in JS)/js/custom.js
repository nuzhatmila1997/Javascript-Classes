// Create an object:
// It is a common practice to declare objects with the const keyword.
const car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  /* 
  In the example above, this refers to the person object.

  I.E. this.firstName means the firstName property of this.

  I.E. this.firstName means the firstName property of person.
  What is this?
    In JavaScript, the this keyword refers to an object.

    Which object depends on how this is being invoked (used or called).

    The this keyword refers to different objects depending on how it is used:

        In an object method, this refers to the object.
        Alone, this refers to the global object.
        In a function, this refers to the global object.
        In a function, in strict mode, this is undefined.
        In an event, this refers to the element that received the event.
        Methods like call(), apply(), and bind() can refer this to any object.
        
    The this Keyword
        In a function definition, this refers to the "owner" of the function.

        In the example above, this is the person object that "owns" the fullName function.

        In other words, this.firstName means the firstName property of this object.
  */