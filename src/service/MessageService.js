import { Roles } from "../model/Roles";
import EmailService from "./EmailService";
import MessageBuilder, { MessageTemplates } from "./MessageBuilder";
import SlackService from "./SlackService";

export default class MessageService {
    
    constructor(http) {
        this._http = http;
        this._email = new EmailService(this._http);
        this._slack = new SlackService(this._http);
    }

    buildMessage(user, template) {
        if(template === MessageTemplates.SLACK) {
            return MessageBuilder
                .to(user)
                .withTemplate(MessageTemplates.SLACK)
                .withTitle(`Olá ${user.name}!, Tudo bem?\nHoje as suas recomendações de tópicos para responder são:\n\n`)
                .withItems(user.recommendations)
                .build();
        }

        if(template === MessageTemplates.EMAIL) {

        }
    }

    async sendMessage(user) {
        if(user.hasRole(Roles.MONITOR)) {
            const message = this.buildMessage(user, MessageTemplates.SLACK);
            console.log('usuário do tipo monitor', message);
            return await this._slack.sendMessage(message);
        } else {
            const message = this.buildMessage(user, MessageTemplates.EMAIL);
            // return await this._email.sendMessage(message);
            console.log('usuário do tipo normal', message)
        }
    }

    async execute(results) {
        results.forEach(result => {
            result.user.recommendations = result.recommendations;
            this.sendMessage(result.user);
        })
    }
}