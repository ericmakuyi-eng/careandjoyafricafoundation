"use client";

import type { MouseEvent } from "react";

const whatsAppNumber = "256777738484";

export default function ContactForm() {
  function getMessage(form: HTMLFormElement) {
    const data = new FormData(form);
    const organisation = String(data.get("Organisation") || "Not specified").trim() || "Not specified";

    return [
      "Hello Care & Joy Foundation Africa,",
      "",
      `Name: ${String(data.get("Name") || "")}`,
      `Email: ${String(data.get("Email") || "")}`,
      `Organisation: ${organisation}`,
      `Interest: ${String(data.get("Interest") || "")}`,
      "",
      "Message:",
      String(data.get("Message") || ""),
    ].join("\n");
  }

  function validate(form: HTMLFormElement) {
    if (!form.reportValidity()) return false;
    return true;
  }

  function sendWhatsApp(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form || !validate(form)) return;
    window.open(`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(getMessage(form))}`, "_blank", "noopener,noreferrer");
  }

  function sendEmail(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form || !validate(form)) return;
    const data = new FormData(form);
    const subject = `Website enquiry: ${String(data.get("Interest") || "General")}`;
    window.location.href = `mailto:info@careandjoyafrica.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(getMessage(form))}`;
  }

  return (
    <form className="contact-form">
      <div><label htmlFor="name">Your name</label><input id="name" name="Name" type="text" required /></div>
      <div><label htmlFor="email">Email address</label><input id="email" name="Email" type="email" required /></div>
      <div><label htmlFor="organisation">Organisation</label><input id="organisation" name="Organisation" type="text" /></div>
      <div><label htmlFor="interest">I am interested in</label><select id="interest" name="Interest" defaultValue="Donation"><option>Donation</option><option>Institutional partnership</option><option>Corporate partnership</option><option>Volunteering</option><option>Media enquiry</option><option>Programme referral</option><option>Other</option></select></div>
      <div className="form-full"><label htmlFor="message">How can we help?</label><textarea id="message" name="Message" rows={6} required /></div>
      <div className="form-full contact-form-actions"><button className="button button-primary" type="button" onClick={sendWhatsApp}>Send via WhatsApp <span>↗</span></button><button className="button button-outline" type="button" onClick={sendEmail}>Send via email <span>↗</span></button></div>
      <small className="form-full">Choose WhatsApp to send your completed enquiry to +256 777 738 484, or use your email application.</small>
    </form>
  );
}
