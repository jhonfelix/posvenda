import nodemailer from "nodemailer";

type EmailPayload = {
  to: any;
  subject: string;
  html: string;
};


// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || "2525"),
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
};

export const sendEmail = async (data: EmailPayload) => {

  let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'contato@posvenda.net.br', // generated ethereal user
        pass: 'M@ndr@k3*ho', // generated ethereal password
    }
});

return await transporter.sendMail({
  from: 'contato@posvenda.net.br',
  ...data,
});
 /* const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    ...data,
  });*/
};
