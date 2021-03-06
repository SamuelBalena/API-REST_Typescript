import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
          host: 'smtp.mailtrap.io',
          port: 2525,
          auth: {
              user: '3b6f539cb961a6',
              pass: '7222daf8e537e6',
          }  
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subjetct,
            html: message.body,
        })
    }
}