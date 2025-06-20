const themeSelectorHTML = `
  <div id="theme-selector" style="margin-bottom: 1rem;">
    <label for="themeDropdown">Theme:</label>
    <select id="themeDropdown" onchange="switchTheme(this.value)">
      <option value="gold">Tarnished</option>
      <option value="red">Roseblood</option>
      <option value="void">Argent</option>
      <option value="plague">Plague</option>
      <option value="dream">Dream</option>
      <option value="dancer">Dancer</option>
      <option value="anime">Anime</option>
      <option value="punk">Rebel</option>
      <option value="vapor">Vapor</option>
      <option value="blood">Hunter</option>
      <option value="fauna">Mother Nature</option>
      <option value="cinder">Lord of Cinder</option>
      <option value="dsi">Invader</option>
    </select>
  </div>
`;

document.addEventListener("DOMContentLoaded", function () {
  // Append theme selector to body or a placeholder element
  const placeholder = document.getElementById("theme-slot");
  if (placeholder) {
    placeholder.innerHTML = themeSelectorHTML;
  }

  // Theme loading
  const savedTheme = localStorage.getItem("codexTheme") || "gold";
  switchTheme(savedTheme);
  const dropdown = document.getElementById("themeDropdown");
  if (dropdown) dropdown.value = savedTheme;
});

//---Themes---//
    function switchTheme(theme) {
      const root = document.documentElement;
      const [gold, bronze, glow, hover] = themeVars[theme] || themeVars['gold'];
      root.style.setProperty('--accent-gold', gold);
      root.style.setProperty('--accent-bronze', bronze);
      root.style.setProperty('--glow-color', glow);
      root.style.setProperty('--button-hover', hover);
      localStorage.setItem('codexTheme', theme);
    }
    const themeVars = {
      gold: [
      '#d9b13b', // --accent-gold
      '#bf8e34', // --accent-bronze
      '#d9b13b', // --glow-color
      '#bf8e34' // --button-hover
    ],
    red: [
      '#26f78f', // --accent-gold
      '#fa1d18', // --accent-bronze
      '#26f78f', // --glow-color
      '#26f78f' // --button-hover
    ],
    void: [
      '#bac5c1', // --accent-gold
      '#2a494c', // --accent-bronze
      '#4d5b5c', // --glow-color
      '#4d5b5c' // --button-hover
    ],
    plague: [
      '#43f439', // --accent-gold
      '#09901d', // --accent-bronze
      '#10e41b', // --glow-color
      '#10e41b' // --button-hover
    ],
    dream: [
      '#f5008f', // --accent-gold
      '#ffb3c1', // --accent-bronze
      '#d6006f', // --glow-color
      '#d6006f' // --button-hover
    ],
    dancer: [
      '#ba0000', // --accent-gold
      '#000cba', // --accent-bronze
      '#ba0000', // --glow-color
      '#ba0000' // --button-hover
    ],
    anime: [
      '#00b6bd', // --accent-gold
      '#ff6524', // --accent-bronze
      '#3459fe', // --glow-color
      '#3459fe' // --button-hover
    ],
    punk: [
      '#00ccff', // --accent-gold
      '#ffcc00', // --accent-bronze
      '#cc00ff', // --glow-color
      '#ff00cc' // --button-hover
    ],
    vapor: [
      '#ff75ff', // --accent-gold
      '#3dffec', // --accent-bronze
      '#ff5c8d', // --glow-color
      '#aa2c8d' // --button-hover
    ],
    blood: [
      '#9a1818', // --accent-gold
      '#34302f', // --accent-bronze
      '#9a1818', // --glow-color
      '#1a0b06' // --button-hover
    ],
    fauna: [
      '#aad08a', // --accent-gold
      '#e6b7c1', // --accent-bronze
      '#f5fbac', // --glow-color
      '#f5fbac' // --button-hover
    ],
    cinder: [
      '#ff6d1f', // --accent-gold
      '#ffa55c', // --accent-bronze
      '#ff8b47', // --glow-color
      '#ff8b47' // --button-hover
    ],
    dsi: [
      '#c11515', // --accent-gold
      '#550202', // --accent-bronze
      '#570a0a', // --glow-color
      '#570a0a' // --button-hover
    ],
    }