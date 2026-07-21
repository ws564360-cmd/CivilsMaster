document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Civils Master Loaded");

    const year = new Date().getFullYear();
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML = `© ${year} Civils Master | UPSC IAS Academy`;
    }
});
