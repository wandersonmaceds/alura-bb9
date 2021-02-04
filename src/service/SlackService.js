
export default class SlackService {
    constructor(http) {
        if(!http) {
            throw new Error('Http cannot be a falsy value');
        }
        this.http = http;
    }

    async sendMessage(message) {
        const { destination, title, body } = message;

        console.log(destination, title, body)
        
        const { slack } = destination.extraContactOptions;
        
        if(slack == undefined) return;

        const messageOptions = {
            username: process.env.APP_NAME,
            icon_url: process.env.APP_ICON,
            text: `${title}\n\n${body}`,
            channel: slack
        }

        this.http.post(
            process.env.SLACK_POST_MESSAGE, 
            messageOptions,
            {
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${process.env.SLACK_TOKEN}` 
                }
            })
            .then(({ data }) => console.log(`Sent to slack status: ${data.ok}`, data))
            .catch(console.error)
            // usar o logger
    }   
}