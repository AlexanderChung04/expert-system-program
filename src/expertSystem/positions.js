const positions = [
  {
    name: "Entry-Level Python Engineer",

    required: [
      {
        description: "Python coursework",
        check: (applicant) => applicant.pythonCoursework
      },
      {
        description: "Software Engineering coursework",
        check: (applicant) => applicant.softwareEngineeringCoursework
      },
      {
        description: "Bachelor in CS",
        check: (applicant) =>
          applicant.degree === "bachelors" ||
          applicant.degree === "masters"
      }
    ],

    desired: [
      {
        description: "Agile course",
        check: (applicant) => applicant.agileCourse
      }
    ]
  },

  {
    name: "Python Engineer",

    required: [
      {
        description: "3 years Python development",
        check: (applicant) => Number(applicant.pythonYears) >= 3
      },
      {
        description: "1 year data development",
        check: (applicant) => Number(applicant.dataYears) >= 1
      },
      {
        description: "Experience in Agile projects",
        check: (applicant) => applicant.agileExperience
      },
      {
        description: "Bachelor in CS",
        check: (applicant) =>
          applicant.degree === "bachelors" ||
          applicant.degree === "masters"
      }
    ],

    desired: [
      {
        description: "Used Git",
        check: (applicant) => applicant.gitExperience
      }
    ]
  },

  {
    name: "Project Manager",

    required: [
      {
        description: "3 years managing software projects",
        check: (applicant) => Number(applicant.managementYears) >= 3
      },
      {
        description: "2 years experience in Agile projects",
        check: (applicant) => Number(applicant.agileYears) >= 2
      }
    ],

    desired: [
      {
        description: "PMI Lean Project Management Certification",
        check: (applicant) => applicant.pmiCertification
      }
    ]
  },

  {
    name: "Senior Knowledge Engineer",

    required: [
      {
        description: "4 years using Python to develop",
        check: (applicant) => Number(applicant.pythonYears) >= 4
      },
      {
        description: "2 years developing Expert Systems",
        check: (applicant) => Number(applicant.expertSystemYears) >= 2
      },
      {
        description: "2 years data architecture and data development",
        check: (applicant) =>
          Number(applicant.dataArchitectureYears) >= 2
      },
      {
        description: "Masters in CS",
        check: (applicant) => applicant.degree === "masters"
      }
    ],

    desired: []
  }
]

export default positions