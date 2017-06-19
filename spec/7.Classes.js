describe("Classes", () => {

	it("are defined using class keyword", () => {
		class Animal {};
		expect(jasmine.any).toBeDefined();
	});

	it("new creates new instances", () => {
		class Animal {};
		let animal = new Animal();
		expect(jasmine.any).toBeDefined();
	});

	it("class instances are objects", () => {
		class Animal {};
		let animal = new Animal();
		expect(animal).toEqual(jasmine.any(Object));
	});

	it("you can get/set properties to class object like any object", () => {
		class Animal {};
		let animal = new Animal();
		animal.name = "puss";
		expect('puss').toEqual(animal.name);
	});

	it("instance methods are defined in the class", () => {
		class Animal {
			getName() { return "puss"; }
			salute(name) { return "hi " + name; }
		}
		let animal = new Animal();
		expect('puss').toBe(animal.getName());
		expect('hi joe').toBe(animal.salute("joe"));
	});

	it("instance methods can read instance properties through this", () => {
		class Animal {
			salute() { return "hi " + this.name; }
		}
		let animal = new Animal();
		animal.name = "puss";
		expect('hi puss').toBe(animal.salute());
	});

	it("without this it reads parent variables", () => {
		let name = "nobody";
		class Animal {
			salute() { return "hi " + name; }
		}
		let animal = new Animal();
		animal.name = "puss";
		expect('hi nobody').toBe(animal.salute());
	});

	it("uses this to call to its own methods", () => {
		class Animal {
			getName() { return "puss"; }
			salute() { return "hi " + this.getName(); }
		}
		let animal = new Animal();
		expect('hi puss').toBe(animal.salute());
	});

	it("without this it calls a parent function", () => {
		const getName = () => "noone";
		class Animal {
			getName() { return "puss"; }
			salute() { return "hi " + getName(); }
		}
		let animal = new Animal();
		expect('hi noone').toBe(animal.salute());
	});

	it("can create dynamically new own properties throw this", () => {
		class Animal {
			setName(name) { this.name = name; }
			getName() { return this.name; }
		}
		let animal = new Animal();
		animal.setName("donkey");
		expect('donkey').toBe(animal.getName());
	});

	it("there are no private properties", () => {
		class Animal {
			setName(name) { this.name = name; }
		}
		let animal = new Animal();
		animal.setName("donkey");
		expect('donkey').toBe(animal.name);
	});

	it("constructor is a special funcion called constructor", () => {
		class Animal {
			constructor(name) {
				this.name = name;
			}
		}
		let animal = new Animal("kitty");
		expect('kitty').toBe(animal.name)
	});

	it("has inheritance using extends", () => {
		class Animal {
			setName(name) { this.name = name; }
			speak() { return this.name + " makes noise"; }
		}
		class Dog extends Animal {
			speak() { return this.name + " barks"; }
		}
		let dog = new Dog();
		dog.setName("bethoven");
		expect('bethoven barks').toBe(dog.speak());
	});

	it("you can call super constructor with super", () => {
		class Animal {
			constructor(name) { this.name = name; }
			speak() { return this.name + " makes noise"; }
		}
		class Dog extends Animal {
			constructor(name) { super(name); }
			speak() { return this.name + " barks"; }
		}
		let dog = new Dog("bethoven");
		expect('bethoven barks').toBe(dog.speak());
	});

	it("you can call super method with super", () => {
		class Animal {
			constructor(name) { this.name = name; }
			speak() { return this.name + " makes noise"; }
		}
		class Dog extends Animal {
			constructor(name) { super(name); }
			speak() { return super.speak() + " and barks"; }
		}
		let dog = new Dog("bethoven");
		expect('bethoven makes noise and barks').toBe(dog.speak());
	});

	it("you can use instanceof to know if an object is an instance of a class", () => {
		class Animal {}
		class Balloon {}
		expect(true).toBe(new Animal() instanceof Animal);
		expect(false).toBe(new Animal() instanceof Balloon);
	});

	it("you can use instanceof to know (true/false) if an object is an instance of a class or inheritancy", () => {
		class Animal {}
		class Dog extends Animal {}
		expect(true).toBe(new Animal() instanceof Animal);
		expect(false).toBe(new Animal() instanceof Dog);
		expect(true).toBe(new Dog() instanceof Animal);
		expect(true).toBe(new Dog() instanceof Dog);
	});

	it("() => {} shorthand functions allows to use this", () => {
		class ThisTest {
			getThis() {
				const fn = () => this;
				return fn();
			}
		}
		let thisTest = new ThisTest(3);
		expect(thisTest).toBe(thisTest.getThis());
	});

	it("() => {} shorthand functions preserves this", () => {
		class Counters {
			constructor(factor) { this.factor = factor; }
			mult() { return [1,2,3].map(n => n * this.factor); }
		}
		let counters = new Counters(3);
		expect([3,6,9]).toEqual(counters.mult());
	});

	it("function() {} long notation uses this value is undefined", () => {
		class ThisTest {
			getThis() {
				const fn = function() { return this; };
				return fn();
			}
		}
		let thisTest = new ThisTest(3);
		expect(undefined).toBe(thisTest.getThis());
	});

});