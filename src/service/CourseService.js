import LocalDateTime from '../util/LocalDateTime';

export default class CourseService {


    constructor(http) {
        if(!http) {
            throw new Error('Http cannot be a falsy value');
        }
        
        this.http = http;    
    }
    
    async findCoursesByUser(user) {
        const courses = await this._getCoursesFromAPI();
        return this._getUserCoursesFromCourses(courses, user);
    }
    
    async findCoursesByUsers(users) {
        const courses = await this._getCoursesFromAPI();
        return users.flatMap(user => this._getUserCoursesFromCourses(courses, user));
    }

    _getUserCoursesFromCourses(courses, user) {
        const userIdIndex = 1;
        return courses
            .filter(userCourseData => userCourseData[userIdIndex] == user.aluraId)
            .map(this.parseCourseData);
    }

    async _getCoursesFromAPI() {
        const response =  await this.http.get(process.env.ALURA_USERS_COURSES);
        return response.data.result;
    }


    parseCourseData(userCourseData) {
        const [courseId, aluraId, finishedAt] = userCourseData;
        return {
            courseId: parseInt(courseId, 10),
            aluraId: parseInt(aluraId, 10),
            finishedAt: LocalDateTime.parse(finishedAt),
        };
    }

    async execute(users) {
        const courses = await this.findCoursesByUsers(users);
        users.forEach(user => user.courses = courses.filter(c => c.aluraId == user.aluraId));

        return users;
    }
}