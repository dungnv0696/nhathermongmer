import styled from "@emotion/styled"

const About = () => {
  return (
    <Container>
      {/* Personal Information */}
      <div className="row">
        <div className="col col-left">
          <p>
            A computer scientist turned to full-stack machine learning (ML)
            engineer with 5+ years experience in building data-intensive
            applications, overcoming complex architecture, and scalable issues.
            Experienced in building data processing pipeline, predictive
            modeling and business intelligence. Proficient in exploring data
            analysis in different domain knowledges such as telco, digital
            finance, etc. Capable of applying MLOps practices in Machine
            Learning lifecycle such as experiments tracking and versioning,
            model interpreting and AutoML.
          </p>
        </div>

        <div className="col col-right">
          <InfoList>
            <ul>
              <li>
                <span className="title">Year of Birth:</span>
                <span className="value">1998</span>
              </li>
              <li>
                <span className="title">Residence:</span>
                <span className="value">Vietnam</span>
              </li>
              <li>
                <span className="title">Address:</span>
                <span className="value">Cau Giay, Ha Noi</span>
              </li>
              <li>
                <span className="title">E-mail:</span>
                <span className="value">dungnv0696@gmail.com</span>
              </li>
              <li>
                <span className="title">Phone:</span>
                <span className="value">(+84) 798 968 986</span>
              </li>
            </ul>
          </InfoList>
        </div>
      </div>
    </Container>
  )
}

export default About

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .col {
    padding: 10px;
  }

  .col-left {
    flex: 2;
    text-align: justify;
  }

  .col-right {
    flex: 1;
  }

  p {
    line-height: 1.6;
  }
`

const InfoList = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
  }

  .title {
    font-weight: bold;
  }

  .value {
    color: #555;
  }
`
