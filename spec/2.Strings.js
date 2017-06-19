describe("Strings", () => {

	describe("constants", () => {

		it("\"hello\", \"a\", \"long word\" are constans", () => {
			expect("hello").toBe("hello");
			expect("a").toBe("a");
			expect("long word").toBe("long word");
		});

		it("character is a string with length 1", () => {
			expect("e").toBe("hello"[1])
		});

	});

	describe("encoded as UCS-2", () => {

		it("each position is 16bits and most characters are length 1", () => {
			expect(5).toBe("hello".length);
			expect(6).toBe("mataró".length);
			expect(4).toBe("νερό".length);
			expect(2).toBe("中国".length);
			expect(1).toBe("水".length);
		});

		it("some characters requires has double length", () => {
			expect(2).toBe("𝄞".length);
		});

	});

	describe("operators", () => {

		it("a + b concatenates two strings", () => {
			expect("hello world").toBe("hello " + "world");
		});

	});

	describe("comparisons", () => {

		it("a < b returns true if a is less than b", () => {
			expect(true).toBe("ana" < "bu");
			expect(false).toBe("ana" < "ana");
			expect(false).toBe("bu" < "ana");
		});

		it("a <= b returns true if a is less than b or equal to b", () => {
			expect(true).toBe("ana" <= "bu");
			expect(true).toBe("ana" <= "ana");
			expect(false).toBe("bu" <= "ana");
		});

		it("a >= b returns true if a is greater than b or equal to b", () => {
			expect(false).toBe("ana" >= "bu");
			expect(true).toBe("ana" >= "ana");
			expect(true).toBe("bu" >= "ana");
		});

		it("a > b returns true if a is greater than b", () => {
			expect(false).toBe("ana" > "bu");
			expect(false).toBe("ana" > "ana");
			expect(true).toBe("bu" > "ana");
		});

		it("a === b returns true if both numbers are the same", () => {
			expect(false).toBe("ana" === "bu");
			expect(true).toBe("ana" === "ana");
			expect(false).toBe("bu" === "ana");
		});

		it("a === b returns false if one is number but the other is not", () => {			
			expect(false).toBe("2" === 2);
		});

		it("a !== b returns true if both numbers are the different", () => {
			expect(true).toBe("ana" !== "bu");
			expect(false).toBe("ana" !== "ana");
			expect(true).toBe("bu" !== "ana");
		});

		it("a !== b returns true if one is number but the other is not", () => {			
			expect(true).toBe("2" !== 2);
		});

		it("never use a == b (two equals) you cannot trust it", () => {
			expect(true).toBe("2" == 2);
		});

		it("never use a != b (one equal) you cannot trust it", () => {
			expect(false).toBe("2" != 2);
		});

	});

	describe("methods", () => {

		it("slice(begin, end) gets a substring from the string", () => {
			expect("hell").toBe("hello".slice(0, 4));
		});

		it("slice(begin) gets the substring starting at begin", () => {
			expect("world").toBe("hello world".slice(6));
		});

		it("slice(-begin) gets the substring starting at the last character count", () => {
			expect("world").toBe("hello world".slice(-5));
		});

		it("indexOf finds the first occurrence of a substring", () => {
			expect(3).toBe("foobar".indexOf("bar"));
		});

		it("indexOf returns -1 if no matching", () => {
			expect(-1).toBe("foobar".indexOf("pop"));
		});

		it("includes true if there is an occurrence of a substring", () => {
			expect(true).toBe("foobar".includes("bar"));
		});

		it("includes returns false if no matching", () => {
			expect(false).toBe("foobar".includes("pop"));
		});

		it("toUpperCase converts a string to uppercase", () => {
			expect("HELLO").toBe("Hello".toUpperCase());
		});

		it("toLowerCase converts a string to lowercase", () => {
			expect("hello").toBe("Hello".toLowerCase());
		});

	});

	describe("cast to String", () => {

		it("can convert any object to string with String()", () => {
			expect("3").toBe(String(3));
		});

	});

});