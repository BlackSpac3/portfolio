import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const FeedbackMail = ({ email, message }) => {
  const previewText = `Read ${email}'s review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
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
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Here&apos;s what {email} wrote</Text>
              <Text style={review}>&quot;{message}&quot;</Text>

              <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                You can send your feedback to{" "}
                <Link href={`mailto:${email}`}> {email}</Link>
              </Text>

              <Button style={button} href={`mailto:${email}`}>
                Send My Feedback
              </Button>
            </Row>
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

export default FeedbackMail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#111827",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
};

const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
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
