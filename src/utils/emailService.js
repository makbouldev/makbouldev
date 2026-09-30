/**
 * Direct Native Email Handler for MakboulDev
 * Sends form inquiries directly to contact@makbouldev.ma without third-party intermediaries.
 */

export const sendEmailInquiry = async (formData) => {
  const { name, email, phone, service, message, source } = formData;

  const subject = `[Devis MakboulDev] ${service || 'Nouveau Projet'} - ${name}`;
  
  const bodyText = 
`Bonjour MakboulDev,

Voici les détails de ma demande de devis :

- Nom complet : ${name}
- Email : ${email}
- Téléphone / WhatsApp : ${phone || 'Non renseigné'}
- Service souhaité : ${service || 'Général'}
- Origine : ${source || 'Site Web MakboulDev'}

--- Message / Détails du projet ---
${message || 'Aucun message supplémentaire.'}
`;

  const mailtoUrl = `mailto:contact@makbouldev.ma?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

  // Open native email client directly to contact@makbouldev.ma
  window.location.href = mailtoUrl;

  return { success: true, message: "Votre application de messagerie a été ouverte avec l'e-mail pré-rempli pour contact@makbouldev.ma !" };
};
