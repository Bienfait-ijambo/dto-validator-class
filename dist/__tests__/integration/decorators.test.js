// import assert from "node:assert";
// import test from "node:test";
// import { addValidationRule } from "../../util/util";
// import { rulesArray } from "../../validators/rules";
// import { IsEmail } from "../../decorators/IsEmail";
// import { Required } from "../../decorators/Required";
// test("Util test suite", async (t) => {
//   await t.test("should  get rules added to a class", async (t) => {
//     class MyClass {
//       @Required
//       @IsEmail
//       email: string;
//     }
//     const myClass = new MyClass();
//     const validationRules =
//       Reflect.getMetadata("validationRules", myClass) || [];
//       const expectedInput=[]
//     const emailProp = Reflect.get(rulesArray, "email");
//     const requiredProp = Reflect.get(rulesArray, "required");
//     expectedInput.push({ email: emailProp },{required: requiredProp});
//     assert.deepStrictEqual(expectedInput, validationRules );
//   });
// });
//# sourceMappingURL=decorators.test.js.map