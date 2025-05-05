export default function Services() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(to bottom right, #f4f8ff, #ffffff)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: '#fff',
        padding: '2.5rem',
        borderRadius: '20px',
        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
        textAlign: 'left'
      }}>
        <h1 style={{ color: '#0075ff', marginBottom: '1rem' }}>Our Services</h1>
        <ul style={{ lineHeight: '1.8', color: '#333' }}>
          <li>✅ NHS and private prescriptions</li>
          <li>💬 Expert pharmacist advice & consultations</li>
          <li>💉 Flu & COVID-19 vaccinations</li>
          <li>📋 Medicine reviews (NMS)</li>
          <li>🩺 Blood pressure checks</li>
          <li>💊 Emergency contraception</li>
          <li>♻️ Free disposal of old medicines</li>
        </ul>
        <p style={{ marginTop: '2rem', color: '#555' }}>
          We’re here to keep you healthy. If you have any questions, feel free to contact us or visit the pharmacy!
        </p>
      </div>
    </main>
  );
}
