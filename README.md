# ISET Nabeul — Hub de Révision (Résumés, Podcasts, Vidéos & Google Classroom)

Plateforme web statique conçue pour les étudiants en **Technologie Informatique (ISET Nabeul)**, hébergeable gratuitement sur **GitHub Pages**.

## Fonctionnalités incluses
- **Modules structurés** : *Digital Skills*, *Fundamental IT*, *Systèmes Électriques* et *TP ISET Nabeul*.
- **3 formats par chapitre** :
  1. **Fiche Résumé** : Synthèse claire et formules/commandes clés.
  2. **Podcast Audio** : Lecteur audio intégré avec synthèse vocale française et contrôle de vitesse (`1.0x`, `1.25x`, `1.5x`).
  3. **Capsule Vidéo** : Diaporama interactif chapitré.
- **Connexion Google Classroom** : Interface d'importation des cours et TP et générateur automatique de fiches/podcasts.

## Déploiement sur GitHub Pages
1. Créez un nouveau dépôt public sur GitHub (ex. `iset-nabeul-revision`).
2. Uploadez tous les fichiers contenus dans ce dossier (`index.html`, `README.md`, et le dossier `assets/`).
3. Allez dans **Settings > Pages**.
4. Sous **Build and deployment**, sélectionnez la branche `main` et le dossier `/ (root)`, puis cliquez sur **Save**.
5. Votre site sera en ligne à l'adresse `https://<votre-utilisateur>.github.io/iset-nabeul-revision/`.

## Activer la vraie synchronisation Google Classroom (OAuth 2.0)
1. Rendez-vous sur [Google Cloud Console](https://console.cloud.google.com/).
2. Créez un projet et activez l'API **Google Classroom API**.
3. Dans **Identifiants > Créer des identifiants > ID client OAuth**, choisissez *Application Web* et ajoutez votre URL GitHub Pages dans les *Origines JavaScript autorisées*.
4. Copiez votre `Client ID` et collez-le dans le bouton **Google Classroom** du site.
