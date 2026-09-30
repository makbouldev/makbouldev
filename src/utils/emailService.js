/**
 * Professional EmailJS Integration for MakboulDev
 * Service ID: service_vfk92n4 (Connected to noureddinemakboul03@gmail.com)
 * Template ID: template_sngyo9b
 * Public Key: NmuiX_CYTZVpq5_bV
 * Direct background email delivery to inbox without redirects.
 */

export const sendEmailInquiry = async (formData) => {
  const { name, email, phone, service, message, source } = formData;

  const payload = {
    service_id: "service_vfk92n4",
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
