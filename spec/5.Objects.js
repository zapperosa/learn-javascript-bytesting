describe("Objects", () => {

	describe("JSON", () => {

		it("{} is an empty object", () => {
			expect(jasmine.any(Object)).toEqual(jasmine.any(Object));
		});

		it("{hello: \"world\"} is an object with one field", () => {
			expect(jasmine.any(Object)).toEqual(jasmine.any(Object));
		});

		it("JSON.parse converts JSON strings to obejcts", () => {
			expect(Object({a:1,b:[2,3]})).toEqual(JSON.parse("{\"a\":1,\"b\":[2,3]}"));
		});

		it("JSON.stringify converts any object to JSON", () => {
			expect('{"b":3}').toEqual(JSON.stringify({b:3}));
		});

	});

	describe("get set", () => {

		let object;
		beforeEach(() => {
			object = {
				hello: "world",
				all: 42,
			};
		});

		it("you can use . to get the value of a property", () => {
			expect(42).toBe(object.all);
		});

		it("you can use [string] to get the value of a property", () => {
			expect('world').toBe(object["hello"]);
		});

		it("you can use . to set the value of a property", () => {
			object.hello = "you";
			expect(Object({hello:'you',all:42})).toEqual(object);
		});

		it("you can use [string] to set the value of a property", () => {
			object["hello"] = "here";
			expect(Object({hello:'here',all:42})).toEqual(object);
		});

		it("return undefined if the property is not defined", () => {
			expect(undefined).toBe(object.foo);
			expect(undefined).toBe(object["bar"]);
		});

		it("you can add dynamically any property", () => {
			object.foo = "ana";
			object["bar"] = "bu";
			expect(Object({hello:'world',all: 42,foo:'ana',bar:'bu'})).toEqual(object);
		});

		it("you can use delete to remove properties", () => {
			object.foo = "bar";
			delete object.hello;
			delete object["all"];
			expect(Object({foo:'bar'})).toEqual(object);
		});

	});

	describe("walk", () => {

		let object;
		beforeEach(() => {
			object = {
				hello: "world",
				all: 42,
			};
		});

		it("Object.keys() gets an array with all the property keys", () => {
			expect(['hello','all']).toEqual(Object.keys(object));
		});

		it("Object.values() gets an array with all property values", () => {
			expect(['world',42]).toEqual(Object.values(object));
		});

	});

	describe("assign", () => {

		let target;
		let source;
		beforeEach(() => {
			target = {
				hello: "world",
			};
			source = {
				all: 42,
			};
		});

		it("assign merges two or more objects into the first", () => {
			Object.assign(target, source);
			expect(Object({hello:'world',all:42})).toEqual(target);
		});

		it("assign returns the target object", () => {
			expect(Object({hello:'world',all:42})).toEqual(Object.assign(target, source));
		});

		it("can be merged more than one object", () => {
			Object.assign(target, source, {foo: "bar"});
			expect(Object({hello:'world',all:42,foo:'bar'})).toEqual(target);
		});

		it("if a property is duplicated keeps the last value", () => {
			Object.assign(target, {hello: "there"});
			expect(Object({hello:'there'})).toEqual(target);
		});

		it("can be used to copy an object", () => {
			let copy = Object.assign({}, target);
			copy.hello = "you";
			expect(Object({hello:'world'})).toEqual(target);
		});
	});

});