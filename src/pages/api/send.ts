import type { NextApiRequest, NextApiResponse } from 'next';
import EmailTemplate from '@/components/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("Senidng email")
  const { data, error } = await resend.emails.send({
    from: process.env.SENDER_ADDRESS as string,
    to: [process.env.SENDER_EMAIL as string],
    subject: 'Date Fixed',
    react: EmailTemplate(),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
