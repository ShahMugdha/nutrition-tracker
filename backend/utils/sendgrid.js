import env from 'dotenv';
env.config();
import sendGridMail from '@sendgrid/mail';
sendGridMail.setApiKey(process.env.SG);

export const sendMail = async (to, html) => {
  const msg = {
    to: to,
    auth: {
      user: "shahmugdha15@gmail.com",
      pass: "m1u2g3d4h5a6"
    },
    from: {
      email: 'shahmugdha15@gmail.com',
      name: "DIET TRACKER",
    }, 
    subject: 'Email Verification',
    html: html,
  };
  console.log(msg, "msg")
  await sendGridMail.send(msg, (err) => {
    if (err) {console,log('email not sent')} //return res.status(500).json({message: err.message}); 
    //return res.status(200).json({message: 'A reset email has been sent to ' + user.email + '.'});
  })
  .catch((e) => {
    console.log('%c 🍾 e: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', e);
  });
};