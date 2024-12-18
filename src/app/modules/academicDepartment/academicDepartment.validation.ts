import { z } from 'zod';

const CreateAcademicDepartmentSchemaValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department must be a string',
      required_error: 'Department name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty id must be a string',
      required_error: 'Academic Faculty Id Is Required',
    }),
  }),
});
const UpdateAcademicDepartmentSchemaValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department must be a string',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty id must be a string',
    }),
  }),
});

export const AcademicDepartmentValidation = {
  CreateAcademicDepartmentSchemaValidation,
  UpdateAcademicDepartmentSchemaValidation,
};
