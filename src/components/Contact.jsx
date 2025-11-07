import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((res) => (res.ok ? setStatus("SUCCESS") : setStatus("ERROR")))
      .catch(() => setStatus("ERROR"));
    form.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-accent mb-4">Contact</h2>
        <div className="bg-white/60 dark:bg-slate-800/60 p-6 rounded-lg">
          <p className="mb-4">
            Email:{" "}
            <a href="mailto:maidhamvinay@gmail.com" className="text-accent">
              maidhamvinay@gmail.com
            </a>
          </p>
          <p className="mb-4">Phone: +91 9963470058</p>
          <form
            action="https://formspree.io/f/movknleo"
            method="POST"
            onSubmit={submit}
            className="grid grid-cols-1 gap-3"
          >
            <input
              name="name"
              placeholder="Your name"
              className="input"
              required
            />
            <input
              name="_replyto"
              placeholder="Your email"
              className="input"
              type="email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              className="input"
              required
            />
            <button type="submit" className="btn-primary">
              Send Message
            </button>
            {status === "SUCCESS" && (
              <div className="text-green-600">Message sent ✅</div>
            )}
            {status === "ERROR" && (
              <div className="text-red-600">Error sending ❌</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
