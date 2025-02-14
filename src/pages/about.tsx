import React from "react";
import styled from "@emotion/styled";

const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
`;

const Column = styled.div<{ basis: string }>`
  padding: 0.5rem;
  flex: 0 0 ${({ basis }) => basis};
  max-width: ${({ basis }) => basis};

  @media (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const InfoList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;

      .title {
        font-weight: bold;
      }
      .value {
        color: #555;
      }
    }
  }
`;

const AboutPage: React.FC = () => {
  return (
    <AboutWrapper>
      <Row>
        <Column basis="58.33%">
          <p style={{ textAlign: "justify" }}>
            A computer scientist turned to full-stack machine learning (ML)
            engineer with 5+ years experience in building data-intensive
            applications, overcoming complex architecture, and scalable issues.
            Experienced in building data processing pipeline, predictive modeling
            and business intelligene. Proficient in exploring data analysis in
            different domain knowledges such as telco, digital finance, etc.
            Capable of applying MLOps practices in Machine Learning lifecycle such
            as experiments tracking and versioning, model interpreting and AutoML.
          </p>
        </Column>
        <Column basis="41.67%">
          <InfoList>
            <ul>
              <li>
                <span className="title">Year of Birth</span>
                <span className="value">1998</span>
              </li>
              <li>
                <span className="title">Residence</span>
                <span className="value">Vietnam</span>
              </li>
              <li>
                <span className="title">Address</span>
                <span className="value">Cau Giay, Ha Noi</span>
              </li>
              <li>
                <span className="title">E-mail</span>
                <span className="value">dungnv0696@gmail.com</span>
              </li>
              <li>
                <span className="title">Phone</span>
                <span className="value">(+84) 798 968 986</span>
              </li>
            </ul>
          </InfoList>
        </Column>
      </Row>
    </AboutWrapper>
  );
};

export default AboutPage;
