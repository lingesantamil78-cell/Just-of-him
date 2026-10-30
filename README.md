# Friendship Gift Website – Thunglish Version 💐

Indha website oru friend-kaga create pannina cute friendship gift. Content full-ah Thunglish-la irukkum. Friendship mattum — romantic message illa.

## Local-ah open panna
1. ZIP extract pannu.
2. `friendship-gift-site` folder-ah VS Code-la open pannu.
3. `public/index.html` open panni browser-la paaru. VS Code Live Server use pannalaam.

## GitHub Pages-la publish panna
1. GitHub-la new repository create pannu.
2. `public` folder-kulla irukkura `index.html`, `style.css`, `script.js` files-ah repository root-ku upload pannu.
3. Repository **Settings → Pages** open pannu.
4. Deploy from branch select panni `main` and `/ (root)` choose panni Save pannu.
5. GitHub website link create pannum.

## Backend / online replies
GitHub Pages frontend mattum host pannum; Node.js backend run pannaadhu. `server.js`-ku separate Node hosting thevai. Deploy pannitu backend URL copy pannu. `public/script.js`-la `const API_BASE = '';` line-ai un backend URL-ah maathu. Apram updated public files-ah GitHub-ku upload pannu.

**Important:** Included sample backend `data/responses.json` file-la save pannum. Sila hosting services restart aagumbodhu local files erase aagalaam. Long-term reply storage-ku hosted database connect pannradhu better. Private phone number, address, password maadhiri details website-la podaadha.

## Project files
- `public/index.html` – website content
- `public/style.css` – design and mobile layout
- `public/script.js` – questions, navigation, reply handling
- `server.js` – optional Node.js API
- `package.json` – backend dependencies and start command
