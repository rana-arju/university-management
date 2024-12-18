"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentValidation = void 0;
const zod_1 = require("zod");
const CreateAcademicDepartmentSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'Academic department must be a string',
            required_error: 'Department name is required',
        }),
        academicFaculty: zod_1.z.string({
            invalid_type_error: 'Academic Faculty id must be a string',
            required_error: 'Academic Faculty Id Is Required',
        }),
    }),
});
const UpdateAcademicDepartmentSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'Academic department must be a string',
        }),
        academicFaculty: zod_1.z.string({
            invalid_type_error: 'Academic Faculty id must be a string',
        }),
    }),
});
exports.AcademicDepartmentValidation = {
    CreateAcademicDepartmentSchemaValidation,
    UpdateAcademicDepartmentSchemaValidation,
};
