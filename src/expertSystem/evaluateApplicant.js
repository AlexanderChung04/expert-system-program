import positions from './positions'

function evaluateApplicant(applicant) {
  return positions.map((position) => {

    const requiredResults = position.required.map((requirement) => ({
      description: requirement.description,
      passed: requirement.check(applicant)
    }))

    const desiredResults = position.desired.map((skill) => ({
      description: skill.description,
      passed: skill.check(applicant)
    }))

    const qualified = requiredResults.every(
      (requirement) => requirement.passed
    )

    const failedRequirements = requiredResults.filter(
      (requirement) => !requirement.passed
    )

    return {
      name: position.name,
      qualified: qualified,
      requiredResults: requiredResults,
      desiredResults: desiredResults,
      failedRequirements: failedRequirements
    }
  })
}

export default evaluateApplicant