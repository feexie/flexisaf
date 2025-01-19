// GitHub API URL for repository details
const repoApiUrl = 'https://api.github.com/repos/feexie/flexisaf';

// Fetch data from GitHub repository to show live details
function fetchRepoDetails() {
  fetch(repoApiUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('repo-name').innerText = data.name;
      document.getElementById('branches-count').innerText = data.branches_url.split('{')[0].split('/').pop();
      document.getElementById('commits-count').innerText = data.commits_url.split('{')[0].split('/').pop();
      document.getElementById('contributors-count').innerText = data.contributors_url.split('{')[0].split('/').pop();
    })
    .catch(err => console.error('Error fetching repo details:', err));
}

// Simulate Git commands
function executeCommand(command) {
  const consoleOutput = document.getElementById('console-output');
  let output = `<code>$ ${command}</code>\n`;

  switch (command) {
    case 'git init':
      output += '> Initialized empty Git repository in /path/to/repo\n';
      break;
    case 'git clone https://github.com/feexie/flexisaf.git':

      output += '> Cloning into \'flexisaf\'...\n> Repository cloned successfully\n';
      break;
    case 'git branch new-feature':
      output += '> Created new branch "new-feature"\n';
      break;
    case 'git commit -m "Initial commit"':
      output += '> [main (root-commit) 123abc4] Initial commit\n> 1 file changed, 1 insertion(+), 0 deletions(-)\n';
      break;
    case 'git push origin main':
      output += '> Everything up-to-date\n';
      break;
    default:
      output += '> Command not recognized\n';
  }

  consoleOutput.innerHTML = `<pre>${output}</pre>`;
}

// Call fetchRepoDetails on page load
document.addEventListener('DOMContentLoaded', fetchRepoDetails);
