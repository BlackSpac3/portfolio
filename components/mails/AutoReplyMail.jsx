import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Hr,
  Section,
  Text,
} from "@react-email/components";

export const AutoReplyMail = ({ email }) => {
  return (
    <Html>
      <Head />
      <Preview>Acknowledgment of Your Message</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text
            style={{
              fontFamily: "serif",
              fontSize: "36px",
              fontWeight: "bold",
              color: button.backgroundColor,
            }}
          >
            JD
          </Text>
          <Section>
            <Text style={{ ...text, textTransform: "capitalize" }}>
              Dear {email.split("@")[0]},
            </Text>
            <Text style={text}>
              Thank you for reaching out and for your interest in working with
              me.
            </Text>
            <Text style={text}>
              This mail is to acknowledge the receipt of your message. I will be
              in touch with you shortly. Once again, I appreciate your interest.
            </Text>
            <Text style={text}>
              Best Regards, <br />
              Oluwatoyin Jacobs
            </Text>
          </Section>
          <Section>
            <Row>
              <Hr style={hr} />
              <Text style={footer}>
                Jacobs Development. No 5. Adebomi Edun St, Alimosho, Lagos, NG
                94103
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AutoReplyMail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "18px",
  fontWeight: "300",
  color: "#484848",
  lineHeight: "1.4",
};

const button = {
  backgroundColor: "#111827",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
