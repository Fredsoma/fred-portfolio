// src/components/Testimonials.tsx
interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Fred turned our outdated site into a scalable React app in under two months.",
    author: "Jane Doe, Acme Corp",
  },
  {
    quote:
      "His code quality is impeccable; we saw a 40% performance boost after launch.",
    author: "John Smith, Global Solutions",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
        <div className="space-y-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">“{t.quote}”</p>
              <p className="text-gray-500">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
