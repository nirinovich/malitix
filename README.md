# 🚀 Malitix - Site Vitrine

Site vitrine moderne pour Malitix, expert en solutions technologiques d'entreprise.

## 📚 Technologies

- **React** 19.1.1
- **TypeScript** 5.9.3
- **Tailwind CSS** 4.1.15
- **Vite** (Build tool)
- **pnpm** (Gestionnaire de paquets)

## 📦 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Preview du build
pnpm preview
```

## ✨ Fonctionnalités

- 🎨 **Mode Sombre/Clair** - Basculement avec persistance
- 📱 **Design Responsive** - Mobile, tablette, desktop
- ⚡ **Performance** - Build optimisé avec Vite
- 🎭 **Animations** - Transitions fluides et effets visuels
- 📝 **Formulaire de Contact** - Validation complète
- 🧪 **Tests A/B** - Hero et Services avec variantes

## 📂 Structure du Projet

```
src/
├── components/     # Composants React réutilisables
├── context/        # ThemeContext (dark/light mode)
├── hooks/          # Hooks React personnalisés
├── types/          # Définitions TypeScript
└── utils/          # Constantes et utilitaires

public/
├── Logo.png           # Logo mode sombre
└── LogoInverted.png   # Logo mode clair
```

## 🎯 Services Présentés

- **Refonte de SI** - Modernisation infrastructure
- **Développement Web & Mobile** - Applications sur mesure
- **Services Managés 24/7** - Support technique continu
- **Data Platform** - Plateformes de données robustes
- **Déploiement IA Métier** - Solutions d'intelligence artificielle

## 🎨 Palette de Couleurs

- **Noir** : `#060705` - Arrière-plan (mode sombre)
- **Blanc** : `#ffffff` - Arrière-plan (mode clair)
- **Bleu** : `#2ca3bd` - Couleur de marque et CTA

## 🧪 Tests A/B

Variantes disponibles (contrôles en haut à droite) :
- **Hero** : Animée vs Épurée
- **Services** : Bento Grid vs Référence
- **Navbar** : Défaut, Centrée, Minimale

⚠️ Pour la production, définir `showControls = false` dans `App.tsx`.

## 📝 Personnalisation

Modifier `src/utils/constants.ts` pour mettre à jour :
- Contenu des services
- Informations de l'entreprise
- Liens de navigation
- Coordonnées de contact

## 📝 Licence

© 2025 Malitix. Tous droits réservés.