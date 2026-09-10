// src/emails/ContactNotification.tsx
import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "react-email";

interface ContactNotificationProps {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactNotification = ({
  firstname = "Jean",
  lastname = "Dupont",
  email = "jean.dupont@example.com",
  subject = "Refonte d'interface web",
  message = "Bonjour Arthur,\n\nJe souhaiterais échanger avec vous au sujet d'une mission front-end.",
}: ContactNotificationProps) => {
  const fullName = `${firstname} ${lastname}`.trim();
  const previewText = `Nouveau message de ${fullName} : ${subject}`;

  return (
    <Html lang="fr">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={badgeSection}>
            <Text style={badge}>// SYSTEM_NOTIFICATION — CONTACT</Text>
          </Section>

          <Heading style={heading}>
            Nouveau message reçu<span style={copperDot}>.</span>
          </Heading>

          <Text style={subheading}>
            Un visiteur a soumis une demande depuis le portfolio.
          </Text>

          <Section style={metaCard}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={metaLabel}>EXPÉDITEUR</td>
                  <td style={metaValue}>{fullName}</td>
                </tr>
                <tr>
                  <td style={metaLabel}>EMAIL</td>
                  <td style={metaValue}>
                    <Link href={`mailto:${email}`} style={link}>
                      {email}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={metaLabel}>OBJET</td>
                  <td style={metaValue}>{subject}</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section style={messageCard}>
            <Text style={messageLabel}>// MESSAGE TRANSMIS</Text>
            <Text style={messageBody}>{message}</Text>
          </Section>

          <Section style={ctaSection}>
            <Link
              href={`mailto:${email}?subject=Re: ${encodeURIComponent(subject)}`}
              style={ctaButton}
            >
              Répondre directement à {firstname} →
            </Link>
          </Section>

          <Hr style={divider} />

          <Section style={footer}>
            <Text style={footerText}>
              arthurdebruille.fr — Notification automatique
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactNotification;


const main: React.CSSProperties = {
  backgroundColor: "#F4EFE6",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: "40px 12px",
  margin: "0",
};

const container: React.CSSProperties = {
  backgroundColor: "#FFFDF9",
  borderRadius: "12px",
  border: "1px solid rgba(76, 43, 36, 0.16)",
  maxWidth: "560px",
  margin: "0 auto",
  padding: "36px 32px",
  boxShadow: "0 4px 16px rgba(76, 43, 36, 0.05)",
};

const badgeSection: React.CSSProperties = {
  marginBottom: "16px",
};

const badge: React.CSSProperties = {
  display: "inline-block",
  fontFamily: 'ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace',
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  color: "#B85B35",
  backgroundColor: "rgba(184, 91, 53, 0.08)",
  borderRadius: "9999px",
  padding: "4px 10px",
  margin: "0",
};

const heading: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 700,
  color: "#1E1E1E",
  letterSpacing: "-0.02em",
  lineHeight: "1.2",
  margin: "0 0 6px 0",
};

const copperDot: React.CSSProperties = {
  color: "#B85B35",
};

const subheading: React.CSSProperties = {
  fontSize: "14px",
  color: "#66635D",
  margin: "0 0 24px 0",
  lineHeight: "1.5",
};

const metaCard: React.CSSProperties = {
  backgroundColor: "#FBF7EE",
  borderRadius: "8px",
  border: "1px solid rgba(76, 43, 36, 0.12)",
  padding: "16px",
  marginBottom: "20px",
};

const metaLabel: React.CSSProperties = {
  fontFamily: 'ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace',
  fontSize: "11px",
  fontWeight: 600,
  color: "#8C887B",
  letterSpacing: "0.05em",
  width: "110px",
  verticalAlign: "top",
  paddingBottom: "8px",
};

const metaValue: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#1E1E1E",
  paddingBottom: "8px",
};

const link: React.CSSProperties = {
  color: "#B85B35",
  textDecoration: "underline",
};

const messageCard: React.CSSProperties = {
  backgroundColor: "#FBF7EE",
  borderRadius: "8px",
  border: "1px solid rgba(76, 43, 36, 0.12)",
  padding: "18px",
  marginBottom: "28px",
};

const messageLabel: React.CSSProperties = {
  fontFamily: 'ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace',
  fontSize: "11px",
  fontWeight: 600,
  color: "#B85B35",
  letterSpacing: "0.05em",
  margin: "0 0 10px 0",
};

const messageBody: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "1.65",
  color: "#2C2926",
  whiteSpace: "pre-wrap",
  margin: "0",
};

const ctaSection: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "28px",
};

const ctaButton: React.CSSProperties = {
  backgroundColor: "#B85B35",
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: "13px",
  borderRadius: "9999px",
  padding: "12px 24px",
  textDecoration: "none",
  display: "inline-block",
};

const divider: React.CSSProperties = {
  borderColor: "rgba(76, 43, 36, 0.1)",
  margin: "24px 0 16px 0",
};

const footer: React.CSSProperties = {
  textAlign: "center",
};

const footerText: React.CSSProperties = {
  fontSize: "12px",
  color: "#8C887B",
  fontFamily: 'ui-monospace, Menlo, Monaco, Consolas, "Courier New", monospace',
  margin: "0",
};