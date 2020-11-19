import server from './src/config/server';

server.listen(process.env.APP_PORT, () => {
    console.log(`Server is up on ${process.env.APP_PORT}`)
});

// RecommendatorService draft
// initializeConnection().then(async () => {
//     const courseService = new CourseService(Axios);
//     const topics = await new ForumService(Axios).getNoAnsweredTopics();

//     // Users, Items<Topic, Suggestion>, Service<HTTP> -> (Slack, Email, Discord);

    
//     await UserRepository.findAll().then(async users => {
//         const courses = await courseService.findCoursesByUsers(users)
//         users.forEach(user => user.courses = courses.filter(c => c.aluraId == user.aluraId));
//         console.log(new TopicRecommendator(users, topics).run());
//     });   
// });