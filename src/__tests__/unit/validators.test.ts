import assert from "node:assert";
import test from "node:test";
import { Validator } from "../../validators/Validator";

const v=new Validator()
test("should return true or false", async (t) => {
  await t.test("Test emails", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = v.isValidEmail("bienfait@gmail.com");
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = v.isValidEmail("bienfaitgmail.com");
      assert.strictEqual(isValid, false);
    });
  });

  await t.test("Test isNotEmpty func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = v.isNotEmpty("bienfai");
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = v.isNotEmpty("");
      assert.strictEqual(isValid, false);
    });
  });

  await t.test("Test hasMaxLength func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = v.hasMaxLength("bien", 4);
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = v.hasMaxLength("en", 4);
      assert.strictEqual(isValid, true);
    });
  });

  await t.test("Test hasMinLength func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = v.hasMinLength("bien", 4);
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = v.hasMinLength("en", 4);
      assert.strictEqual(isValid, false);
    });
  });

  await t.test("Test isNumber func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = v.isNumber(2);
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = v.isNumber("en");
      assert.strictEqual(isValid, false);
    });
  });

  await t.test("Test isBoolean func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = v.isBoolean(true);
      assert.strictEqual(isValid, true);
    });

    await  t.test("Should return true", async (t) => {
      const isValid = v.isBoolean(false);
      assert.strictEqual(isValid, true);
    });
  });
});
