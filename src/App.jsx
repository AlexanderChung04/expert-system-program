import { useState } from 'react'
import './App.css'
import evaluateApplicant from './expertSystem/evaluateApplicant'

function App() {
  const [applicant, setApplicant] = useState({
    bachelorsCS: false,
    mastersCS: false,
    pythonCoursework: false,
    softwareEngineeringCoursework: false,
    agileCourse: false,
    gitExperience: false,
    pmiCertification: false,
    agileExperience: false,
    pythonYears: '0',
    dataYears: '0',
    agileYears: '0',
    managementYears: '0',
    expertSystemYears: '0',
    dataArchitectureYears: '0'
  })

  const [results, setResults] = useState([])

  const handleChange = (event) => {
  const { name, value, type, checked } = event.target

  setApplicant((previousApplicant) => ({
    ...previousApplicant,
    [name]: type === 'checkbox' ? checked : value
  }))
}

  const handleSubmit = (event) => {
    event.preventDefault()

    const evaluationResults = evaluateApplicant(applicant)

    setResults(evaluationResults)
  }

  return (
    <div className="app">
      <h1>Applicant Qualification Expert System</h1>

      <p>
        Enter your education, coursework, and professional experience below.
        The expert system will determine which positions you qualify for.
      </p>

      <form onSubmit={handleSubmit}>
        <h2>Education</h2>

        <label>
  <input
    type="checkbox"
    name="bachelorsCS"
    checked={applicant.bachelorsCS}
    onChange={handleChange}
  />
  Bachelor in Computer Science
</label>

<label>
  <input
    type="checkbox"
    name="mastersCS"
    checked={applicant.mastersCS}
    onChange={handleChange}
  />
  Masters in Computer Science
</label>

        <h2>Coursework and Skills</h2>

        <label>
  <input
    type="checkbox"
    name="pythonCoursework"
    checked={applicant.pythonCoursework}
    onChange={handleChange}
  />
  Completed Python coursework
</label>

        <label>
  <input
    type="checkbox"
    name="softwareEngineeringCoursework"
    checked={applicant.softwareEngineeringCoursework}
    onChange={handleChange}
  />
  Completed Software Engineering coursework
</label>

        <label>
           <input
          type="checkbox"
          name="agileCourse"
          checked={applicant.agileCourse}
          onChange={handleChange}
      />
          Completed an Agile course
        </label>

      <label>
          <input
          type="checkbox"
          name="agileExperience"
          checked={applicant.agileExperience}
          onChange={handleChange}
        />
       Experience working on Agile projects
</label>

        <label>
          <input
          type="checkbox"
          name="gitExperience"
          checked={applicant.gitExperience}
          onChange={handleChange}
        />
          Used Git
        </label>

        <label>
           <input
          type="checkbox"
          name="pmiCertification"
          checked={applicant.pmiCertification}
          onChange={handleChange}
        />
         PMI Lean Project Management Certification
        </label>

        <h2>Professional Experience</h2>

<label htmlFor="pythonYears">
  Years of Python development
</label>
<input
  type="number"
  id="pythonYears"
  name="pythonYears"
  min="0"
  value={applicant.pythonYears}
  onChange={handleChange}
/>

<label htmlFor="dataYears">
  Years of data development
</label>
<input
  type="number"
  id="dataYears"
  name="dataYears"
  min="0"
  value={applicant.dataYears}
  onChange={handleChange}
/>


<label htmlFor="agileYears">
  Years of experience in Agile projects
</label>
<input
  type="number"
  id="agileYears"
  name="agileYears"
  min="0"
  value={applicant.agileYears}
  onChange={handleChange}
/>

<label htmlFor="managementYears">
  Years managing software projects
</label>
<input
  type="number"
  id="managementYears"
  name="managementYears"
  min="0"
  value={applicant.managementYears}
  onChange={handleChange}
/>

<label htmlFor="expertSystemYears">
  Years developing Expert Systems
</label>
<input
  type="number"
  id="expertSystemYears"
  name="expertSystemYears"
  min="0"
  value={applicant.expertSystemYears}
  onChange={handleChange}
/>

<label htmlFor="dataArchitectureYears">
  Years of data architecture
</label>
<input
  type="number"
  id="dataArchitectureYears"
  name="dataArchitectureYears"
  min="0"
  value={applicant.dataArchitectureYears}
  onChange={handleChange}
/>

        <button type="submit">Evaluate Applicant</button>
      </form>
      {results.length > 0 && (
  <div className="results">
    <h2>Evaluation Results</h2>

    {results.map((result) => (
      <div key={result.name}>
        <h3>{result.name}</h3>

        {result.qualified ? (
          <p>Qualified</p>
        ) : (
          <p>Not Qualified</p>
        )}

        <h4>Required Conditions</h4>

        {result.requiredResults.map((requirement) => (
          <p key={requirement.description}>
            {requirement.passed ? '✓' : '✗'} {requirement.description}
          </p>
        ))}

        {result.desiredResults.length > 0 && (
          <>
            <h4>Desired Skills</h4>

            {result.desiredResults.map((skill) => (
              <p key={skill.description}>
                {skill.passed ? '✓' : '✗'} {skill.description}
              </p>
            ))}
          </>
        )}

        {!result.qualified && (
          <>
            <h4>Reason for Disqualification</h4>

            {result.failedRequirements.map((requirement) => (
              <p key={requirement.description}>
                You do not meet the requirement: {requirement.description}
              </p>
            ))}
          </>
        )}
      </div>
    ))}
   </div>
  )}
    </div>
  )
}

export default App
