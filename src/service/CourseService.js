import LocalDateTime from '../util/LocalDateTime';

export default class CourseService {


    constructor(http) {
        if(!http) {
            throw new Error('Http cannot be a falsy value');
        }

        this.http = http;    
    }

    async findCoursesByUser(user) {
        const { data } = await this.http.get(process.env.ALURA_USERS_COURSES);
        
        return data.result
            .map(userCourseData => {
                const [ courseId, aluraId, finishedAt ] = userCourseData;
                return this.parseCourseData(courseId, aluraId, finishedAt);
            })
            .filter(userCourse => userCourse.aluraId == user.aluraId);
    }

    parseCourseData(courseId, aluraId, finishedAt) {
        return {
            courseId: parseInt(courseId, 10),
            aluraId: parseInt(aluraId, 10),
            finishedAt: LocalDateTime.parse(finishedAt),
        };
    }
}