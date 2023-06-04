// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let projectLicense = license.license;
  if (projectLicense == 'MIT') {
    projectBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (projectLicense == 'GPL') {
    projectBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (projectLicense == 'Creative Commons') {
    projectBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (projectLicense == 'Apache') {
    projectBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    projectBadge = ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let projectLicense = license.license
  if (projectLicense == 'MIT') {
    licenseLink = 'You can find the licensing details at [this link](https://opensource.org/license/mit/).';
  } else if (projectLicense == 'GPL') {
    licenseLink = 'You can find the licensing details at [this link](https://www.gnu.org/licenses/gpl-3.0.en.html).';
  } else if (projectLicense == 'Creative Commons') {
    licenseLink = 'You can find the licensing details at [this link](https://creativecommons.org/licenses/).';
  } else if (projectLicense == 'Apache') {
    licenseLink = 'You can find the licensing details at [this link](https://www.apache.org/licenses/LICENSE-2.0).';
  } else {
    licenseLink = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let projectLicense = license.license
  if (!projectLicense || projectLicense == '') {
    licenseSection = 'No license was used for this project.'
  } else {
    licenseSection = `This project uses the ${projectLicense} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  renderLicenseSection(data);

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)\
  [Usage](#usage)\
  [License](#license)\
  [Contributors](#contributors)\
  [Testing](#testing)\
  [Questions](#questions)\

  ## Installation <a name ='installation'></a>
  ${data.installation}

  ## Usage <a name ='usage'></a>
  ${data.usage}

  ## License <a name ='license'></a>
  ${licenseSection}\
  ${projectBadge}\
  ${licenseLink}\

  ## Contributors <a name ='contributors'></a>
  ${data.contributors}

  ## Testing <a name ='testing'></a>
  ${data.test}

  ## Questions <a name ='questions'></a>
  If you have any questions regarding this application, please reach out to [${data.username}](https://github.com/${data.username}) on Github or at ${data.email}.
`;
}

module.exports = generateMarkdown;
