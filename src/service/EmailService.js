import { Mandrill } from 'mandrill-api';

export default class EmailService {

  constructor() {
    this.client = new Mandrill(process.env.MAILER_TOKEN_API);
  }

  async sendMessage(message) {
    const htmlMessage = this._buildMessage(message.destination, message.body);
    const messageToSend = {
      html: htmlMessage,
      subject: message.title,
      from_email: process.env.MAILER_USERNAME,
      from_name: 'Alura',
      to: [
        {
          email: message.destination.email,
          name: message.destination.name,
          type: 'to'
        }
      ],
      headers: { 'Reply-To': process.env.MAILER_USERNAME },
      track_opens: true
    };
    this.client.messages.send(
      { message: messageToSend, async: true },
      () =>
        console.log(
          `Email enviando com sucesso para ${message.destination.name}.\n\n ${messageToSend.subject}\n\n${messageToSend.html}`
        ),
      error => console.error(`Email não enviado, erro:\n\n ${error}`)
    );
  }

  _buildMessage(destination, body) {
    return `<div style="width:95%;display:block;margin:0 auto;background-color:#fff"><div class="adM"></div>
      <div style="padding:20px;margin-bottom:30px;background-color:#2a7ae4">
          <div class="adM"></div>
          <a href="https://mandrillapp.com/track/click/30166754/www.alura.com.br?p=eyJzIjoibWd0RWtyRHY3dFhhTkFPdWc0UWFWTUZXMDhZIiwidiI6MSwicCI6IntcInVcIjozMDE2Njc1NCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3d3dy5hbHVyYS5jb20uYnJcIixcImlkXCI6XCI2ZTkzODBjOTMyMWY0ODY4OTg2MzFjYmQ2M2E1YmQ2NFwiLFwidXJsX2lkc1wiOltcIjJhZDdkMTdlMzMwMjc5ZGI1NDY2NTUyZGNmYzNiMmRhYjYzZDY3NjlcIl19In0" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://mandrillapp.com/track/click/30166754/www.alura.com.br?p%3DeyJzIjoibWd0RWtyRHY3dFhhTkFPdWc0UWFWTUZXMDhZIiwidiI6MSwicCI6IntcInVcIjozMDE2Njc1NCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3d3dy5hbHVyYS5jb20uYnJcIixcImlkXCI6XCI2ZTkzODBjOTMyMWY0ODY4OTg2MzFjYmQ2M2E1YmQ2NFwiLFwidXJsX2lkc1wiOltcIjJhZDdkMTdlMzMwMjc5ZGI1NDY2NTUyZGNmYzNiMmRhYjYzZDY3NjlcIl19In0&amp;source=gmail&amp;ust=1582393950548000&amp;usg=AFQjCNH6F1o75aNc-oTZjKDTMqwef6OLHA">
              <img style="display:inline-block;vertical-align:middle;width:100px" src="https://ci4.googleusercontent.com/proxy/HlkwqI7kHoyQ0aQNR1kwe1LJ1chk6kLgxZzE9uIRQWuqxNqfBNCht6dmK7twFwYAzRkCDOj4tKRef8cT2v6_76oexp3FERU94SEA=s0-d-e1-ft#https://www.alura.com.br/assets/img/alura-logo-email.png" class="CToWUd">
          </a>
      </div>

      <div style="padding:20px 40px">
        Olá ${destination.name}, tudo bem?<br><br>
        Confira algumas perguntas abertas nos últimos dias no fórum que você pode ajudar.<br>
        Se quem abriu o tópico marcar sua resposta como solução você ganha 1.000 pontos no ranking geral da Alura!<br><br>
        
        ${body}
        
        <br><br> 
        
      </div>
      <div style="padding-top:20px;margin-top:30px;border-top:solid 3px #f2ca26;padding:20px">
          <a style="color:#a9a9a9;text-decoration:none" href="http://alura.com.br" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://alura.com.br&amp;source=gmail&amp;ust=1582393950548000&amp;usg=AFQjCNHWQryDaVxXYuojbIHyB1rZ_CVrMw"><span class="il">alura</span>.com.br</a> | 
          <a href="https://cursos.alura.com.br/my_profile?unsubscribe-forum" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://cursos.alura.com.br/my_profile?unsubscribe-forum}&amp;source=gmail&amp;ust=1582393950548000&amp;usg=AFQjCNFkp_Eehx-YY8TfNTk0O_J4WUemRw">
            Não quero receber mais e-mails de dúvidas
          <a>
      </div>
  </div>`;
  }

  execute(result) {
      const messages = result.map(this.buildMessageObject)
      messages.forEach(this.sendMessage.bind(this))
  }

    buildMessageObject(result) {
        return {
            title: 'Vamos ajudar no fórum?',
            destination: result.user,
            body
        };
    }
}