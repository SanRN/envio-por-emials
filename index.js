import express, { json } from "express";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: ' Tu cuenta de Gmail', // Tu cuenta de Gmail
      pass: 'Tu contraseña de Gmail', // Tu contraseña de Gmail (o token de OAuth2 si es necesario)
    },
  });

app.post("/notificacion/rechaso", async (req, res)=>{
    try{
        const { emails } = req.body;
        if(!emails) {
            return res.status(400).json({ mensaje: 'se nesesita un destinatario' });
        }
        const envio = await transporter.sendMail({
            from: '"Hotel San Agustín Plaza" <santiagobg0203@gmail.com>',
            to: emails, 
            subject: "Resultado del proceso de selección en Hotel San Agustín Plaza",
            text: "Estimado/a candidato,\n\nLe agradecemos sinceramente el interés mostrado en formar parte del equipo del Hotel San Agustín Plaza. Después de evaluar cuidadosamente su candidatura, lamentamos informarle que no ha sido seleccionado/a para esta posición.\n\nValoramos mucho su tiempo y esfuerzo durante el proceso, y le animamos a seguir considerando futuras oportunidades con nosotros. Le deseamos éxito en su desarrollo profesional.\n\nAtentamente,\n[Nombre del Responsable del Proceso de Selección]\nHotel San Agustín Plaza",
            html: `
                <p>Estimado/a <b>candidato</b>,</p>
                <p>Le agradecemos sinceramente el interés mostrado en formar parte del equipo del <b>Hotel San Agustín Plaza</b>. Después de evaluar cuidadosamente su candidatura, lamentamos informarle que no ha sido seleccionado/a para esta posición.</p>
                <p>Valoramos mucho su tiempo y esfuerzo durante el proceso, y le animamos a seguir considerando futuras oportunidades con nosotros. Le deseamos éxito en su desarrollo profesional.</p>
                <p>Atentamente,</p>
                <b>Hotel San Agustín Plaza</b></p>
            `,
        })
        res.status(200).json(envio)
    }catch(error){
        res.status(500).json({mensage: error.message})
    }
})
app.post("/notificacion/aceptacion", async (req, res)=>{
    try{
        const { emails } = req.body;
        if(!emails) {
            return res.status(400).json({ mensaje: 'se nesesita un destinatario' });
        }
        const envio = await transporter.sendMail({
            from: '"Hotel San Agustín Plaza" <santiagobg0203@gmail.com>',
            to: emails, 
            subject: "Felicidades, ha sido seleccionado/a en el Hotel San Agustín Plaza",
            text: `Estimado/a,

            Nos complace informarle que, tras un exhaustivo proceso de selección, ha sido seleccionado/a para formar parte de nuestro equipo en el Hotel San Agustín Plaza. 

            Estamos muy emocionados de contar con su talento y compromiso. Próximamente nos pondremos en contacto para ultimar los detalles de su incorporación.

            Le damos la bienvenida y le agradecemos por elegirnos como parte de su desarrollo profesional.

            Atentamente,
            Hotel San Agustín Plaza`,
            html: `
                <p>Estimado/a,</p>
                <p>Nos complace informarle que, tras un exhaustivo proceso de selección, ha sido seleccionado/a para formar parte de nuestro equipo en el <b>Hotel San Agustín Plaza</b>.</p>
                <p>Estamos muy emocionados de contar con su talento y compromiso. Próximamente nos pondremos en contacto para ultimar los detalles de su incorporación.</p>
                <p>Le damos la bienvenida y le agradecemos por elegirnos como parte de su desarrollo profesional.</p>
                <p>Atentamente,</p>
                <p><b>Hotel San Agustín Plaza</b></p>
            `,
        });
        res.status(200).json(envio)
    }catch(error){
        res.status(500).json({mensage: error.message})
    }
})
app.post("/notificacion", async (req, res)=>{
    try{
        const { emails } = req.body;
        if(!emails) {
            return res.status(400).json({ mensaje: 'se nesesita un destinatario' });
        }
        const envio = await transporter.sendMail({
            from: '"Hotel San Agustín Plaza" <santiagobg0203@gmail.com>',
            to: emails, 
            subject: "[Asunto de la notificación]",
            text: `Estimado/a,
        
            Le informamos lo siguiente:
            
            [Texto de la notificación].
            
            Agradecemos su atención a este mensaje. Por favor, no dude en contactarnos en caso de dudas o aclaraciones.
            
            Atentamente,
            Hotel San Agustín Plaza`,
            html: `
                <p>Estimado/a,</p>
                <p>Le informamos lo siguiente:</p>
                <p><b>[Texto de la notificación]</b></p>
                <p>Agradecemos su atención a este mensaje. Por favor, no dude en contactarnos en caso de dudas o aclaraciones.</p>
                <p>Atentamente,</p>
                <p><b>Hotel San Agustín Plaza</b></p>
            `,
        })
        res.status(200).json(envio)
    }catch(error){
        res.status(500).json({mensage: error.message})
    }
})

app.listen(3000, '0.0.0.0', () => {
    console.log("server listen on http://192.168.1.158:3000/");
  });
