export default class SlackService {
    constructor(http) {
        if(!http) {
            throw new Error('Http cannot be a falsy value');
        }
        this.http = http;
    }

    async execute(results) {
        const messageOptions = {
            username: process.env.APP_NAME,
            icon_url: process.env.APP_ICON,
            channel: process.env.SLACK_SCUBA_CHANNEL, 
            text: '',
        }

        results.forEach(result => {
            let text = `Olá ${result.user.name}!, Tudo bem?\n`;
            text += `Hoje as suas recomendações de tópicos para responder são:\n\n`;
            text += result.recommendations
                          .map((topic, index) => {
                            return `Tópico ${index + 1}\nTítulo: ${topic.subject}\nLink: https://cursos.alura.com.br/forum/topico--${topic.id}`;
                          })
                          .join('\n\n');

            messageOptions.text = text;

            this.http.post(
                process.env.SLACK_POST_MESSAGE, 
                messageOptions,
                {
                    headers: {
                        'Content-Type': 'application/json', 
                        'Authorization': `Bearer ${process.env.SLACK_TOKEN}` 
                    }
                }
            )
                .then(console.info)
                .catch(console.error)
        })
    }   
}