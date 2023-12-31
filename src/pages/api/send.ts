import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from "nodemailer"


export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("Senidng email", process.env.SENDER_EMAIL_ADDRESS)
    const dateTime = req.query.datetime
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL_ADDRESS,
        pass: process.env.SENDER_EMAIL_PASSWORD
        }
      });

    const mailOptions = {
      from: process.env.SENDER_ADDRESS,
      to: process.env.RECEIVER_EMAIL,
      subject: 'Confirmation of Our Upcoming Date',
      html: `
        <div>
          <p style="font-size" 18px;">Congratulations! You have a date on ${dateTime}</p>
          <img src='https://media1.tenor.com/m/hZw60xfIvkYAAAAC/tkthao219-bubududu.gif' height={280} width={280} />
        </div>
      `
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        return res.status(400).json(error);
      } else {
        res.status(200).json(info);
      }
    });
};
