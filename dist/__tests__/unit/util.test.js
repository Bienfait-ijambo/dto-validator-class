// import assert from "node:assert";
// import test from "node:test";
// import { addValidationRule } from "../../util/util";
// import { rulesArray } from "../../validators/rules";
// import { IsEmail } from "../../decorators/IsEmail";
// test("Util test suite", async (t) => {
//   await t.test("should  added rule exist in rulesArray", async (t) => {
//     class MyClass {
//         @IsEmail
//         email: string;
//       }
//      const myClass = new MyClass();
//     const validationRules = Reflect.getMetadata('validationRules', myClass) || [];
//     const addRuleResult = addValidationRule("email", rulesArray.email,obj);
//     // console.log('ex:::----->',addRuleResult)
//     const emailProp = Reflect.get(rulesArray, "email");
//     assert.equal(addRuleResult, [
//       {
//         email: emailProp,
//       },
//     ]);
//   });
// //   await t.test("should throw if added rule doesnt exist ", async (t) => {
// //     const obj={}
// //     const emailProp = Reflect.get(rulesArray, "xd");
// //     assert.deepStrictEqual(!emailProp,true)
// //     assert.throws(() => {
// //         addValidationRule("xd", rulesArray.email,obj);
// //     },Error)
// //   });
// });
//# sourceMappingURL=util.test.js.map