export default class TopicRecommendator {
    
    constructor(users, topics, limit = 10) {
        this.users = users;
        this.topics = topics;
        this.limit = limit;
    }

    run() {
        const usersTopicsRecommendations = this.users.map(user => {
            const userCoursesIds = this._getCoursesIdsFromUser(user)
            const recommendations = this._filterTopicsFromCoursesIds(userCoursesIds)

            return {
                user,
                recommendations: recommendations.splice(0, this.limit)
            };
        });

        return usersTopicsRecommendations;
    }

    _filterTopicsFromCoursesIds(userCoursesIds) {
        return this.topics
            .filter(topic => userCoursesIds.includes(topic.courseId));
    }

    _getCoursesIdsFromUser(user) {
        return user.courses.map(course => course.courseId);
    }

    async execute(result) {
        this.users = result.users;
        this.topics = result.topics;
        
        return this.run();
    }
}