import { NextResponse } from "next/server";
import { MailtrapClient } from "mailtrap";

type ContactBody = {
  prenom?: string;
  nom?: string;
  societe?: string;
  telephone?: string;
  email?: string;
  activite?: string;
  pays?: string;
  commentaires?: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    const prenom = body.prenom?.trim() || "";
    const nom = body.nom?.trim() || "";
    const societe = body.societe?.trim() || "";
    const telephone = body.telephone?.trim() || "";
    const email = body.email?.trim() || "";
    const activite = body.activite?.trim() || "";
    const pays = body.pays?.trim() || "";
    const commentaires = body.commentaires?.trim() || "";

    // ✅ Validation
    if (!prenom || !nom || !societe || !telephone || !email || !activite) {
      return NextResponse.json(
        { message: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // ✅ Variables d'environnement
    const token = process.env.MAILTRAP_TOKEN;
    const senderEmail = process.env.MAIL_FROM;
    const receiverEmail = process.env.MAIL_TO;

    if (!token || !senderEmail || !receiverEmail) {
      return NextResponse.json(
        {
          message:
            "Configuration email incomplète. Vérifiez MAILTRAP_TOKEN, MAIL_FROM et MAIL_TO.",
        },
        { status: 500 }
      );
    }

    // ✅ Mailtrap client
    const client = new MailtrapClient({
      token,
    });

    // ✅ Envoi du mail
    await client.send({
      from: {
        email: senderEmail,
        name: "LAHALEX",
      },
      to: [
        {
          email: receiverEmail,
        },
      ],
      reply_to: {
        email,
        name: `${prenom} ${nom}`,
      },
      subject: `Nouveau contact site LAHALEX - ${prenom} ${nom}`,

      text: `
Nouveau message depuis le site LAHALEX

Prénom : ${prenom}
Nom : ${nom}
Société : ${societe}
Téléphone : ${telephone}
E-mail : ${email}
Activité : ${activite}
Pays : ${pays || "-"}
Commentaires : ${commentaires || "-"}
      `.trim(),

      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #111;">
          <h2>Nouveau message depuis le site LAHALEX</h2>

          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="border:1px solid #ddd; padding:8px;"><strong>Prénom</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">${escapeHtml(prenom)}</td>
            </tr>
            <tr>
              <td style="border:1px solid #ddd; padding:8px;"><strong>Nom</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">${escapeHtml(nom)}</td>
            </tr>
            <tr>
              <td style="border:1px solid #ddd; padding:8px;"><strong>Société</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">${escapeHtml(societe)}</td>
            </tr>
            <tr>
              <td style="border:1px solid #ddd; padding:8px;"><strong>Téléphone</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">${escapeHtml(telephone)}</td>
            </tr>
            <tr>
              <td style="border:1px solid #ddd; padding:8px;"><strong>Email</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="border:1px solid #ddd; padding:8px;"><strong>Activité</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">${escapeHtml(activite)}</td>
            </tr>
            <tr>
              <td style="border:1px solid #ddd; padding:8px;"><strong>Pays</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">${escapeHtml(pays || "-")}</td>
            </tr>
            <tr>
              <td style="border:1px solid #ddd; padding:8px;"><strong>Commentaires</strong></td>
              <td style="border:1px solid #ddd; padding:8px; white-space: pre-wrap;">
                ${escapeHtml(commentaires || "-")}
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Message envoyé avec succès." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur /apply/contact :", error);

    return NextResponse.json(
      { message: "Erreur serveur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}

// ✅ Sécurité XSS
function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}