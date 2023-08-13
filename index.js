import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const adj = adjective[Math.floor(Math.random() * adjective.length)];
    res.render("index.ejs", { adj});
});

app.listen(port, () => {
    console.log('Server is running at ${port}');
});

const adjective = [
    "Crazyband", "Band2", "Rockstarz", 
    "The Blasters", "Sonic Boom", "Fireworks", 
    "Electric Shock", "The Rebels", "Blackout", 
    "Flashback", "The Dreamers", "Moonlight", 
    "Starstruck", "Cosmic Dust", "Galaxy Quest", 
    "The Explorers", "Adventure Time", "The Legends", 
    "Mythic", "Magic Spell", "The Wizards", "Dragon Fire", 
    "Phoenix Rising", "The Guardians", "The Avengers", "Superhero", 
    "Powerhouse", "Dynamite", "The Breakers", "Smash Hit", 
    "Neon Lights", "Night Riders", "Supersonic", "Laser Beam",
    "Space Cadets", "Solar Flare", "Lunar Eclipse", "Shooting Stars",
    "Meteor Shower", "Comet Trail", "Alien Invasion", "Rocket Power", 
    "Infinity Loop", "Warp Speed", "Time Travelers", "Future Shock", 
    "Alternate Reality", "Electric Avenue", "Techno Beats", "Digital World", 
    "Virtual Insanity", "Hologram", "Remote Control", "Cosmic Rays", "Quasar",
    "Pulsar", "Gamma Rays", "Light Speed", "Wormhole", "Hyperspace", "Star Portal",
    "Quantum Leap", "Gravity Wave", "Tidal Force", "Magnetic Field", "Full Moon",
    "Harvest Moon", "Blue Moon", "Super Moon", "Blood Moon", "Nebula", "Constellation",
    "Milky Way", "Andromeda", "Cosmic Journey", "Interstellar", "Light Years", "Parsecs", 
    "Solar Winds", "Stellar Nursery", "Orion's Belt", "Outer Limits", "Event Horizon", 
    "Accretion Disk", "Celestial Sphere", "Lunar Cycle", "Retrograde", "Supernova", 
    "Big Bang", "Expanding Universe", "Dark Matter", "Black Hole", "Spacetime Rift",
    "Infinite Loop", "Möbius Strip", "Tesseract", "Cosmic Strings", "Parallel Worlds",
    "Altered States", "Déjà Vu", "Butterfly Effect", "Domino Effect", "Ripple Effect", 
    "Cause and Effect", "Chaos Theory", "Quantum Foam", "Uncertainty Principle",
    "Observer Effect", "Wave Function", "Probability Wave", "Entanglement", 
    "Quantum Tunneling", "Quantum Teleportation", "Quantum Computing", "Quantum Chromodynamics", 
    "Quantum Electrodynamics", "Virtual Particles", "Vacuum Energy", "Zero-Point Field", "Planck Scale", 
    "Standard Model", "Theory of Everything", "Grand Unified Theory", "Ekpyrotic Universe", 
    "Oscillating Universe", "Eternal Inflation", "False Vacuum", "Brane Cosmology", "Holographic Principle", 
    "Anthropic Principle", "Fine-Tuned Universe", "Boltzmann Brain", "Quantum Mind", "Simulated Universe", "Mathematical Universe",
    "Time Crystals", "Closed Timelike Curves", "Causal Loops", "Crazy Beats"];