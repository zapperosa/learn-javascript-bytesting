describe("Numbers", () => {

	describe("constants", () => {

		it("1,2,5000 are numbers", () => {
			expect(1).toEqual(jasmine.any(Number));
			expect(2).toEqual(jasmine.any(Number));
			expect(5000).toEqual(jasmine.any(Number));
		});

		it("1.2 -2.3 1e2 are also numbers", () => {
			expect(1.2).toEqual(jasmine.any(Number));
			expect(-2.3).toEqual(jasmine.any(Number));
			expect(1e2).toEqual(jasmine.any(Number));
		});

		it("numbers are IEEE-754, they have low resolution", () => {
			// write only one number in the expectation, remember hint
			expect(0.30000000000000004).toBe(0.1 + 0.2);
		});

		it("1/0 gives Infinity", () => {
			expect(1/0).toBe(Infinity);
		});

		it("gives NaN when something goes wrong, example 0 divided by 0", () => {
			expect(0/0).toEqual(NaN);
		});

	});

	describe("operations", () => {

		it("has addition", () => {
			expect(4).toBe(2 + 2);
		});

		it("has substraction", () => {
			expect(1).toBe(2 - 1);
		});

		it("has multiplication", () => {
			expect(12).toBe(3 * 4);
		});

		it("has division", () => {
			expect(5).toBe(15 / 3);
		});

		it("has reminder", () => {
			expect(3).toBe(18 % 5);
		});

		it("reminder of negative numbers is also signed", () => {
			expect(-3).toBe(-18 % 5);
		});

	});

	describe("comparisons", () => {

		it("a < b returns true if a is less than b", () => {
			expect(true).toBe(1 < 2);
			expect(false).toBe(1 < 1);
			expect(false).toBe(2 < 1);
		});

		it("a <= b returns true if a is less than b or equal to b", () => {
			expect(true).toBe(1 <= 2);
			expect(true).toBe(1 <= 1);
			expect(false).toBe(2 <= 1);
		});

		it("a >= b returns true if a is greater than b or equal to b", () => {
			expect(false).toBe(1 >= 2);
			expect(true).toBe(1 >= 1);
			expect(true).toBe(2 >= 1);
		});

		it("a > b returns true if a is greater than b", () => {
			expect(false).toBe(1 > 2);
			expect(false).toBe(1 > 1);
			expect(true).toBe(2 > 1);
		});

		it("a === b returns true if both numbers are the same", () => {
			expect(false).toBe(1 === 2);
			expect(true).toBe(1 === 1);
			expect(false).toBe(2 === 1);
		});

		it("a === b returns false if one is number but the other is not", () => {			
			expect(false).toBe(2 === "2");
			expect(false).toBe(0 === []);
		});

		it("a !== b returns true if both numbers are the different", () => {
			expect(true).toBe(1 !== 2);
			expect(false).toBe(1 !== 1);
			expect(true).toBe(2 !== 1);
		});

		it("a !== b returns true if one is number but the other is not", () => {			
			expect(true).toBe(2 !== "2");
			expect(true).toBe(0 !== []);
		});

		it("never use a == b (two equals) you cannot trust it", () => {
			expect(true).toBe(2 == "2");
			expect(true).toBe(0 == []);
		});

		it("never use a != b (one equal) you cannot trust it", () => {
			expect(false).toBe(2 != "2");
			expect(false).toBe(0 != []);
		});

	});

	describe("methods", () => {

		it("toFixed converts a number into a string with a fixed number of decimals", () => {
			expect("3.14").toBe((3.14159).toFixed(2));
		});

	});

	describe("Math", () => {

		it("Math.max gets the maximum of two numbers", () => {
			expect(12).toBe(Math.max(2, 12));
		});

		it("Math.min gets the minimum of two numbers", () => {
			expect(2).toBe(Math.min(2, 12));
		});

		it("Math.floor gets the number without decimals rounded down", () => {
			expect(3).toBe(Math.floor(3.2));
			expect(3).toBe(Math.floor(3.9));
			expect(-4).toBe(Math.floor(-3.1));
		});

		it("Math.ceil gets the number without decimals rounded up", () => {
			expect(4).toBe(Math.ceil(3.2));
			expect(4).toBe(Math.ceil(3.9));
			expect(-3).toBe(Math.ceil(-3.1));
		});

		it("Math.round gets the nearest integer", () => {
			expect(5).toBe(Math.round(5.1));
			expect(6).toBe(Math.round(5.5));
			expect(7).toBe(Math.round(6.5));
		});

		it("Math.round gets the nearest integer (tied negatives go up)", () => {
			expect(-5).toBe(Math.round(-5.1));
			expect(-5).toBe(Math.round(-5.5));
			expect(-6).toBe(Math.round(-6.5));
		});

	});

	describe("Cast to number", () => {

		it("use Number(string) to convert a string to a number", () => {
			expect(5).toBe(Number("5"));
			expect(7.5).toBe(Number("7.5"));
		});

		it("Number(string) gives NaN if string cannot be converted", () => {
			expect(NaN).toEqual(Number("e11.1"));
			expect(NaN).toEqual(Number("5pm"));
		});

	});

	describe("NaN", () => {

		it("NaN is NOT a NaN", () => {
			expect(false).toBe(NaN === NaN);
		});

		it("use isNaN(number) to know if it is NaN", () => {
			expect(true).toBe(isNaN(NaN));
		});

	});
	

});