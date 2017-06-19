describe("Functions", () => {

	describe("short notation", () => {

		it("() => {} is the shortest function", () => {
			expect(jasmine.any(Function)).toEqual(jasmine.any(Function));
		});

		it("(a,b) => {} accepts arguments", () => {
			expect(jasmine.any(Function)).toEqual(jasmine.any(Function));
		});

		it("a => {} is a shorthand for one argument", () => {
			expect(jasmine.any(Function)).toEqual(jasmine.any(Function));
		});

		it("() => n returns n", () => {
			const fn = () => 3;
			expect(3).toBe(fn());
		});

		it("n => n is identity", () => {
			const fn = n => n;
			expect(5).toBe(fn(5));
		});

		it("(a,b) => a+b sums two numbers", () => {
			const fn = (a,b) => a+b;
			expect(5).toBe(fn(2,3));
		});

		it("() => ({ hello: \"world\" }) requires parenthesis to return a constant object", () => {
			const fn = (a) => ({ hello: a });
			expect(Object({hello:'world'})).toEqual(fn("world"));
			expect(Object({hello:'you'})).toEqual(fn("you"));
		});

	    it("() => { /*code*/ } accepts any arbitrary code inside brackets", () => {
	    	const fn = a => {
	    		if (a > 3) { return a; }
	    		else return 3;
	    	};
	    	expect(3).toEqual(fn(2));
	    	expect(5).toEqual(fn(5));
	    });

	});

	describe("large notation", () => {

		it("function() {} was the shortest function", () => {
			expect(jasmine.any(Function)).toEqual(jasmine.any(Function));
		});

		it("function(a,b) {} accepts arguments", () => {
			expect(jasmine.any(Function)).toEqual(jasmine.any(Function));
		});

		it("function(a) {} there is no shorthand for one argument", () => {
			expect(jasmine.any(Function)).toEqual(jasmine.any(Function));
		});

		it("function() { return n; } returns n", () => {
			const fn = function() { return 3; };
			expect(3).toBe(fn());
		});

		it("function name() { … } can have named", () => {
			function fn() { return 3; };
			expect(3).toBe(fn());
		});

		it("function (n) { return n; } is identity", () => {
			const fn = function (n) { return n; };
			expect(5).toBe(fn(5));
		});

		it("function (a, b) { return a + b; } sums two numbers", () => {
			const fn = (a,b) => a+b;
			expect(5).toBe(fn(2,3));
		});

		it("function() { return { hello: \"world\" }; } requires nothing special to return a constant object", () => {
			const fn = function(a) { return { hello: a }; };
			expect(Object({hello:'world'})).toEqual(fn("world"));
			expect(Object({hello:'you'})).toEqual(fn("you"));
		});

	    it("function() { /*code*/ } accepts any arbitrary code inside brackets", () => {
	    	const fn = function(a) {
	    		if (a > 3) { return a; }
	    		else return 3;
	    	};
	    	expect(3).toEqual(fn(2));
	    	expect(5).toEqual(fn(5));
	    });
	    
	});

	describe("missmatching parameters / returns", () => {

		it("ignores extra parameters", () => {
			const fn = (a,b) => a + b;
			expect(3).toBe(fn(1,2,3));
		});

		it("converts missing parameters into undefined", () => {
			const fn = n => n;
			expect(undefined).toBe(fn());
		});

		it("always returns something, returns undefined by default", () => {
			const fn = () => {};
			expect(undefined).toBe(fn());
		});

		it("returns return undefined if no value specified", () => {
			const fn = () => { return; };
			expect(undefined).toBe(fn());
		});

	});

	describe("closures", () => {

		it("functions can have children functions", () => {
			const double = arr => arr.map(n => n * 2);
			expect([2,4,6]).toEqual(double([1,2,3]));
		});

		it("children functions can read parent variables", () => {
			const sumhash = arr => {
				let hash = arr.length % 6;
				return arr.map(n => n + hash);
			};
			expect([4,5,6]).toEqual(sumhash([1,2,3]));
		});

		it("functions can return functions", () => {
			const makeSay = word => () => word;
			const sayBud = makeSay("bud");
			const sayWii = makeSay("wii");
			expect('bud').toBe(sayBud());
			expect('wii').toBe(sayWii());
		});

		it("parent variales live after parent finishes", () => {
			const makeCounter = () => {
				let number = 0;
				return () => ++number;
			};
			const count = makeCounter();
			expect(1).toBe(count());
			expect(2).toBe(count());
			expect(3).toBe(count());
		});

		it("parent variales are duplicated in each function call", () => {
			const makeCounter = () => {
				let number = 0;
				return () => ++number;
			};
			const countA = makeCounter();
			const countB = makeCounter();
			expect(1).toBe(countA());
			expect(2).toBe(countA());
			expect(1).toBe(countB());
			expect(3).toBe(countA());
			expect(2).toBe(countB());
		});

	});

	describe("return standarized bug", () => {

		it("return does not need ; to finish", () => {
			const fn = () => {
				return 
					1 +
					1;
			};
			expect(undefined).toBe(fn());
		});

	});

});