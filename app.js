import server from './src/config/server';
import * as schedule from 'node-schedule-tz'
import UserRepository from './src/repository/UserRepository';
import Roles from "./src/model/Roles";
import ProcessExecuterService from './src/service/ProcessExecuterService';

import Axios from 'axios';
import UserService from './src/service/UserService';
import CourseService from './src/service/CourseService';
import ForumService from './src/service/ForumService';
import SlackService from './src/service/SlackService';
import EmailService from "./src/service/EmailService";

import TopicRecommendator from "./src/recommendator/TopicRecommendator";
import MessageService from './src/service/MessageService';


server.listen(process.env.APP_PORT, () => {
    console.log(`Server is up on ${process.env.APP_PORT}`)
});


setTimeout(() => {
    // Axios.post('https://discord.com/api/channels/760559085242023946/messages', 
    //         {
    //             content: 'Ola Mundo!'
    //         }, 
    //         {
    //             headers: {
    //                 'Authorization': 'Bot bfaf9f1643632f6ba8d793ee7c5c319c31e9d5a710c59eb7f6352483c0eff727',
    //                 'Content-Type': 'application/json'
    //             }
    //         }
    //     )
    //     .then(console.log)
    //     .catch(console.error);
    // UserRepository.findAll().then(users => {
    //     console.log(users.filter(u => u.id == 62).pop().roles.includes(Roles[1]));
    // })
    // new ProcessExecuterService()
    //     .next(new UserService(UserRepository))
    //     .next(new CourseService(Axios))
    //     .next(new ForumService(Axios))
    //     .next(new TopicRecommendator())
    //     .next(new MessageService(Axios))
    //     // .next(new EmailService())
    //     // .next(new SlackService(Axios))
    //     .next({ execute: function(result) { console.log(result) } })
    //     .execute();

    // var rule = new schedule.RecurrenceRule();
    // rule.dayOfWeek = [new schedule.Range(1, 5)];
    // rule.hour = 9;
    // rule.minute = 0;
    // rule.tz = 'America/Sao_Paulo'; 
    
    // var j = schedule.scheduleJob(rule, function(){
    //     console.log('Today is recognized by Rebecca Black!');
    // });
}, 2000)