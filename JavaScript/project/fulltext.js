document.addEventListener("DOMContentLoaded", () => {
    const fulltextContent = document.getElementById("fulltext-content");

    // Function to retrieve FullText content from localStorage
    const getFullTextFromStorage = () => {
        return localStorage.getItem("fulltext");
    };

    // Display the FullText content
    const displayFullText = () => {
        const fullText = getFullTextFromStorage();
        if (fullText) {
            fulltextContent.innerHTML = fullText;
        } else {
            fulltextContent.innerHTML = "<p>No FullText available.</p>";
        }
    };

    // Call the displayFullText function when the page loads
    displayFullText();
});
