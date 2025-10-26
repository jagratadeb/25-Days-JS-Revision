// 🎯 Object Destructuring Example
const course = {
  name: "JS in Hindi",
  price: 999,
  instructor: "Hitesh",
};

// Destructuring with renaming
const { name: courseName, price, instructor } = course;

console.log("📦 Destructured Values:");
console.log(`Course: ${courseName}`);
console.log(`Price: ₹${price}`);
console.log(`Instructor: ${instructor}`);

// 🌐 JSON API Fetch Example
async function fetchGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    // Destructuring API response
    const { login, public_repos, avatar_url } = data;

    console.log("\n🌐 GitHub User Info:");
    console.log(`Username: ${login}`);
    console.log(`Public Repos: ${public_repos}`);
    console.log(`Avatar URL: ${avatar_url}`);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

// Call the function
fetchGitHubUser("jagratadeb");
