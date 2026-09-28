# Applicant Qualification Expert System

This project is a rule-based expert system that determines which available
positions an applicant is qualified for based on education, coursework,
skills, certifications, and professional experience.

## How the Expert System Works

The applicant enters their qualifications using the web form.

The system compares the applicant's information against the requirements
for each of the following positions:

- Entry-Level Python Engineer
- Python Engineer
- Project Manager
- Senior Knowledge Engineer

The system then displays whether the applicant is qualified or not qualified
for each position. It also displays the requirements that were met or not met
to explain the reasoning behind each conclusion.

Required qualifications determine whether an applicant qualifies for a
position. Desired skills are displayed in the results but do not prevent an
otherwise qualified applicant from qualifying.

## Running the Program

The expert system can be run directly using the deployed Vercel website.

For local development:

1. Install the project dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Open the localhost URL displayed in the terminal.

## Manual Testing

The expert system was manually tested using different applicant profiles
to verify the qualification rules and reasoning.

Testing included:

- Applicants meeting all requirements for each of the four positions.
- Applicants missing required qualifications.
- Applicants missing only desired skills.
- Minimum experience boundaries, such as meeting the exact number of
  required years.
- Experience values below the required minimum.
- Applicants with a Bachelor's in Computer Science but not a Master's.
- Applicants with a Master's in Computer Science but not a Bachelor's.
- Project Manager applicants with and without the required PMI certification.
- Senior Knowledge Engineer applicants with different amounts of data
  architecture and data development experience.
- Invalid experience values such as negative numbers.

The displayed conclusions and reasoning were checked against the position
requirements.