"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateClass = void 0;
const PropMetaData_1 = require("../metadata/PropMetaData");
class ValidateClass {
    constructor(object) {
        return this.checkInput(object);
    }
    checkInput(object) {
        const propMetaData = new PropMetaData_1.PropMetaData();
        const metadata = propMetaData.getMetaData(object);
        return metadata;
    }
}
exports.ValidateClass = ValidateClass;
//# sourceMappingURL=ValidateClass.js.map