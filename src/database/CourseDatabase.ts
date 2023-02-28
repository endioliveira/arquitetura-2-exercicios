import { CourseDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CourseDatabase extends BaseDatabase {
    public static TABLE_COURSES = "courses"

    public async findCourses(q: string | undefined) {
        let coursesDB

        if (q) {
            const result: CourseDB[] = await BaseDatabase
                .connection(CourseDatabase.TABLE_COURSES)
                .where("name", "LIKE", `%${q}%`)

            coursesDB = result
        } else {
            const result: CourseDB[] = await BaseDatabase
                .connection(CourseDatabase.TABLE_COURSES)

            coursesDB = result
        }

        return coursesDB
    }
}