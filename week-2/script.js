const repoApiUrl = "https://api.github.com/repos/feexie/flexisaf";

// Fetch repository details
function fetchRepoDetails() {
  fetch(repoApiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("repo-name").innerText = data.name;
      // Fetch additional details
      fetchBranches();
      fetchCommits();
      fetchContributors();
    })
    .catch((err) => console.error("Error fetching repo details:", err));
}

// Fetch branches count
function fetchBranches() {
  fetch(`${repoApiUrl}/branches`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("branches-count").innerText = data.length;
    })
    .catch((err) => console.error("Error fetching branches:", err));
}

// Fetch commits count and revert status
function fetchCommits() {
  fetch(`${repoApiUrl}/commits`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("commits-count").innerText = data.length;
      // Check for revert status using the latest commit SHA
      if (data.length > 0) {
        const latestCommitSha = data[0].sha; // Get the SHA of the latest commit
        fetchRevert(latestCommitSha);
      } else {
        document.getElementById("revert-status").innerText = "No commits found.";
        document.getElementById("revert-details").innerText = "";
      }
    })
    .catch((err) => console.error("Error fetching commits:", err));
}

// Fetch contributors count
function fetchContributors() {
  fetch(`${repoApiUrl}/contributors`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("contributors-count").innerText = data.length;
    })
    .catch((err) => console.error("Error fetching contributors:", err));
}

// Fetch revert status (specific commit details)
function fetchRevert(specificCommitSha) {
  fetch(`${repoApiUrl}/commits/${specificCommitSha}`)
    .then((response) => response.json())
    .then((data) => {
      const commitMessage = data.commit.message;
      const parents = data.parents;

      // Check if the commit message includes "Revert" and has more than one parent
      if (commitMessage.includes("Revert") && parents.length > 1) {
        document.getElementById("revert-status").innerText = "Revert Commit Found!";
        document.getElementById("revert-details").innerText = `
          Commit Message: ${commitMessage}
          SHA: ${data.sha}
          Parent SHA: ${parents.map((parent) => parent.sha).join(", ")}
        `;
      } else {
        document.getElementById("revert-status").innerText = "No Revert Found for this Commit.";
        document.getElementById("revert-details").innerText = "";
      }
    })
    .catch((err) => console.error("Error fetching revert status:", err));
}

// Call fetchRepoDetails on page load
document.addEventListener("DOMContentLoaded", fetchRepoDetails);
