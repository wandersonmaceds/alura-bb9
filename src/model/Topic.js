export default class Topic {
    constructor(id, subject, createAt, courseId, subcategoryId, categoryId, userId) {
        this.id = id;
        this.subject = subject;
        this.createAt = createAt;
        this.courseId = courseId;
        this.subcategoryId = subcategoryId;
        this.categoryId = categoryId;
        this.userId = userId;
    }
}