describe("Booleans", () => {

	describe("constants", () => {

		it("false and true are the only existing booleans", () => {
			expect(true).toEqual(jasmine.any(Boolean));
			expect(false).toEqual(jasmine.any(Boolean));
		});

	});

	describe("operations", () => {

		it("logical and", () => {
			expect(true).toBe(true && true);
			expect(false).toBe(true && false);
			expect(false).toBe(false && false);
		});

		it("logical or", () => {
			expect(true).toBe(true || true);
			expect(true).toBe(true || false);
			expect(false).toBe(false || false);
		});

		it("not", () => {
			expect(true).toBe(!false);
			expect(false).toBe(!true);
		});

	});

	describe("cast", () => {

		it("use Boolean() to convert from truthy/falsy booleans to boolean", () => {
			expect(true).toBe(Boolean(true));
			expect(false).toBe(Boolean(false));
		});

		it("use Boolean() to convert from truthy/falsy objects to boolean", () => {
			expect(true).toBe(Boolean([]));
			expect(true).toBe(Boolean({}));
			expect(false).toBe(Boolean(null));
			expect(false).toBe(Boolean(undefined));
		});

		it("use Boolean() to convert from truthy/falsy strings to boolean", () => {
			expect(true).toBe(Boolean("0"));
			expect(true).toBe(Boolean("false"));
			expect(false).toBe(Boolean(""));
		});

		it("use Boolean() to convert from truthy/falsy numbers to boolean", () => {
			expect(true).toBe(Boolean(1));
			expect(false).toBe(Boolean(0));
			expect(false).toBe(Boolean(NaN));
		});

	});

	describe("if conditions follows truthy/falsy rules", () => {

		it("example with \"3\"", () => {
			let a = "original";
			if ("3") {
				a = "changed";
			}
			expect("changed").toBe(a);
		});

		it("example with 0", () => {
			let a = "original";
			if (0) {
				a = "changed";
			}
			expect("original").toBe(a);
		});

		it("example with undefined", () => {
			let a = "original";
			if (undefined) {
				a = "changed";
			}
			expect("original").toBe(a);
		});

		it("example with \"false\"", () => {
			let a = "original";
			if ("false") {
				a = "changed";
			}
			expect("changed").toBe(a);
		});

	});

});