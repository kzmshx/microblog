/**
 * Flow of execution
 *
 * 01. beforeAll
 *
 * 02. beforeEach
 * 03. test 0
 * 04. afterEach
 *
 * 05. beforeEach
 * 06. test 1
 * 07. afterEach
 *
 * 08. beforeEach
 * 09. nested beforeEach
 * 10. inner test
 * 11. nested afterEach
 * 12. afterEach
 *
 * 13. afterAll
 */
describe("lifecycle hooks", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });

  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
  });

  afterAll(() => {
    console.log("afterAll");
  });

  test("test 0", () => {
    console.log("test 0");
  });

  test("test 1", () => {
    console.log("test 1");
  });

  describe("nested describe", () => {
    beforeEach(() => {
      console.log("nested beforeEach");
    });

    test("inner test", () => {
      console.log("inner test");
    });

    afterEach(() => {
      console.log("nested afterEach");
    });
  });
});
