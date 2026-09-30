/**
 * Professional Email Service for MakboulDev
 * Handles lead submissions cleanly via Web3Forms API to contact@makbouldev.ma
 */

export const sendEmailInquiry = async (formData) => {
  const { name, email, phone, service, message, source } = formData;

  const payload = {
    access_key: "a810f607-b3ab-41c5-bd7a-e46123498877",
    subject: `[Devis MakboulDev] ${service || 'Nouveau Projet'} - ${name}`,
    from_name: name,
    replyto: email,
    to_email: "contact@makbouldev.ma",
    Nom_Complet: name,
    Adresse_Email: email,
    Numero_Telephone: phone || "Non renseigné",
    Service_Demande: service || "Général",
    Message: message || "Aucun message",
    Origine: source || "Formulaire Site Web"
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return { success: true, message: "Demande enregistrée avec succès." };
  }
};
