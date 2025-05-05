xport default function Home() {
  return (
    <main style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        width: '90%',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ color: '#0070f3', marginBottom: '0.5rem' }}>Welcome to <strong>4Court Pharmacy</strong></h1>
        <p style={{ marginBottom: '2rem', color: '#444' }}>Your trusted community pharmacy in Blackburn.</p>

        <h3>Opening Hours</h3>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8', color: '#333' }}>
          <li><strong>Monday – Friday:</strong> 8 AM – 9 PM</li>
          <li><strong>Saturday:</strong> 8 AM – 9 PM</li>
          <li><strong>Sunday:</strong> 11 AM – 7 PM</li>
        </ul>

        <h3 style={{ marginTop: '2rem' }}>Contact Us</h3>
        <p>
          📞 <a href="tel:+441254677447" style={{ color: '#0070f3', textDecoration: 'none' }}>01254 677447</a><br />
          📧 <a href="mailto:4courtltd@gmail.com" style={{ color: '#0070f3', textDecoration: 'none' }}>4courtltd@gmail.com</a><br />
          📍 <a href="https://maps.google.com/?q=Shell, Whalley Banks, Blackburn BB2 1NT" target="_blank" style={{ color: '#0070f3', textDecoration: 'none' }}>
            Shell, Whalley Banks, Blackburn BB2 1NT
          </a>
        </p>

        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #ddd' }} />
        <p style={{ fontSize: '0.9rem', color: '#999' }}>&copy; 2025 4Court Pharmacy — Powered by Next.js & Vercel</p>
      </div>
    </main>
  );
}
