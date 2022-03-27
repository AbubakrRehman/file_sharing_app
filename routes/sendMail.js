const nodemailer=require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:false,
    port:587,
    requireTLS:true,
    auth: {
      user: 'abubakr.rehman91@gmail.com',
      pass: 'Abubakr@@@7086',
     
    }
  });

  var mailOptions = {
    from: 'abhishekpjadhav111@gmail.com',
    to: 'abubakr.rehman91@outlook.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
