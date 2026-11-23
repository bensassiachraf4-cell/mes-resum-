# StudyHub — Portfolio numérique

Site statique responsive prêt pour GitHub Pages.

## Personnaliser les liens Google Classroom
Ouvre `script.js`, puis remplace chaque URL `https://classroom.google.com/` par le lien direct de la classe correspondante.

> Cette version fournit des liens directs vers les classes. La synchronisation automatique des cours, fichiers et devoirs demande une intégration Google Classroom API avec OAuth 2.0, un projet Google Cloud et une configuration sécurisée. Ne place jamais un secret OAuth dans ce dépôt public.

## Publier sur GitHub Pages
1. Crée un dépôt GitHub public, par exemple `studyhub-iset-nabeul`.
2. Envoie `index.html`, `style.css`, `script.js` et `README.md` à la racine du dépôt.
3. Dans **Settings → Pages**, choisis **Deploy from a branch**, branche `main`, dossier `/(root)`, puis **Save**.
4. Attends la fin du déploiement. Le site sera accessible à `https://TON-IDENTIFIANT.github.io/studyhub-iset-nabeul/`.

## Structure
- `index.html` : contenu du site
- `style.css` : design responsive et coloré
- `script.js` : mind map interactif, recherche et liens Classroom
