const nodemailer=require('nodemailer');

const sendMail=(to,from,subject,text)=>{



var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:false,
    port:587,
    requireTLS:true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
     
    }
  });

  var mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text:text
  };



  return new Promise((resolve,reject)=>{
      transporter.sendMail(mailOptions, function(error, info){
    if (error)
      reject(error)
    else 
      resolve(info)
    });
});



}
module.exports=sendMail;