
export const MessageTemplates = {
    SLACK: 'slack',
    EMAIL: 'email'
}

export default class MessageBuilder {
    
    constructor(destination) {
        this.destination = destination;
        this.title = '';
        this.items = '';
        this.template = '';
        this.strategy ={
            SLACK: this.toSlack
        }
    }

    static to(user) {
        return new MessageBuilder(user);
    }

    withTemplate(templateOption) {
        this.template = templateOption;
        return this;
    }

    withTitle(title) {
        this.title = title;
        return this;
    }

    withItems(items) {
        this.items = items;
        return this;
    }

    _buildBody() {
        // refact: fazer mapa de função para usar no build
        if(this.template === MessageTemplates.SLACK) {
            return this.items
                .map((topic, index) => {
                    return `Tópico ${index + 1}\nTítulo: ${topic.subject}\nLink: ${topic.link}\nDias Esperando: ${topic.daysGone}`;
                })
                .join('\n\n');
        } else if (this.template === MessageTemplates.EMAIL) {
            return this.items
                .map(topic => `<a href="${topic.link}" target="_blank">${topic.subject}` )
                .join('<br><br>');

        } else {
            throw new Error('no template select to the message builder');
        }
    }

    build() {
        return {
            destination: this.destination,
            title: this.title,
            body: this._buildBody()
        }
    }
    
}