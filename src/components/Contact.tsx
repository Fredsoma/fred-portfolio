// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>

        {/* Direct email link (optional) */}
        <p className="mb-4">
          Email:{" "}
          <a
            href="mailto:hello@fredsoma.dev"
            className="text-blue-600 hover:underline"
          >
            hello@fredsoma.dev
          </a>
        </p>

        {/* GitHub link */}
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

        {/* FORMSPREE FORM */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* (Optional) Add a honeypot field to help prevent spam */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
