async function fetchData() {
    try {
        console.log("Fetching data...");
        const response = await fetch('https://api.github.com/users/ReddBeard');
        if (!response.ok) throw new Error('Network response failed');
        const data = await response.json();
        console.log("GitHub user name:", data.name);
        console.log("User bio:", data.bio);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

// Call the function
fetchData();
