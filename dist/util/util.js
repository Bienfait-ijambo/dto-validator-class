"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNegativeNumber = void 0;
require("reflect-metadata");
function isNegativeNumber(parm) {
    const val = parseInt(parm.toString());
    return val < 0 ? true : false;
}
exports.isNegativeNumber = isNegativeNumber;
//# sourceMappingURL=util.js.map