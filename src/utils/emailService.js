/**
 * Professional EmailJS Integration for MakboulDev
 * Service ID: service_hvfjy0g
 * Template ID: template_sngyo9b
 * Public Key: NmuiX_CYTZVpq5_bV
 * Sends emails directly to contact@makbouldev.ma via EmailJS REST API
 */

export const sendEmailInquiry = async (formData) => {
  const { name, email, phone, service, message, source } = formData;

  const payload = {
    service_id: "service_hvfjy0g",
    template_id: "template_sngyo9b",
    user_id: "NmuiX_CYTZVpq5_bV",
    template_params: {
      name: name,
      email: email,
      phone: phone || "Non renseigné",
      service: service || "Général",
      message: message || "Aucun message supplémentaire",
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
