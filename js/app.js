
// Main Application File

async function startApp() {

    const app = document.getElementById("app");

    try {

        // Load JSON data first
        await loadData();

        // Initialize SPA Router
        initRouter();

        console.log("Smart Shopping SPA Started Successfully!");

    } catch (error) {

        app.innerHTML = `
            <h2>Something went wrong!</h2>
            <p>Unable to load shopping website data.</p>
        `;

        console.error(error);

    }

}


// Start Application
startApp();
