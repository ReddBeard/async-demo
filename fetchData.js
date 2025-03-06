async function fetchData() {
    const response = await fetch('https://api.github.com/users/octocat');
    const data = await response.json();
    console.log(data.name);
}
fetchData();
