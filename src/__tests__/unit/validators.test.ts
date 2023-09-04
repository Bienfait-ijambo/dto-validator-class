import assert from "node:assert";
import test from "node:test";
import {
  hasMaxLength,
  hasMinLength,
  isBoolean,
  isNotEmpty,
  isNumber,
  isValidEmail,
} from "../../validators/Validator";

test("should return true or false", async (t) => {
  await t.test("Test emails", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = isValidEmail("bienfait@gmail.com");
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = isValidEmail("bienfaitgmail.com");
      assert.strictEqual(isValid, false);
    });
  });

  await t.test("Test isNotEmpty func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = isNotEmpty("bienfai");
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = isNotEmpty("");
      assert.strictEqual(isValid, false);
    });
  });

  await t.test("Test hasMaxLength func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = hasMaxLength("bien", 4);
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = hasMaxLength("en", 4);
      assert.strictEqual(isValid, true);
    });
  });

  await t.test("Test hasMinLength func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = hasMinLength("bien", 4);
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = hasMinLength("en", 4);
      assert.strictEqual(isValid, false);
    });
  });

  await t.test("Test isNumber func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = isNumber(2);
      assert.strictEqual(isValid, true);
    });

    await t.test("Should return false", async (t) => {
      const isValid = isNumber("en");
      assert.strictEqual(isValid, false);
    });
  });

  await t.test("Test isBoolean func", async (t) => {
    await t.test("Should return true", async (t) => {
      const isValid = isBoolean(true);
      assert.strictEqual(isValid, true);
    });

    await  t.test("Should return true", async (t) => {
      const isValid = isBoolean(false);
      assert.strictEqual(isValid, true);
    });
  });
});
