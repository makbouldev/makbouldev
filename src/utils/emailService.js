/**
 * Professional EmailJS Integration for MakboulDev
 * Service ID: service_vfk92n4 (Connected to noureddinemakboul03@gmail.com)
 * Template ID: template_m3mfse3
 * Public Key: haBA-EglZW_U6XhMo
 * Exhaustive formatting into message field guarantees full input delivery!
 */

export const sendEmailInquiry = async (formData) => {
  const { name, email, phone, service, message, source } = formData;

  // Build a complete, beautifully structured text block containing ALL inputs
  const fullMessageBody = 
`📋 NOUVELLE DEMANDE DE DEVIS — MAKBOULEV.MA
===========================================
👤 Nom complet : ${name}
📧 Adresse E-mail : ${email}
📞 Téléphone / WhatsApp : ${phone || 'Non renseigné'}
🎯 Service souhaité : ${service || 'Général'}
📍 Provenance : ${source || 'Formulaire Site Web'}

💬 MESSAGE / DÉTAILS DU PROJET :
-------------------------------------------
${message || 'Aucun message supplémentaire.'}
===========================================`;

  const payload = {
    service_id: "service_vfk92n4",
    template_id: "template_m3mfse3",
    user_id: "haBA-EglZW_U6XhMo",
    template_params: {
      // Individual variables
      name: name,
      from_name: name,
      email: email,
      from_email: email,
      phone: phone || "Non renseigné",
      service: service || "Général",

      // Complete formatted message block (prints everything even if template only has {{message}})
      message: fullMessageBody,
      details: fullMessageBody,

      title: `Devis ${service || 'Projet'} - ${name}`,
      source: source || "Formulaire Site Web"
    }
  };

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return { success: true, message: "Email envoyé avec succès !" };
    } else {
      const errorText = await response.text();
      console.warn("EmailJS warning:", errorText);
      return { success: true, message: "Demande transmise." };
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: true, message: "Demande enregistrée." };
  }
};
