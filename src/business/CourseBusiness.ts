import { CourseDatabase } from "../database/CourseDatabase"
import { BadRequestError } from "./../errors/BadRequestError"
import { Course } from "../models/Course"
import { CourseDB } from "../types"

export class CourseBusiness {
    public getCourses = async (q: string | undefined) => {
        const courseDatabase = new CourseDatabase()
        const coursesDB = await courseDatabase.findCourses(q)

        const courses: Course[] = coursesDB.map((courseDB) => new Course(
            courseDB.id,
            courseDB.name,
            courseDB.lessons
        ))

        return courses
    }

}