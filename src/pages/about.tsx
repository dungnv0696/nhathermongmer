import React from "react"
import styled from "@emotion/styled"

/* Main container */
const AboutWrapper = styled.div`
  max-width: 1600px;
  margin: 2rem auto;
  padding: 0 1rem;
  line-height: 1.6;
`

/* Page title */
const PageTitle = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    span {
      color: #3498db;
    }
  }
`

/* Row & Column giống như grid hệ thống (dựa trên flexbox) */
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
`

interface ColumnProps {
  basis: string
}
const Column = styled.div<ColumnProps>`
  padding: 2rem;
  flex: 0 0 ${({ basis }) => basis};
  max-width: ${({ basis }) => basis};

  @media (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`

/* Paragraph với text-align: justify */
const Paragraph = styled.p`
  text-align: justify;
  margin: 0;
`

/* Info list (Personal Information) */
const InfoList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
      .title {
        font-weight: bold;
      }
      .value {
        color: #555;
      }
    }
  }
`

/* Block title (Education, Experience, etc.) */
const BlockTitle = styled.div`
  margin-bottom: 1rem;
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    span {
      color: #3498db;
    }
  }
`

/* Timeline styles */
const Timeline = styled.div`
  margin-bottom: 2rem;
`
const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`
const LeftPart = styled.div`
  flex: 0 0 200px;
  h5 {
    margin: 0 0 0.3rem;
    font-size: 0.95rem;
    font-weight: 600;
  }
  span {
    font-size: 0.9rem;
    color: #888;
  }
`
const Divider = styled.div`
  width: 2px;
  background: #eee;
  margin: 0 1rem;
`
const RightPart = styled.div`
  flex: 1;
  h4 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
  p, ul {
    margin: 0;
    padding: 0;
    list-style: disc;
    padding-left: 1.5rem;
  }
  li {
    margin-bottom: 0.5rem;
    text-align: justify;
  }
`

/* Khoảng trắng động */
interface WhiteSpaceProps {
  height: number
}
const WhiteSpace = styled.div<WhiteSpaceProps>`
  height: ${({ height }) => height}px;
`

/* Knowledges list (Skills, Domain Knowledges) */
const Knowledges = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
  li {
    margin-bottom: 0.5rem;
  }
`

/* Certificate / Award item */
const CertificateItem = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid #eee;
  padding: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`
const CertiLogo = styled.div`
  flex: 0 0 80px;
  max-width: 80px;
  margin-right: 1rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`
const CertiContent = styled.div`
  flex: 1;
  .certi-title h4 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
  }
  .certi-company,
  .certi-date,
  .certi-id {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.3rem;
  }
`
const Button = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  &:hover {
    background: #2980b9;
  }
`

const AboutPage: React.FC = () => {
  return (
    <AboutWrapper>
      {/* About Me Section */}
      <PageTitle>
        <h2>
          About <span>Me</span>
        </h2>
      </PageTitle>
      <Row>
        <Column basis="65%">
          <Paragraph>
            A computer scientist turned to full-stack machine learning (ML)
            engineer with 5+ years experience in building data-intensive
            applications, overcoming complex architecture, and scalable
            issues. Experienced in building data processing pipeline, predictive
            modeling and business intelligene. Proficient in exploring data
            analysis in different domain knowledges such as telco, digital
            finance, etc. Capable of applying MLOps practices in Machine Learning
            lifecycle such as experiments tracking and versioning, model
            interpreting and AutoML.
          </Paragraph>
        </Column>
        <Column basis="30%">
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
                <span className="value">(+84) 333 801 208</span>
              </li>
            </ul>
          </InfoList>
        </Column>
      </Row>

      <WhiteSpace height={50} />

      {/* Resume Section */}
      {/* <PageTitle>
        <h2>Resume</h2>
      </PageTitle> */}
      <Row>
        {/* Left Column: Education & Experience */}
        <Column basis="65%">
          {/* Education */}
          <BlockTitle>
            <h3>Education</h3> 
          </BlockTitle>
          <Timeline>
            <TimelineItem>
              <LeftPart>
                <h5 className="item-period">Sep 2016 - Apr 2022</h5>
                <span className="item-company">
                  Hanoi University of Science and Technology
                </span>
              </LeftPart>
              <Divider />
              <RightPart>
                <h4 className="item-title">
                  Excellent Engineer&apos;s degree, Computer Science
                </h4>
                <p>
                  Graduated as Valedictorian in Computer Science within 4.5
                  years, which was half a year earlier than usual.
                </p>
              </RightPart>
            </TimelineItem>
          </Timeline>

          <WhiteSpace height={50} />

          {/* Experience */}
          <BlockTitle>
            <h3>Experience</h3>
          </BlockTitle>
          <Timeline>
            <TimelineItem>
              <LeftPart>
                <h5 className="item-period">Nov 2022 — Present</h5>
                <span className="item-company">
                  Viettel Information Techonology Department
                </span>
              </LeftPart>
              <Divider />
              <RightPart>
              <h4 className="item-title">Senior Machine Learning Engineer</h4>
              <ul>
                <li>
                  <strong>Co-founder & Product/Tech Owner – Viettel Machine Learning Platform</strong><br />
                  Co-founded and led the development of a no-code/low-code AutoML platform that streamlines the full machine learning lifecycle.
                  <ul>
                    <li>Defined and executed both product vision and technical architecture</li>
                    <li>Led a team of 10+ engineers and data scientists</li>
                    <li>Built core features: tabular prediction, clustering, time-series forecasting, recommendation systems</li>
                    <li>Adopted by 100+ internal users, reducing 75% of ML development and optimization efforts</li>
                    <li>Commercialized and deployed across enterprises, ministries, and government agencies</li>
                  </ul>
                </li>
                <li>
                  Researched and developed MLOps maturity model
                </li>
                <li>
                  Co-founded and architected Viettel Recommendation Platform
                </li>
            </ul>
              </RightPart>
            </TimelineItem>

            <TimelineItem>
              <LeftPart>
                <h5 className="item-period">Sep 2020 — Nov 2022</h5>
                <span className="item-company">
                  Viettel Data Governance Department
                </span>
              </LeftPart>
              <Divider />
              <RightPart>
                <h4 className="item-title">Senior Data Scientist</h4>
                <ul>
                  <li>
                    Developed hybrid e-voucher recommendation system using
                    machine learning algorithms and natural language processing
                    techniques to cater to both existing and new customers,
                    addressing cold-start problems.
                  </li>
                  <li>
                    Employed statistical and deep learning models to forecast the
                    network service quality of Base Transceiver Stations (BTS).
                  </li>
                  <li>
                    Utilized clustering and convex optimization algorithms to
                    determine optimal facility locations for VTPost.
                  </li>
                </ul>
              </RightPart>
            </TimelineItem>

            <TimelineItem>
              <LeftPart>
                <h5 className="item-period">Jul 2020 — Sep 2020</h5>
                <span className="item-company">
                  Viettel Data Analytics Center
                </span>
              </LeftPart>
              <Divider />
              <RightPart>
                <h4 className="item-title">Data Scientist</h4>
                <ul>
                  <li>
                    Architected and implemented automated Spark ELT processes,
                    effectively minimizing manual data handling and greatly
                    reducing the risk of data errors.
                  </li>
                  <li>
                    Developed a Customer 360 feature store to ensure feature
                    reuse and consistency for machine learning models.
                  </li>
                  <li>
                    Developed Spark machine learning models for predicting
                    potential customers and recommending suitable data packages,
                    resulting in a potential 50% increase in take-up rate and revenue
                    for up-selling and cross-selling initiatives. Additionally,
                    achieved a reduction in churn rate from 2% to 1.5% through churn
                    prediction modeling.
                  </li>
                </ul>
              </RightPart>
            </TimelineItem>
          </Timeline>
        </Column>

        {/* Right Column: Skills & Certificates */}
        <Column basis="30%">
          {/* Big Data Stack */}
          <BlockTitle>
            <h3>
              Big Data <span>Stack</span>
            </h3>
          </BlockTitle>
          <Knowledges>
            <li>Storage: Minio S3 - Compatible Storage</li>
            <li>File formats: CSV, Parquet</li>
            <li>Table formats: Delta Lake</li>
            <li>Realtime database: Clickhouse, redis</li>
            <li>Data transformations: Spark</li>
            <li>
              Orchestration: Airflow, Pentaho Kettle (deprecated)
            </li>
            <li>Sementic Layer: Cube</li>
            <li>Business intelligence: Superset</li>
            <li>Metadata store: Datahub</li>
          </Knowledges>

          <WhiteSpace height={10} />

          {/* XOps Stack */}
          <BlockTitle>
            <h3>
              XOps <span>Stack</span>
            </h3>
          </BlockTitle>
          <Knowledges>
            <li>MLFlow</li>
            <li>Seldon</li>
            <li>Zeppelin/JupyterHub</li>
            <li>Gitlab</li>
            <li>Jenkins</li>
            <li>ArgoCD</li>
            <li>Kubernetes</li>
            <li>Docker</li>
          </Knowledges>

          <WhiteSpace height={10} />

          {/* Domain Knowledges */}
          <BlockTitle>
            <h3>Domain Knowledges</h3>
          </BlockTitle>
          <Knowledges>
            <li>Telecom</li>
            <li>Finance</li>
          </Knowledges>
        </Column>
      </Row>

      <WhiteSpace height={50} />

      {/* Certificates Section */}
      <Row>
        <Column basis="100%">
          <BlockTitle>
            <h3>Certificates</h3>
          </BlockTitle>
        </Column>
      </Row>
      <Row>

      <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://www.credbadge.com/Content/Images/logos/dasca/pds.png"
                alt="Dasca logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>Principal Data Scientist (PDS™)</h4>
              </div>
              <div className="certi-company">
                <span>Data Science Council of America</span>
              </div>
              <div className="certi-date">
                <span>Dec 2024 - Dec 2029</span>
              </div>
              <div className="certi-id">
                <span>Credential ID 5220675111</span>
              </div>
              <div>
                <Button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://www.credbadge.com/credit/certified/5220675111/"
                    )
                  }
                >
                  Show credential
                </Button>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

      <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://www.credbadge.com/Content/Images/logos/dasca/sds.png"
                alt="Dasca logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>Senior Data Scientist (SDS™)</h4>
              </div>
              <div className="certi-company">
                <span>Data Science Council of America</span>
              </div>
              <div className="certi-date">
                <span>Dec 2022 - Dec 2027</span>
              </div>
              <div className="certi-id">
                <span>Credential ID 9962614239</span>
              </div>
              <div>
                <Button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://www.credbadge.com/credit/certified/5220675111/"
                    )
                  }
                >
                  Show credential
                </Button>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://www.gstatic.com/devrel-devsite/prod/v38a693baeb774512feb42f10aac8f755d8791ed41119b5be7a531f8e16f8279f/tensorflow/images/lockup.svg"
                alt="Google logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>Tensorflow Developer Certificate</h4>
              </div>
              <div className="certi-company">
                <span>Google</span>
              </div>
              <div className="certi-date">
                <span>Nov 2021 - Nov 2024</span>
              </div>
              <div className="certi-id">
                <span>Credential ID: 41745154</span>
              </div>
              <div>
                <Button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://www.credential.net/d3c3601b-22f0-426a-8ab8-cdb2d46876e6#gs.gc3840"
                    )
                  }
                >
                  Show credential
                </Button>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png"
                alt="IBM logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>IBM Data Science Specialization</h4>
              </div>
              <div className="certi-company">
                <span>IBM</span>
              </div>
              <div className="certi-date">
                <span>Nov 2021 - No Expiration Date</span>
              </div>
              <div className="certi-id">
                <span>Credential ID: 5TYFR3SCK96W</span>
              </div>
              <div>
                <Button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://www.coursera.org/account/accomplishments/specialization/certificate/5TYFR3SCK96W"
                    )
                  }
                >
                  Show credential
                </Button>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>
      </Row>

      {/* Honors & Awards Section */}
      <Row>
        <Column basis="100%">
          <BlockTitle>
            <h3>Honors & awards</h3>
          </BlockTitle>
        </Column>
      </Row>
      <Row>

      <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="http://giaithuong.makeinvietnam.mic.gov.vn/uploads/up/makeinvietnam/hang_muc/2024/08/14/23/07/xuatsac.png"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>
                  Top 10 - New Digital Technology Product - Make In Vietnam Awards 2024
                </h4>
              </div>
              <div className="certi-company">
                <span>Issued by Ministry of Information and Communications</span>
              </div>
              <div className="certi-date">
                <span>January 2025</span>
              </div>
              <div className="certi-id">
                <span>Viettel Machine Learning Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://totaltele.com/wp-content/uploads/2022/05/TT_logo.png"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>
                  Shortlist - The Future Award - World Communication Awards 2024
                </h4>
              </div>
              <div className="certi-company">
                <span>Issued by Total Telecom</span>
              </div>
              <div className="certi-date">
                <span>December 2024</span>
              </div>
              <div className="certi-id">
                <span>Viettel Machine Learning Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://static.ladipage.net/61359c0acd58c80012cdf933/thiet-ke-chua-co-ten-2-20231012125128-mau6d.png"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>
                  Potential AI Solution - Vietnam Innovation Challenge Awards 2024
                </h4>
              </div>
              <div className="certi-company">
                <span>Issued by National Innovation Center (NIC) and Meta Corporation</span>
              </div>
              <div className="certi-date">
                <span>October 2024</span>
              </div>
              <div className="certi-id">
                <span>Viettel Machine Learning Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://blog.stevieawards.com/hubfs/IBA24/IBA24_Silver_Winner.png"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>
                  Silver Winner - Data Tools & Platforms - International Business Awards 2024
                </h4>
              </div>
              <div className="certi-company">
                <span>Issued by The Stevie Awards</span>
              </div>
              <div className="certi-date">
                <span>August 2024</span>
              </div>
              <div className="certi-id">
                <span>Viettel Recommendation Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://www.tmforum.org/wp-content/uploads/2022/09/tmf-logo-2018.svg"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>
                  Finalist - Excellence in AI Innovation - Excellence Awards 2024
                </h4>
              </div>
              <div className="certi-company">
                <span>Issued by TM Forum</span>
              </div>
              <div className="certi-date">
                <span>June 2024</span>
              </div>
              <div className="certi-id">
                <span>Viettel Machine Learning Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://blog.stevieawards.com/hubfs/IBA23/IBA23_Silver_Winner.png"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>
                  Silver Winner - Data Tools & Platforms - International Business Awards 2023
                </h4>
              </div>
              <div className="certi-company">
                <span>Issued by The Stevie Awards</span>
              </div>
              <div className="certi-date">
                <span>August 2023</span>
              </div>
              <div className="certi-id">
                <span>Viettel Machine Learning Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://globeeawards.com/wp-content/uploads/2022/06/Information-Technology-PNG.png"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>Silver Medal - AI as a Service - IT World Awards 2023</h4>
              </div>
              <div className="certi-company">
                <span>Issued by The Globee Awards</span>
              </div>
              <div className="certi-date">
                <span>May 2023</span>
              </div>
              <div className="certi-id">
                <span>Viettel Recommendation Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://globeeawards.com/wp-content/uploads/2022/06/Information-Technology-PNG.png"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>Gold Medal - Data Science Platforms - IT World Awards 2022</h4>
              </div>
              <div className="certi-company">
                <span>Issued by The IT World Awards</span>
              </div>
              <div className="certi-date">
                <span>May 2022</span>
              </div>
              <div className="certi-id">
                <span>Viettel Machine Learning Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://vda.com.vn/images/medal-3.png?id=d3313ae3c2aa1a92a2b85a63edfad110"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>Vietnam Digital Awards 2021</h4>
              </div>
              <div className="certi-company">
                <span>
                  Issued by Hội Truyền thông số Việt Nam (VDCA) & Bộ Thông tin
                  và Truyền thông
                </span>
              </div>
              <div className="certi-date">
                <span>Dec 2021</span>
              </div>
              <div className="certi-id">
                <span>Viettel Machine Learning Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>

        <Column basis="50%">
          <CertificateItem>
            <CertiLogo>
              <img
                src="https://upload.wikimedia.org/wikipedia/vi/4/43/Logo_giai_thuong_Sao_Khue.png"
                alt="Award logo"
              />
            </CertiLogo>
            <CertiContent>
              <div className="certi-title">
                <h4>Sao Khue Awards 2021</h4>
              </div>
              <div className="certi-company">
                <span>
                  Issued by Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam (VINASA)
                </span>
              </div>
              <div className="certi-date">
                <span>Apr 2021</span>
              </div>
              <div className="certi-id">
                <span>Viettel Machine Learning Platform</span>
              </div>
            </CertiContent>
          </CertificateItem>
        </Column>
      </Row>

      <WhiteSpace height={50} />

      {/* Volunteering Section */}
      <Row>
        <Column basis="100%">
          <BlockTitle>
            <h3>Volunteering</h3>
          </BlockTitle>
        </Column>
      </Row>
      <Row>
        <Column basis="100%">
        <Timeline>
        <TimelineItem>
              <LeftPart>
                <h5 className="item-period">Mar 2025 — Present</h5>
                <span className="item-company">
                  Viettel Group
                </span>
              </LeftPart>
              <Divider />
              <RightPart>
              <h4 className="item-title">Head of Data Engineering Track - Viettel Digital Talent Program</h4>
              <p>
              Led the Data Engineering track in the annual Viettel Digital Talents Program, driving technical excellence and mentoring the next generation of data engineers in a fast-paced, high-impact environment.
              </p>
              </RightPart>
            </TimelineItem>

            <TimelineItem>
              <LeftPart>
                <h5 className="item-period">Mar 2022 — Mar 2025</h5>
                <span className="item-company">
                  Viettel Group
                </span>
              </LeftPart>
              <Divider />
              <RightPart>
              <h4 className="item-title">Mentor of Viettel Digital Talent Program</h4>
              <p className="item-description">
                Mentored participants in the annual Viettel Digital Talents program, covering multiple fields in technology and innovation. Key topics included:
              </p>
              <ul>
                <li>
                  <strong>Data Science & Artificial Intelligence:</strong>
                  <ul>
                    <li><strong>GenAI Chatbot:</strong> Developed a conversational AI chatbot that enables users to query and interact with data using natural language, improving accessibility and decision-making.</li>
                    <li><strong>Multi-AI Agent for Code Generation:</strong> Designed a framework leveraging multiple AI models to automate and enhance code generation, streamlining software development processes.</li>
                    <li><strong>Image2Image Search Engine:</strong> Created a data engineering solution for an image search engine based on content similarity or transformation, utilizing advanced computer vision techniques.</li>
                  </ul>
                </li>
                <li>
                  <strong>Software Engineering:</strong>
                  <ul>
                    <li><strong>Kubernetes Operator Framework:</strong> Led the design of a platform to automate the management of applications within Kubernetes clusters, enhancing deployment, scaling, and operation of containerized applications.</li>
                    <li><strong>Internal Development Platform:</strong> Developed an integrated platform that streamlines internal software development, providing tools and workflows to improve developer productivity and software management.</li>
                  </ul>
                </li>
              </ul>
              </RightPart>
            </TimelineItem>
            </Timeline>
        </Column>
      </Row>
    </AboutWrapper>
  )
}

export default AboutPage
