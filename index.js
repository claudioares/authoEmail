const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port:  587,
    secure: false,
    auth: {
        user: '<email_de_envio>',
        pass: '<senhadoemail>'
    }
});
const arrEmail = ["<Arrey de emails a serem enviados menssagens>"]
transport.sendMail({
    from: 'Passa quem esta mandando <mesmo email_de_envio>',
    to: arrEmail,
    subject: "Email de teste",
    // Pode pegar o html de uma pagina e colocar aquí
    html: `<h1>Email teste de envio de mensagens automaticas<h2> </br>
            <p>Olá, estou enviando esse email para teste de aplicação</p>
            <p>Não é nescessário retornar a mensagem</p>`,
    // Mensagem reeserva caso a primeira não seja renderizada pelo navegador
    text: `Email teste de envio de mensagens automaticas.
            Olá, estou enviando esse email para testar minha aplicação
            Não é nescessário retornar a mensagem`
}).then(()=>console.log("Success send email!"))
.catch((err)=>console.log('Error process ', err));