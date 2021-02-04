const slug = require('slug');
import LocalDateTime from '../util/LocalDateTime';

export default class Topic {
    constructor(id, subject, createAt, courseId, subcategoryId, categoryId, userId) {
        this.id = id;
        this.subject = subject;
        this.createAt = createAt;
        this.courseId = courseId;
        this.subcategoryId = subcategoryId;
        this.categoryId = categoryId;
        this.userId = userId;
        this.link = `https://cursos.alura.com.br/forum/topico-${slug(this.subject)}-${this.id}`;
        this.daysGone = LocalDateTime.diff(this.createAt, "days");
    }
}