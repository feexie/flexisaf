const repoApiUrl = 'https://api.github.com/repos/feexie/flexisaf';

// Fetch repository details
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

// Fetch pull requests
function fetchPullRequests() {
  fetch(`${repoApiUrl}/pulls`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('pull-requests-count').innerText = data.length;
    })
    .catch(err => console.error('Error fetching pull requests:', err));
}

// Fetch branches
function fetchBranches() {
  fetch(`${repoApiUrl}/branches`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('branches-count').innerText = data.length;
    })
    .catch(err => console.error('Error fetching branches:', err));
}

// Fetch commits
function fetchCommits() {
  fetch(`${repoApiUrl}/commits`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('commits-count').innerText = data.length;
    })
    .catch(err => console.error('Error fetching commits:', err));
}

// Fetch revert status (last commit revert)
function fetchRevert() {
  fetch(`${repoApiUrl}/commits`)
    .then(response => response.json())
    .then(data => {
      const lastCommitSha = data[0].sha;
      fetch(`${repoApiUrl}/git/commits/${lastCommitSha}`)
        .then(response => response.json())
        .then(commitData => {
          if (commitData.parents.length > 1) {
            document.getElementById('revert-status').innerText = 'Revert available for this commit.';
          } else {
            document.getElementById('revert-status').innerText = 'No revert possible for this commit.';
          }
        });
    })
    .catch(err => console.error('Error fetching revert status:', err));
}

// Call fetchRepoDetails on page load
document.addEventListener('DOMContentLoaded', fetchRepoDetails);
