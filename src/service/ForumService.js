import Topic from "../model/Topic";
import LocalDateTime from "../util/LocalDateTime";

export default class ForumService{
    constructor(http) {
        if(!http) {
            throw new Error('Http cannot be a falsy value');
        }
        this.http = http;   
    }

    async getNoAnsweredTopics() {
        const { data } = await this.http.get(process.env.ALURA_TOPICOS_SEM_RESPOSTAS);
        return data.result.map(this._parseOpenTopicArray);
    }

    _parseOpenTopicArray(topicArray) {
        let [id, subject, createdAt, courseId, subcategoryId, categoryId, userId] = topicArray;

        id = parseInt(id);
        createdAt = LocalDateTime.parse(createdAt);
        courseId = courseId == '' ? 0 : parseInt(courseId);
        subcategoryId = subcategoryId == '' ? 0 : parseInt(subcategoryId);
        categoryId = categoryId == '' ? 0 : parseInt(categoryId);
        userId = parseInt(userId);

        return new Topic(id, subject, createdAt, courseId, subcategoryId, categoryId, userId);
    }
}