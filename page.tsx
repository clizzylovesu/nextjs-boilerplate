export default function Home() {
  return (
    <main style={{
      background: 'linear-gradient(to bottom right, #f0f4ff, #ffffff)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        background: '#fff',
        padding: '2.5rem',
        borderRadius: '20px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#1a1a1a' }}>
          Welcome to <span style={{ color: '#0057ff', fontWeight: 700 }}>4Court Pharmacy</span>
        </h1>
        <p style={{ marginTop: '0.5rem', color: '#555' }}>
          Your trusted community pharmacy in Blackburn.
        </p>

        <div style={{
          marginTop: '2rem',
          backgroundColor: '#f9fbff',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'left'
        }}>
          <h3 style={{ color: '#1a1a1a', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            ⏰ <span style={{ marginLeft: '0.5rem' }}>Opening Hours</span>
          </h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '1.8' }}>
            <li><strong>Monday – Friday:</strong> 8 AM–9 PM</li>
            <li><strong>Saturday:</strong> 9 AM–4 PM</li>
            <li><strong>Sunday:</strong> Closed</li>
          </ul>
        </div>

        <div style={{
          marginTop: '1.5rem',
          backgroundColor: '#f9fbff',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'left'
        }}>
          <h3 style={{ color: '#1a1a1a', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            📞 <span style={{ marginLeft: '0.5rem' }}>Contact Us</span>
          </h3>
          <p style={{ margin: 0, lineHeight: '1.8' }}>
            <a href="tel:+441254678447" style={{ textDecoration: 'none', color: '#0057ff' }}>
              📱 01254 678447
            </a><br />
            <a href="mailto:4court@gmail.com" style={{ textDecoration: 'none', color: '#0057ff' }}>
              📧 4court@gmail.com
            </a><br />
            <a href="https://maps.google.com/?q=Shell, Whalley Banks, Blackburn BB2 1NT" target="_blank" style={{ textDecoration: 'none', color: '#0057ff' }}>
              📍 Shell, Whalley Banks, Blackburn BB2 1NT
            </a>
          </p>
        </div>
        {/* Prescriptions Section */}
<div style={{ marginTop: '2rem', backgroundColor: '#f0f7ff', borderRadius: '12px', padding: '1.5rem' }}>
  <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>💊 Prescriptions</h3>
  <p style={{ lineHeight: '1.8' }}>
    We dispense NHS and private prescriptions with expert advice and quick service. 
    You can also <strong>request repeat prescriptions</strong> and speak to our pharmacist for any concerns.
  </p>
</div>

{/* NHS Services Section */}
<div style={{ marginTop: '2rem', backgroundColor: '#f0f7ff', borderRadius: '12px', padding: '1.5rem' }}>
  <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>🏥 NHS Services</h3>
  <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
    <li>Blood pressure checks</li>
    <li>Emergency contraception</li>
    <li>Flu & COVID-19 vaccinations</li>
    <li>Medicine reviews (NMS)</li>
    <li>Free disposal of old medicines</li>
  </ul>
</div>

{/* WhatsApp Booking */}
<div style={{ marginTop: '2rem', textAlign: 'center' }}>
  <a href="https://wa.me/441254677447" target="_blank" style={{ 
    backgroundColor: '#25D366', 
    color: '#fff', 
    padding: '0.8rem 1.5rem', 
    borderRadius: '8px', 
    textDecoration: 'none', 
    fontWeight: 'bold', 
    display: 'inline-block',
    boxShadow: '0 3px 10px rgba(0,0,0,0.15)'
  }}>
    📱 Book via WhatsApp
  </a>
</div>

        <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#888' }}>
          © 2025 4Court Pharmacy · Powered by Next.js + Vercel
        </p>
      </div>
    </main>
  );
}
