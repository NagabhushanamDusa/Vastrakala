const fabrics = [
    {
        name: "Banarasi Silk",
        state: "Uttar Pradesh",
        story: "Woven with gold and silver threads, Banarasi silk symbolizes royalty."
    },
    {
        name: "Pochampally Ikat",
        state: "Telangana",
        story: "Known for its geometric precision, dyed before weaving."
    },
    {
        name: "Kanchipuram Silk",
        state: "Tamil Nadu",
        story: "Famous for durability and temple-inspired designs."
    },
    {
        name:"Garshakurthy Vastra",
        state:"Telangana",
        story:"Every Handloom is inspired Design Unique Collection"
    }
];

// Dynamic Card Creation
const section = document.getElementById("fabricSection");

fabrics.forEach(fabric => {
    const card = document.createElement("div");
    card.className = "fabric-card";

    card.innerHTML = `
        <h3>${fabric.name}</h3>
        <p>${fabric.state}</p>
    `;

    card.addEventListener("click", () => showStory(fabric));
    section.appendChild(card);
});

// Modal Logic
const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const story = document.getElementById("modalStory");

function showStory(fabric) {
    title.textContent = fabric.name;
    story.textContent = fabric.story;
    modal.classList.remove("hidden");
}

document.getElementById("closeModal").onclick = () => {
    modal.classList.add("hidden");
};

// Theme Toggle (Local Storage)
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
};

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

//Weavers
const weavers = [
    {
        name: "Ramesh Kumar",
        region: "Varanasi, Uttar Pradesh",
        craft: "Banarasi Silk",
        story: "I learned weaving from my father. Each saree takes 15 days and carries our family’s heritage."
    },
    {
        name: "Lakshmi Devi",
        region: "Kanchipuram, Tamil Nadu",
        craft: "Kanchipuram Silk",
        story: "Weaving is not just work for me; it is devotion passed through generations."
    },
    {
        name: "Srinivas Rao",
        region: "Pochampally, Telangana",
        craft: "Ikat Weaving",
        story: "Precision and patience define Ikat. Every thread is dyed before weaving."
    },
    {
        name:"Garshakurthy Vastra",
        state:"Telangana",
        story:"Every Handloom is inspired Design Unique Collection"
    }
];

const weaverContainer = document.getElementById("weaverCards");

weavers.forEach(weaver => {
    const card = document.createElement("div");
    card.className = "weaver-card";

    card.innerHTML = `
        <h3>${weaver.name}</h3>
        <p><strong>Region:</strong> ${weaver.region}</p>
        <p><strong>Craft:</strong> ${weaver.craft}</p>
    `;

    card.addEventListener("click", () => openWeaverModal(weaver));
    weaverContainer.appendChild(card);
});

// Modal logic
const Modal = document.getElementById("weaverModal");
const nameField = document.getElementById("weaverName");
const storyField = document.getElementById("weaverStory");

function openWeaverModal(weaver) {
    nameField.textContent = weaver.name;
    storyField.textContent = weaver.story;
    modal.classList.remove("hidden");
}

document.getElementById("closeWeaver").onclick = () => {
    modal.classList.add("hidden");
};


//sustainability
function calculateImpact() {
    const garments = document.getElementById("garments").value;

    const waterSaved = garments * 500; // liters
    const carbonReduced = garments * 2; // kg

    document.getElementById("result").innerText =
        `You saved ${waterSaved} liters of water and reduced ${carbonReduced} kg of CO₂ by choosing handloom.`;
}





