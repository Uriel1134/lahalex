import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { MailtrapTransport } from "mailtrap"

export const runtime = "nodejs"

const MAX_FILE_SIZE = 10 * 1024 * 1024

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

function toSafeString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : ""
}

function jsonResponse(message: string, status = 200) {
  return NextResponse.json({ message }, { status })
}

const transport = nodemailer.createTransport(
  MailtrapTransport({
    token: process.env.MAILTRAP_TOKEN || "",
  })
)

export async function POST(req: Request) {
  try {
    if (!process.env.MAILTRAP_TOKEN) {
      return jsonResponse("MAILTRAP_TOKEN manquant dans les variables d'environnement.", 500)
    }

    if (!process.env.MAIL_FROM) {
      return jsonResponse("MAIL_FROM manquant dans les variables d'environnement.", 500)
    }

    if (!process.env.MAIL_TO) {
      return jsonResponse("MAIL_TO manquant dans les variables d'environnement.", 500)
    }

    const formData = await req.formData()

    const poste = toSafeString(formData.get("poste"))
    const nom = toSafeString(formData.get("nom"))
    const prenom = toSafeString(formData.get("prenom"))
    const email = toSafeString(formData.get("email"))
    const telephone = toSafeString(formData.get("telephone"))
    const cv = formData.get("cv")

    if (!poste || !nom || !prenom || !email || !telephone || !cv) {
      return jsonResponse("Tous les champs sont obligatoires.", 400)
    }

    if (!(cv instanceof File)) {
      return jsonResponse("CV invalide.", 400)
    }

    if (!ALLOWED_TYPES.includes(cv.type)) {
      return jsonResponse("Formats autorisés : PDF, DOC, DOCX.", 400)
    }

    if (cv.size > MAX_FILE_SIZE) {
      return jsonResponse("Le fichier est trop volumineux. Taille maximale : 10 MB.", 400)
    }

    const buffer = Buffer.from(await cv.arrayBuffer())

    await transport.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Nouvelle candidature - ${poste}`,
      text: `
Nouvelle candidature reçue

Poste : ${poste}
Nom : ${nom}
Prénom : ${prenom}
Email : ${email}
Téléphone : ${telephone}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nouvelle candidature reçue</h2>
          <p><strong>Poste :</strong> ${poste}</p>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Prénom :</strong> ${prenom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${telephone}</p>
          <p>Le CV est joint à ce message.</p>
        </div>
      `,
      attachments: [
        {
          filename: cv.name,
          content: buffer,
          contentType: cv.type,
        },
      ],
    })

    return jsonResponse("Votre candidature a été envoyée avec succès.", 200)
  } catch (error) {
    console.error("Erreur API recrutement:", error)

    const message =
      error instanceof Error
        ? error.message
        : "Erreur interne lors de l'envoi de la candidature."

    return jsonResponse(message, 500)
  }
}