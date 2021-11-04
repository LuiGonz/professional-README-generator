// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "") { 
    return " "
  }
  else {
    const techBadges = []
    if(license.includes("GNU General Public License v3.0")) {
      const gnuTechBadge = "[![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU-brightgreen.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
      techBadges.push(gnuTechBadge);
    }
  
    if(license.includes("MIT License")) {
      const mitTechBadge = "[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://mit-license.org/)" 
      techBadges.push(mitTechBadge);
    }

    if(license.includes("Mozilla Public License v2.0")) {
      const mozTechBadge = "[![Mozilla Public License v2.0](https://img.shields.io/badge/License-Mozilla-red.svg)](https://www.mozilla.org/en-US/MPL/2.0/)"
      techBadges.push(mozTechBadge);
    }

    if(license.includes("Java Research License")) {
      const javaTechBadge = "[![Java Research License](https://img.shields.io/badge/License-Java-yellow.svg)](https://www.oracle.com/downloads/licenses/javase-license1.html)"
      techBadges.push(javaTechBadge);
    }

    if(license.includes("Aladdin Free Public License v9.0")) {
      const aladTechBadge = "[![Aladdin Free Public License v9.0](https://img.shields.io/badge/License-Aladdin-brightgreen.svg)](https://www.openhub.net/licenses/afpl)"
      techBadges.push(aladTechBadge);
    }
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "") { 
    return " "
  } 
  else {
    return `[Installation](#installation)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "") { 
    return " "
  } 
  else {
    return `Tech License</br>This coding assignment utilizes a ${license}`
  }
}

//${renderLicenseBadge(data.license)}
//${renderLicenseLink(data.license)}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  
 --------------------------------------------
 ${data.title}

 Description</br>
 ${data.description}

 --------------------------------------------

 Table of Contents
 - [Description](#description)
 - ${renderLicenseLink(data.license)}
 - [Usage](#usage)
 - [License](#license)
 - [Contributers](#contributers)
 - [Tests](#tests)
 - [Questions](#questions)

 --------------------------------------------

 Installation</br>
 ${data.installation}

 Usage</br>
 ${data.usage}

 Contributers</br>
 ${data.contributers}

${renderLicenseSection(data.license)}</br>
 ${renderLicenseBadge(data.license)}

 Test</br>
 ${data.tests}

 Questions
 github: ${data.username}
 email: ${data.email}

 Example
 ![screenshot](./img/Screenshot-readme.png)

 --------------------------------------------
  `;
}

module.exports = generateMarkdown;