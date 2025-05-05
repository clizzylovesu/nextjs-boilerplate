export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Welcome to <strong>4Court Pharmacy</strong></h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Your trusted community pharmacy in Blackburn.</p>

        <h2>Opening Hours</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Monday – Friday:</strong> 8 AM – 9 PM</li>
          <li><strong>Saturday:</strong> 8 AM – 9 PM</li>
          <li><strong>Sunday:</strong> 11 AM – 7 PM</li>
        </ul>

        <h2>Contact Us</h2>
        <p><a href="tel:+441254677447" style={{ color: '#0070f3' }}>📞 01254 677447</a></p>
        <p><a href="mailto:4courtltd@gmail.com" style={{ color: '#0070f3' }}>📧 4courtltd@gmail.com</a></p>
        <p><a href="https://maps.google.com/?q=Shell, Service Station, Whalley Banks, Blackburn BB2 1NT" target="_blank" style={{ color: '#0070f3' }}>📍 Shell, Whalley Banks, Blackburn BB2 1NT</a></p>

        <hr style={{ margin: '2rem 0' }} />

        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'gray' }}>
          &copy; 2025 4Court Pharmacy – Powered by Next.js & Vercel
        </p>
      </div>
    </div>
  );
}
