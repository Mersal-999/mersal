
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  ChefHat,
  Dumbbell,
  Mail,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Terminal,
  Laptop,
  Zap
} from "lucide-react";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Remove white space/margins
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflowX = 'hidden';

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:md@gmail.com?subject=${encodeURIComponent(`Bewerbungsanfrage von ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', message: '' });
    setShowContactForm(false);
  };

  const hobbies = [
    {
      icon: ChefHat,
      title: "Kochen",
      description: "Kreativität in der Küche - ich liebe es, neue Rezepte auszuprobieren",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
    },
    {
      icon: Code2,
      title: "Programmieren",
      description: "Leidenschaft für Code - ich entwickle eigene Projekte",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    },
    {
      icon: Dumbbell,
      title: "Fitness",
      description: "Körper und Geist in Balance - regelmäßiges Training",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
    }
  ];

  const skills = [
    { name: "JavaScript", icon: "JS", level: "Fortgeschritten", gradient: "linear-gradient(135deg, #fbbf24 0%, #ca8a04 100%)" },
    { name: "HTML", icon: "HTML", level: "Fortgeschritten", gradient: "linear-gradient(135deg, #f97316 0%, #dc2626 100%)" },
    { name: "CSS", icon: "CSS", level: "Fortgeschritten", gradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)" },
    { name: "React", icon: "REACT", level: "Grundkenntnisse", gradient: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)" },
    { name: "Vue.js", icon: "VUE", level: "Grundkenntnisse", gradient: "linear-gradient(135deg, #2dd4bf 0%, #06b6d4 100%)" }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      background: 'linear-gradient(135deg, #020617 0%, #1e3a8a 50%, #020617 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      overflowX: 'hidden'
    },
    heroSection: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(2,6,23,0.95) 0%, rgba(30,58,138,0.9) 50%, rgba(8,51,68,0.95) 100%)',
      zIndex: 10
    },
    heroImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3
    },
    heroContent: {
      position: 'relative',
      zIndex: 30,
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
      padding: isMobile ? '0 20px' : '0 24px'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: isMobile ? '8px 16px' : '8px 24px',
      background: 'rgba(6,182,212,0.2)',
      backdropFilter: 'blur(12px)',
      color: '#67e8f9',
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '500',
      border: '1px solid rgba(6,182,212,0.3)',
      borderRadius: '9999px',
      marginBottom: isMobile ? '20px' : '24px'
    },
    mainTitle: {
      fontSize: isMobile ? '28px' : '80px',
      fontWeight: 'bold',
      marginBottom: isMobile ? '20px' : '24px',
      color: 'white',
      lineHeight: isMobile ? '1.3' : '1.1',
      textShadow: '0 20px 40px rgba(0,0,0,0.5)'
    },
    gradientText: {
      background: 'linear-gradient(90deg, #22d3ee 0%, #60a5fa 50%, #14b8a6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'block',
      marginTop: isMobile ? '10px' : '0',
      fontSize: isMobile ? '22px' : 'inherit'
    },
    subtitle: {
      fontSize: isMobile ? '14px' : '24px',
      color: '#dbeafe',
      marginBottom: isMobile ? '12px' : '16px',
      maxWidth: '900px',
      margin: isMobile ? '0 auto 12px' : '0 auto 16px',
      lineHeight: '1.6',
      padding: isMobile ? '0 10px' : '0'
    },
    description: {
      fontSize: isMobile ? '15px' : '18px',
      color: '#bfdbfe',
      marginBottom: isMobile ? '32px' : '48px',
      maxWidth: '800px',
      margin: isMobile ? '0 auto 32px' : '0 auto 48px',
      lineHeight: '1.6',
      padding: isMobile ? '0 10px' : '0'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      padding: isMobile ? '0 20px' : '0'
    },
    primaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
      color: 'white',
      padding: isMobile ? '14px 28px' : '16px 32px',
      fontSize: isMobile ? '15px' : '18px',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 20px 40px rgba(6,182,212,0.5)',
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '340px' : 'none'
    },
    secondaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      color: '#67e8f9',
      padding: isMobile ? '14px 28px' : '16px 32px',
      fontSize: isMobile ? '15px' : '18px',
      borderRadius: '12px',
      border: '2px solid rgba(103,232,249,0.5)',
      cursor: 'pointer',
      fontWeight: 'bold',
      backdropFilter: 'blur(12px)',
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '340px' : 'none'
    },
    section: {
      padding: isMobile ? '48px 20px' : '96px 24px',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionTitle: {
      textAlign: 'center',
      marginBottom: isMobile ? '40px' : '64px'
    },
    sectionBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: isMobile ? '8px 16px' : '8px 16px',
      background: 'rgba(6,182,212,0.1)',
      backdropFilter: 'blur(12px)',
      color: '#67e8f9',
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '500',
      border: '1px solid rgba(6,182,212,0.2)',
      borderRadius: '9999px',
      marginBottom: '16px'
    },
    h2: {
      fontSize: isMobile ? '32px' : '56px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: isMobile ? '16px' : '24px',
      lineHeight: '1.2',
      padding: isMobile ? '0 10px' : '0'
    },
    sectionDescription: {
      fontSize: isMobile ? '15px' : '20px',
      color: '#bfdbfe',
      maxWidth: '900px',
      margin: '0 auto',
      padding: isMobile ? '0 10px' : '0',
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isMobile ? '20px' : '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    card: {
      background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.8) 100%)',
      backdropFilter: 'blur(12px)',
      padding: isMobile ? '24px' : '24px',
      borderRadius: '16px',
      border: '1px solid rgba(71,85,105,0.5)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    skillIcon: {
      width: isMobile ? '56px' : '64px',
      height: isMobile ? '56px' : '64px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: isMobile ? '13px' : '14px'
    },
    cardTitle: {
      fontSize: isMobile ? '18px' : '20px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '8px'
    },
    cardLevel: {
      fontSize: isMobile ? '13px' : '14px',
      color: '#67e8f9',
      fontWeight: '500',
      marginBottom: '12px'
    },
    progressBar: {
      height: '8px',
      background: 'rgba(51,65,85,0.5)',
      borderRadius: '9999px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      borderRadius: '9999px',
      transition: 'width 1s ease'
    },
    hobbyCard: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
      transition: 'all 0.5s ease',
      cursor: 'pointer',
      height: isMobile ? '300px' : '320px'
    },
    hobbyImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    hobbyOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(15,23,42,1) 0%, rgba(15,23,42,0.6) 50%, transparent 100%)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: isMobile ? '24px' : '24px'
    },
    hobbyIconBox: {
      background: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(59,130,246,0.2) 100%)',
      backdropFilter: 'blur(12px)',
      width: isMobile ? '44px' : '48px',
      height: isMobile ? '44px' : '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(103,232,249,0.3)',
      marginBottom: '12px',
      transition: 'transform 0.3s ease'
    },
    hobbyTitle: {
      fontSize: isMobile ? '20px' : '24px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '8px'
    },
    hobbyDescription: {
      fontSize: isMobile ? '14px' : '14px',
      color: '#bfdbfe',
      lineHeight: '1.5'
    },
    contactPopup: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(8px)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '20px' : '16px'
    },
    contactForm: {
      background: 'white',
      borderRadius: '16px',
      padding: isMobile ? '24px' : '32px',
      maxWidth: '500px',
      width: '100%',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      maxHeight: '90vh',
      overflowY: 'auto'
    },
    formHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px'
    },
    formTitle: {
      fontSize: isMobile ? '20px' : '24px',
      fontWeight: 'bold',
      color: '#0f172a'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '32px',
      color: '#94a3b8',
      cursor: 'pointer',
      padding: 0,
      lineHeight: 1
    },
    formGroup: {
      marginBottom: '16px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#334155',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s ease',
      resize: 'none',
      boxSizing: 'border-box'
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
      color: 'white',
      padding: '12px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 20px rgba(6,182,212,0.3)'
    },
    footer: {
      padding: isMobile ? '40px 20px' : '48px 24px',
      borderTop: '1px solid rgba(51,65,85,0.5)',
      position: 'relative'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    },
    footerText: {
      color: '#67e8f9',
      fontSize: isMobile ? '14px' : '14px',
      lineHeight: '1.6'
    },
    footerSubtext: {
      color: 'rgba(96,165,250,0.6)',
      fontSize: isMobile ? '13px' : '12px',
      marginTop: '8px',
      lineHeight: '1.5'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: '32px',
      padding: isMobile ? '20px' : '24px',
      background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.8) 100%)',
      backdropFilter: 'blur(12px)',
      borderRadius: '16px',
      border: '1px solid rgba(71,85,105,0.5)',
      maxWidth: '600px',
      margin: '32px auto 0'
    },
    contactInfoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#dbeafe',
      fontSize: isMobile ? '15px' : '16px'
    },
    contactInfoIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '24px' : '32px',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    aboutText: {
      fontSize: isMobile ? '15px' : '18px',
      color: '#dbeafe',
      lineHeight: '1.7',
      marginBottom: '16px'
    },
    featureTag: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(34,211,238,0.1)',
      backdropFilter: 'blur(12px)',
      padding: isMobile ? '8px 14px' : '8px 16px',
      borderRadius: '9999px',
      border: '1px solid rgba(34,211,238,0.2)'
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}>
          <div style={styles.heroOverlay} />
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop"
            alt="Workspace"
            style={styles.heroImage}
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(6,182,212,0.2) 100%)',
              zIndex: 20
            }}
          />
        </div>

        <div style={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.badge}>
              <Sparkles style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Auf der Suche nach meiner Zukunft
            </div>

            <h1 style={styles.mainTitle}>
              Amed Ali<br />
              <span style={styles.gradientText}>
                Fachinformatiker Anwendungsentwicklung
              </span>
            </h1>

            <p style={styles.subtitle}>
              Motivierter Bewerber mit Leidenschaft für Technologie
            </p>

            <p style={styles.description}>
              Ich suche eine Ausbildung, in der ich meine Begeisterung für das Programmieren
              in praktische Fähigkeiten verwandeln kann
            </p>

            <div style={styles.buttonContainer}>
              <button
                onClick={() => scrollToSection('about')}
                style={styles.primaryButton}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 25px 50px rgba(6,182,212,0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 20px 40px rgba(6,182,212,0.5)';
                  }
                }}
              >
                Mehr über mich
                <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                style={styles.secondaryButton}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'rgba(6,182,212,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                <Mail style={{ marginRight: '8px', width: '20px', height: '20px' }} />
                Kontakt aufnehmen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Popup */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={styles.contactPopup}
          onClick={() => setShowContactForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={styles.contactForm}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.formHeader}>
              <h3 style={styles.formTitle}>Kontaktiere mich</h3>
              <button
                onClick={() => setShowContactForm(false)}
                style={styles.closeButton}
                onMouseEnter={(e) => e.target.style.color = '#475569'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Dein Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  style={styles.input}
                  placeholder="Max Mustermann"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#06b6d4';
                    e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#cbd5e1';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Deine E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  style={styles.input}
                  placeholder="max@beispiel.de"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#06b6d4';
                    e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#cbd5e1';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Deine Nachricht
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="4"
                  style={styles.textarea}
                  placeholder="Schreib mir eine Nachricht..."
                  onFocus={(e) => {
                    e.target.style.borderColor = '#06b6d4';
                    e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#cbd5e1';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                style={styles.submitButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 30px rgba(6,182,212,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 20px rgba(6,182,212,0.3)';
                }}
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionTitle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={styles.sectionBadge}>
              <GraduationCap style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Über mich
            </div>
            <h2 style={styles.h2}>Wer bin ich?</h2>
            <p style={styles.sectionDescription}>
              Ein motivierter Bewerber mit großer Leidenschaft für Technologie und Programmierung
            </p>
          </motion.div>
        </div>

        <div style={styles.aboutGrid}>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
                alt="Programmierung"
                style={{ width: '100%', height: isMobile ? '300px' : '400px', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Terminal style={{ width: '32px', height: '32px', color: '#22d3ee' }} />
                  <div>
                    <p style={{ color: 'white', fontWeight: '600', fontSize: isMobile ? '14px' : '16px' }}>Code ist meine Leidenschaft</p>
                    <p style={{ color: '#67e8f9', fontSize: isMobile ? '12px' : '14px' }}>Jeden Tag etwas Neues lernen</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={styles.aboutText}>
                Hallo! Ich bin auf der Suche nach einer <span style={{ color: '#22d3ee', fontWeight: '600' }}>Ausbildung als Fachinformatiker für Anwendungsentwicklung</span>.
                Was mich antreibt, ist die Faszination für Technologie und die Möglichkeit,
                durch Code echte Lösungen zu schaffen.
              </p>

              <p style={styles.aboutText}>
                Ich habe bereits <span style={{ color: '#22d3ee', fontWeight: '600' }}>Grundkenntnisse in JavaScript, HTML, CSS, React und Vue.js</span> und
                arbeite kontinuierlich an eigenen Projekten, um meine Fähigkeiten zu verbessern.
              </p>

              <p style={styles.aboutText}>
                Neben dem Programmieren bin ich sportlich aktiv, koche gerne und schätze
                die Balance zwischen konzentrierter Arbeit und aktiver Erholung.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '16px' }}>
                {[
                  { icon: Zap, text: 'Schnell lernend', color: '#22d3ee' },
                  { icon: Laptop, text: 'Technikbegeistert', color: '#60a5fa' },
                  { icon: Terminal, text: 'Praxisorientiert', color: '#14b8a6' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} style={styles.featureTag}>
                      <Icon style={{ width: '16px', height: '16px', color: item.color }} />
                      <span style={{ color: item.color, fontWeight: '500', fontSize: isMobile ? '13px' : '14px' }}>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionTitle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={styles.sectionBadge}>
              <Code2 style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Meine Fähigkeiten
            </div>
            <h2 style={styles.h2}>Technologien & Skills</h2>
            <p style={styles.sectionDescription}>
              Mein aktueller Kenntnisstand und wo ich hin möchte
            </p>
          </motion.div>
        </div>

        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={styles.card}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.border = '1px solid rgba(6,182,212,0.5)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(6,182,212,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.border = '1px solid rgba(71,85,105,0.5)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <div style={{ ...styles.skillIcon, background: skill.gradient }}>
                {skill.icon}
              </div>
              <h3 style={styles.cardTitle}>{skill.name}</h3>
              <p style={styles.cardLevel}>{skill.level}</p>
              <div style={styles.progressBar}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level === "Fortgeschritten" ? "75%" : "40%" }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ ...styles.progressFill, background: skill.gradient }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ marginTop: '48px', textAlign: 'center' }}
        >
          <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.8) 100%)', backdropFilter: 'blur(12px)', padding: isMobile ? '20px' : '24px', borderRadius: '16px', border: '1px solid rgba(71,85,105,0.5)' }}>
            <p style={{ color: '#bfdbfe', fontSize: isMobile ? '16px' : '18px' }}>
              🚀 Bereit, in einer <span style={{ color: '#22d3ee', fontWeight: '600' }}>Ausbildung</span> tiefer einzutauchen und
              professionelle Entwicklungspraktiken zu erlernen
            </p>
          </div>
        </motion.div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" style={styles.section}>
        <div style={styles.sectionTitle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={styles.sectionBadge}>
              <Sparkles style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Meine Hobbies
            </div>
            <h2 style={styles.h2}>Was mich außerdem bewegt</h2>
            <p style={styles.sectionDescription}>
              Balance zwischen Arbeit und Leidenschaft
            </p>
          </motion.div>
        </div>

        <div style={styles.grid}>
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={styles.hobbyCard}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-16px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(6,182,212,0.3)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.1)';
                    const iconBox = e.currentTarget.querySelector('[data-icon-box]');
                    if (iconBox) iconBox.style.transform = 'scale(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                    const iconBox = e.currentTarget.querySelector('[data-icon-box]');
                    if (iconBox) iconBox.style.transform = 'scale(1)';
                  }
                }}
              >
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  style={styles.hobbyImage}
                />
                <div style={styles.hobbyOverlay}>
                  <div>
                    <div style={styles.hobbyIconBox} data-icon-box>
                      <Icon style={{ width: isMobile ? '20px' : '24px', height: isMobile ? '20px' : '24px', color: '#67e8f9' }} />
                    </div>
                    <h3 style={styles.hobbyTitle}>{hobby.title}</h3>
                    <p style={styles.hobbyDescription}>{hobby.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section with Contact Info */}
      <section id="contact" style={styles.section}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={styles.sectionBadge}>
              <Sparkles style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Lass uns zusammenarbeiten
            </div>

            <h2 style={{ ...styles.h2, marginBottom: '24px' }}>
              Bereit für den nächsten Schritt
            </h2>

            <p style={{ ...styles.sectionDescription, marginBottom: '48px' }}>
              Ich suche ein Unternehmen, das mir die Chance gibt, zu lernen, zu wachsen
              und Teil eines innovativen Teams zu werden
            </p>

            <button
              onClick={() => setShowContactForm(true)}
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 25px 50px rgba(6,182,212,0.6)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 20px 40px rgba(6,182,212,0.5)';
                }
              }}
            >
              <Mail style={{ marginRight: '8px', width: '20px', height: '20px' }} />
              Kontaktiere mich
              <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={styles.contactInfo}
            >
              <div style={styles.contactInfoItem}>
                <div style={styles.contactInfoIcon}>
                  <Mail style={{ width: '20px', height: '20px', color: 'white' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '12px', color: '#67e8f9', marginBottom: '2px' }}>E-Mail</p>
                  <p style={{ fontWeight: '600', color: 'white', fontSize: isMobile ? '14px' : '16px' }}>md@gmail.com</p>
                </div>
              </div>

              <div style={styles.contactInfoItem}>
                <div style={styles.contactInfoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '12px', color: '#67e8f9', marginBottom: '2px' }}>Telefon</p>
                  <p style={{ fontWeight: '600', color: 'white', fontSize: isMobile ? '14px' : '16px' }}>098844334</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #020617 0%, transparent 100%)' }} />
        <div style={styles.footerContent}>
          <p style={styles.footerText}>
            © 2025 Amed Ali - FutureDev Portfolio. Erstellt mit ❤️ und Code
          </p>
          <p style={styles.footerSubtext}>
            Auf der Suche nach einer Ausbildung als Fachinformatiker für Anwendungsentwicklung
          </p>
          <div style={{ marginTop: '16px', display: 'flex', gap: isMobile ? '16px' : '24px', justifyContent: 'center', flexWrap: 'wrap', padding: isMobile ? '0 16px' : '0' }}>
            <a href="mailto:md@gmail.com" style={{ color: '#67e8f9', textDecoration: 'none', fontSize: isMobile ? '13px' : '14px', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
               onMouseLeave={(e) => e.target.style.color = '#67e8f9'}>
              📧 md@gmail.com
            </a>
            <span style={{ color: '#67e8f9', fontSize: isMobile ? '13px' : '14px' }}>
              📞 098844334
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}


   
