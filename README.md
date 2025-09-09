
# Green Earth

<!-- **************************************************************************************** -->


#### 1) What is the difference between var, let, and const?
* Ans -var:
* I declared outside a function, it globally scoped.We also can be change update.

* let and const:
* Block-scoped only inside the block where i declared.let-we can change update.But const we can't Change update.


<!-- **************************************************************************************** -->



#### 2) What is the difference between map(), forEach(), and filter()? 
1. map()
* Creates a new array function to each element.Returns A new array.if i want transform data.then i use it.

2. forEach()

* it's a loop every element,no returns.if i need only some push,update etc,then i use it.

3. filter()

* Creates a new array but defended condition. A new array.if i want specific element ,then i use it.



<!-- **************************************************************************************** -->


#### 3) What are arrow functions in ES6?
* Arrow functions shorter way to write functions in ES6y.example:

* const square = x => x * x;
* console.log(square(5));


<!-- **************************************************************************************** -->

#### 4) How does destructuring assignment work in ES6?

* Destructuring assignment in ES6 is separate variables.here is example:

* const person = { name: "Noman", age: 22 };
* const { name, age } = person;
* console.log(name, age); // Noman 22

<!-- **************************************************************************************** -->
#### 5) Explain template literals in ES6. How are they different from string concatenation?

* Template literals are a new way to work with strings in ES6.use (` or ' ' or " ").

* here is example:
* const name = "Noman";
* const age = 22;

<!-- **last two line  different from string concatenation** -->

* console.log("My name is " + name + " and I am " + age + " years old.");

* console.log(`My name is ${name} and I am ${age} years old.`);
