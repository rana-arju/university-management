"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStudent = void 0;
const user_model_1 = require("./user.model");
const findLastStudentId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudent = yield user_model_1.User.findOne({ role: 'student' }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id) ? lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id : undefined;
});
const generateStudent = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let currentId = (0).toString();
    const lastStudentId = yield findLastStudentId();
    const lastStudentSemesterCode = lastStudentId === null || lastStudentId === void 0 ? void 0 : lastStudentId.substring(4, 6);
    const lastStudentSemesterYear = lastStudentId === null || lastStudentId === void 0 ? void 0 : lastStudentId.substring(0, 4);
    const currentSemesterCode = payload.code;
    const currentYear = payload.year;
    if (lastStudentId &&
        lastStudentSemesterCode === currentSemesterCode &&
        lastStudentSemesterYear === currentYear) {
        currentId = lastStudentId.substring(6);
    }
    let increamentId = (Number(currentId) + 1).toString().padStart(4, '0');
    increamentId = `${payload.year}${payload.code}${increamentId}`;
    return increamentId;
});
exports.generateStudent = generateStudent;
