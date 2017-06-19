describe("Arrays", () => {

	describe("constants follows JSON rules", () => {

		it("[1,2,3], [42,\"sense\",[\"of\", \"life\"]], []", () => {
			expect([1,2,3]).toEqual(jasmine.any(Array));
			expect([42,\"sense\",[\"of\", \"life\"]]).toEqual(jasmine.any(Array));
			expect([]).toEqual(jasmine.any(Array));
		});

	});

	describe("get set", () => {

		let array;
		beforeEach(() => { array = [1,2,3]; });

		it("you can use [index] to read any position", () => {
			expect(2).toBe(array[1]);
		});

		it("you can use [index] to set any position", () => {
			array[1] = 4;
			expect([ 1, 4, 3 ]).toEqual(array);
		});

		it("you can mix types", () => {
			array[1] = "of";
			expect([ 1, "of", 3 ]).toEqual(array);
		});

		it("you get undefined if you read an unset number", () => {
			expect(undefined).toBe(array[5]);
			expect(undefined).toBe(array[-1]);
		});

		it("you can set any position (grows dinamically)", () => {
			array[4] = 5;
			expect(5).toBe(array[4]);
		});

		it("all positions between the setted and last become undefined", () => {
			array[4] = 5;
			expect([ 1, 2, 3, undefined, 5 ]).toEqual(array);
		});

	});

	describe("length", () => {

		let array;
		beforeEach(() => { array = [1,2,3]; });

		it("length returns the actual length of the array", () => {
			expect(3).toBe(array.length);
		});

		it("length can be set to shrink the array", () => {
			array.length = 2;
			expect([1,2]).toEqual(array);
		});

		it("length can be set to enlarge the array filled with undefined", () => {
			array.length = 5;
			expect([1, 2, 3, undefined, undefined]).toEqual(array);
		});

		it("length grows when more elements are added", () => {
			array[4] = 5;
			expect(5).toEqual(array.length);
		});

	});

	describe("can mutate", () => {

		let array;
		beforeEach(() => { array = [1,2,3]; });

		it("unmutated array", () => {
			expect([1,2,3]).toEqual(array);
		});

		describe("can behave as a stack", () => {

			describe("from behind", () => {

				it("push adds a new element to the end", () => {
					array.push(4);
					expect([1,2,3,4]).toEqual(array);
				});

				it("pop removes the last element", () => {
					array.pop();
					expect([1,2]).toEqual(array);
				});

				it("pop returns the value of the last element", () => {
					expect(3).toBe(array.pop());
				});

			});

			describe("from head", () => {

				it("unshift adds a new element to the beggining", () => {
					array.unshift(0);
					expect([0,1,2,3]).toEqual(array);
				});

				it("pop removes the first element", () => {
					array.shift();
					expect([2,3]).toEqual(array);
				});

				it("pop returns the value of the first element", () => {
					expect(1).toBe(array.shift());
				});

			});

		});


		describe("can behave as a queue", () => {

			it("you can add elements in the end and get them from the front", () => {
				array.push(4);
				array.shift();

				expect([2,3,4]).toEqual(array);
			});

			it("you can add elements in the head and get them from the tail", () => {
				array.unshift(0);
				array.pop();

				expect([0,1,2]).toEqual(array);
			});

		});

		describe("splice", () => {

			it("splice can insert numbers in any position", () => {
				array = ["a", "c", "d"];
				array.splice(1, 0, "b");
				expect(["a","b", "c", "d"]).toEqual(array);
			});

			it("splice can remove numbers in any position", () => {
				array = ["a", "x", "b", "c"];
				array.splice(1, 1);
				expect(["a", "b", "c"]).toEqual(array);
			});

		});

		describe("sort", () => {

			it("sort orders array contents", () => {
				array = ["a", "c", "b"];
				array.sort();

				expect(["a", "b","c"]).toEqual(array);
			});

			it("sort returns the array itself ordered", () => {
				array = ["a", "c", "b"];

				expect(["a","b","c"]).toEqual(array.sort());
			});

			it("sort orders strings by default, if no, it imagines strings", () => {
				array = [1, 5, 10];

				expect([1,10,5]).toEqual(array.sort());
			});

			it("sort accepts a ordering function", () => {
				array = [1, 5, 10];

				expect([1,5,10]).toEqual(array.sort((a, b) => a - b));
			});

		});

		describe("reverse", () => {
	
			it("reverses the contents of an array", () => {
				array.reverse();
				expect([3,2,1]).toEqual(array);
			});

			it("returns the reversed array itself", () => {
				expect([3,2,1]).toEqual(array.reverse());
			});

		});

	});

	describe("non mutating operations", () => {

		let array;
		beforeEach(() => { array = [1,2,3]; });

		describe("slice", () => {
			it("slice copies an array", () => {
				let copy = array.slice();
				array[2] = "c";

				expect([1,2,3]).toEqual(copy);
			});

			it("slice(begin,end) can copy a part of an array", () => {
				expect([1,2,3]).toEqual(["a", "b", 1, 2, 3, "c"].slice(2, 5));
			});

			it("slice(position) copies from the position to the end", () => {
				expect([2,3]).toEqual(array.slice(1));
			});

			it("slice(-position) copies from the last nth position to the end", () => {
				expect([3]).toEqual(array.slice(-1));
			});
		});

		describe("concat", () => {
			it("concatenates another array", () => {
				expect([1,2,3,4,5]).toEqual(array.concat([4,5]));
			});

			it("does not modifies the array", () => {
				array.concat([4,5]);
				expect([1,2,3]).toEqual(array);
			});
		});

		describe("iterators", () => {

			it("filter selects elements from the array", () => {
				expect([1,3]).toEqual(array.filter(n => n % 2 === 1));
			});

			it("map applies a function to each element", () => {
				expect([2,4,6]).toEqual(array.map(n => n * 2));
			});

			it("reduce(fn, initial) applies an accumulator operation", () => {
				expect(6).toEqual(array.reduce((s, n) => s + n, 0));
			});

			it("every evaluates if a condition is satisfied by all elements", () => {
				expect(true).toBe(array.every(n => n >= 0));
				expect(false).toBe(array.every(n => n % 2 === 0));
				expect(false).toBe(array.every(n => n === -1));
			});

			it("some evaluates if a condition is satisfied by any elements", () => {
				expect(true).toBe(array.some(n => n >= 0));
				expect(true).toBe(array.some(n => n % 2 === 0));
				expect(false).toBe(array.every(n => n === -1));
			});

			it("forEach executes a function for each element", () => {
				let count = 0;
				array.forEach(n => count += 1);

				expect(3).toBe(count);
			});

			it("none modifies the array", () => {
				array.filter(n => n % 2 === 1);
				array.map(n => n * 2);
				array.reduce((s, n) => s + n, 0);
				array.every(n => n >= 0);
				array.some(n => n === 2);
				array.forEach(n => n++);

				expect([1,2,3]).toEqual(array);
			});

		});

		describe("finders", () => {

			beforeEach(() => { array = ["a", "b", "c"]; });

			it("indexOf(value) looks for the same exact value position", () => {
				expect(1).toBe(array.indexOf("b"));
			});

			it("indexOf(value) returns -1 if the element does not exists", () => {
				expect(-1).toBe(array.indexOf("e"));
			});

			it("find returns the first element that satisfies a condition", () => {
				expect('b').toBe(array.find(l => l > "a"));
			});

			it("find returns undefined if no element satisfies the condition", () => {
				expect(undefined).toBe(array.find(l => l > "e"));
			});

			it("findIndex returns the position of the first element that satisfies a condition", () => {
				expect(1).toBe(array.findIndex(l => l > "a"));
			});

			it("findIndex returns -1 if no element satisfies the condition", () => {
				expect(-1).toBe(array.findIndex(l => l > "e"));
			});

		});

	});

});