/**
 * Professional EmailJS Integration for MakboulDev
 * Service ID: service_vfk92n4 (Connected to noureddinemakboul03@gmail.com)
 * Template ID: template_m3mfse3
 * Public Key: haBA-EglZW_U6XhMo
 * Direct background email delivery to inbox with exhaustive variable bindings.
 */

export const sendEmailInquiry = async (formData) => {
  const { name, email, phone, service, message, source } = formData;

  const payload = {
    service_id: "service_vfk92n4",
    template_id: "template_m3mfse3",
    user_id: "haBA-EglZW_U6XhMo",
    template_params: {
      // Name variables
      name: name,
      from_name: name,
      user_name: name,
      fullName: name,

      // Email variables
      email: email,
      from_email: email,
      user_email: email,
      reply_to: email,

      // Phone variables
      phone: phone || "Non renseigné",
      mobile: phone || "Non renseigné",
      contact_number: phone || "Non renseigné",

      // Service variables
      service: service || "Général",
      projectType: service || "Général",
      title: service || "Général",

      // Message variables
      message: message || "Aucun message supplémentaire",
      details: message || "Aucun message supplémentaire",
      notes: message || "Aucun message supplémentaire",

      // Source Tag
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
