# 🦋 Guide d'utilisation des Changesets

Ce monorepo utilise **Changesets** pour gérer les versions des packages, les changelogs et les publications automatisées sur npm.

## 🚀 Flux de travail recommandé

### 1. Faire vos modifications
Développez vos fonctionnalités ou fixez vos bugs normalement dans les packages.

### 2. Créer un Changeset
Dès que vos modifications sont prêtes à être commitées, lancez la commande suivante à la racine :

```bash
yarn changeset
```

1. **Sélectionnez les packages** modifiés (Espace pour cocher/décocher).
2. **Choisissez le type de version** :
   - `patch` : Bug fixes, petits changements internes.
   - `minor` : Nouvelles fonctionnalités non-bloquantes.
   - `major` : Changements cassant la compatibilité.
3. **Rédigez un résumé** : Ce texte apparaîtra dans le `CHANGELOG.md` du package.

### 3. Commiter et Pousser
Une fois le fichier `.changeset/votre-nom-aleatoire.md` généré, commitez-le avec votre code :

```bash
git add .
git commit -m "feat: description de ma modif"
git push
```

## 🤖 Automatisation CI (GitHub Actions)

La CI s'occupe du reste :
1. Elle détecte la présence d'un nouveau fichier dans `.changeset/`.
2. Elle **build** et **lint** tous les packages.
3. Elle déclenche le job de **Release** :
   - Résout les dépendances `workspace:*` en versions réelles.
   - Publie les packages sur npm dans le bon ordre de dépendance.
   - Crée (si besoin) une Pull Request de versionnement si vous préférez valider manuellement avant publication.

## 🛠 Commandes utiles

- `yarn changeset` : Ajouter un nouveau changeset.
- `yarn changeset status` : Voir les changements en attente de versionnement.
- `yarn changeset version` : (Local uniquement - fait par la CI) Consomme les changesets pour mettre à jour les versions des `package.json`.
