import express from 'express';
import validationRequest from '../../middleware/validedRequest';
import { courseValidation } from './course.validation';
import { courseController } from './course.controller';

const router = express.Router();

router.get('/get-all-course', courseController.getAllCourses);

router.post(
  '/create-course',
  validationRequest(courseValidation.CreateCourseSchemaValidation),

  courseController.createCourse,
);
router.get('/:id', courseController.getSingleCourse);
router.patch(
  '/:id',
  validationRequest(courseValidation.UpdateCoursetSchemaValidation),
  courseController.updateSingleCourse,
);
router.put(
  '/:courseId/assign-faculties',
  validationRequest(courseValidation.facultyWithCourseValidation),
  courseController.assignFaculties,
);
router.delete(
  '/:courseId/remove-faculties',
  validationRequest(courseValidation.facultyWithCourseValidation),
  courseController.removeFacultyFromCourse,
);
router.delete('/:id', courseController.deleteCourse);

export const CourseRouter = router;
