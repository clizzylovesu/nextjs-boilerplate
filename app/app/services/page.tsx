import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-poppins">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center shadow-sm">
        <h1 className="text-4xl font-semibold text-blue-700 mb-4">
          Trusted Local Care. Delivered with Heart.
        </h1>
        <p className="max-w-xl mx-auto text-lg">
          Welcome to 4Court Pharmacy — your trusted community pharmacy in Blackburn offering expert support, NHS services, and more.
        </p>
        <div className="mt-8">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition">
            Request Prescription
          </button>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <Image src="/pharmacist.jpg" alt="Jane Doe" width={200} height={200} className="rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Jane Doe</h3>
            <p className="text-sm text-gray-600">Lead Pharmacist</p>
          </div>
          <div className="text-center">
            <Image src="/staff2.jpg" alt="Aisha Khan" width={200} height={200} className="rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Aisha Khan</h3>
            <p className="text-sm text-gray-600">Dispensing Assistant</p>
          </div>
          <div className="text-center">
            <Image src="/staff3.jpg" alt="Tom Patel" width={200} height={200} className="rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Tom Patel</h3>
            <p className="text-sm text-gray-600">Medicines Advisor</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "NHS Prescriptions", desc: "Get your prescriptions filled quickly and easily." },
            { title: "Flu & COVID Vaccines", desc: "Stay protected with our vaccination services." },
            { title: "Blood Pressure Checks", desc: "Walk in for a fast and accurate BP check." },
            { title: "Travel Advice", desc: "Planning a trip? We’ll guide your health needs." },
            { title: "Medicine Reviews", desc: "Sit down with our pharmacist to discuss your meds." },
            { title: "Emergency Contraception", desc: "Discreet and expert service on the same day." },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <h2 className="text-3xl font-semibold mb-4">Have Questions?</h2>
        <p className="mb-6">Our team is here to help. Message us anytime.</p>
        <a
          href="https://wa.me/441254678447"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Book via WhatsApp
        </a>
      </section>
    </div>
  );
}
