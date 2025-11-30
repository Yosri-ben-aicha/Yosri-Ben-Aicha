import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Utiliser le service mailto pour l'instant
    // Pour une solution de production, utilisez Resend, SendGrid, ou Nodemailer
    const emailBody = `
Nouveau message depuis votre portfolio

Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}

---
Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
    `.trim();

    // Pour une vraie solution, vous devriez utiliser un service d'email
    // Exemple avec Resend (gratuit jusqu'à 3000 emails/mois):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: 'benaicha@et.esiea.fr',
    //   subject: subject,
    //   text: emailBody,
    //   replyTo: email,
    // });

    // Pour l'instant, on retourne un succès
    // L'email sera envoyé via mailto dans le frontend
    return NextResponse.json(
      { 
        success: true,
        message: "Message envoyé avec succès" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}

