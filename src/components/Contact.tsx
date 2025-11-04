"use client";

import React, { useRef, useState, useEffect } from "react";

const recipient = "tchimmoedjatcheemmanuel@gmail.com";
const FORM_ACTION = `https://formsubmit.co/${encodeURIComponent(recipient)}`;

type MessageState = { type: "success" | "error"; text: string } | null;

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const triedNativeRef = useRef(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<MessageState>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = formRef.current;
    if (!form) {
      setLoading(false);
      return;
    }

    const data = new FormData(form);
    const replyTo = (data.get("email") as string) || "";
    data.append("_replyto", replyTo);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      // Diagnostic log (open browser console to see)
      const text = await res.text();
      console.log("[Contact] formsubmit status:", res.status, "body:", text);

      if (res.ok) {
        setMessage({ type: "success", text: "Message sent — thanks! I will reply soon." });
        form.reset();
      } else {
        setMessage({ type: "error", text: `Server replied: ${text || `status ${res.status}`}` });
      }
    } catch (err: unknown) {
      console.error("[Contact] fetch error:", err);

      // If fetch fails (CORS/network), try native submit once:
      if (!triedNativeRef.current) {
        triedNativeRef.current = true;
        console.warn("[Contact] Fetch failed — attempting native form.submit() fallback (page will navigate).");
        setTimeout(() => {
          try {
            (form as HTMLFormElement).submit();
          } catch (submitErr) {
            console.error("[Contact] native submit failed:", submitErr);

            // Narrowing the original error if it's an Error to show a message with details.
            if (submitErr instanceof Error) {
              setMessage({ type: "error", text: `Network error and native submit failed: ${submitErr.message}` });
            } else {
              setMessage({ type: "error", text: "Network error and native submit failed. Check console and FormSubmit dashboard." });
            }
            setLoading(false);
          }
        }, 50);
        return; // native submit will navigate away
      }

      // Narrow the error before using it.
      if (err instanceof Error) {
        setMessage({ type: "error", text: `Network error: ${err.message}` });
      } else {
        setMessage({ type: "error", text: "Network error. Check console or try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>

        <p className="mb-4">
          Email:{" "}
          <a href={`mailto:${recipient}`} className="text-blue-600 hover:underline">
            {recipient}
          </a>
        </p>

        <p className="mb-8">
          Or connect on{" "}
          <a
            href="https://github.com/fredsoma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </p>

        <form
          ref={formRef}
          action={FORM_ACTION}
          method="POST"
          className="space-y-4 relative"
          onSubmit={handleSubmit}
        >
          {loading && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
              <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="✉️ New Contact Message" />
          <input type="hidden" name="_format" value="json" />

          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input id="name" name="name" type="text" placeholder="Your Name" required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input id="email" name="email" type="email" placeholder="Your Email" required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows={4} required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <input type="text" name="_gotcha" style={{ display: "none" }} />

          {message && <div className={message.type === "success" ? "text-green-700" : "text-red-700"}>{message.text}</div>}

          <button type="submit" disabled={loading} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
