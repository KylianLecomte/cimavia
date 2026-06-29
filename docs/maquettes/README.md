# Maquettes — cimavia

Maquettes d'écrans produites via **Claude Design** (format `*.dc.html`), track **PD — Maquettage** du plan de dev (`cimavia_dev-plan.html`). Référence visuelle / spec : chaque lot débloque la phase UI correspondante.

## Convention

- Un fichier `*.dc.html` par écran, rangé par cible (`shared/`, `web-coach/`, `mobile-athlete/`).
- Garder le nom d'export Claude Design ; le mapping vers la tâche `pd-N` se fait dans le tableau ci-dessous.
- Les fichiers `support.js` / `ios-frame.jsx` font partie du **runtime Claude Design** (rendu), pas du produit : non versionnés ici. Ces maquettes servent de **référence**, pas de code à importer tel quel.

## Règles produit à respecter à l'implémentation

- **Tokens** : la palette du design system (accent terracotta `#C2603A`, neutres granite, success/warning/error, radii, spacing) devient la **source de `@cmv/tokens`** (pd-1 → P0-14). Une fois là : **zéro `#xxxxxx` hors tokens**, couleurs via `bg-cmv-*` / `text-cmv-*`.
- **Composants** préfixés `Cmv` (atoms du design system → `CmvButton`, `CmvInput`, `CmvBadge`, `CmvCard`…).
- **i18n** : toute string passe par i18next — les libellés des maquettes sont du français de référence, pas du texte en dur.
- **Nullable** : un champ sans donnée s'affiche `—`, jamais `0`.
- **Termes** : suivre le glossaire (`../CONTEXT.cimavia.md`) — `Plan`/`PlanWeek` (TRAINING/DELOAD), `ScheduledSession`, `SessionFeedback`, `Invoice`…

## Mapping écrans ↔ tâches PD

| Fichier | Tâche | Écran | Sert | Statut |
|---|---|---|---|---|
| `shared/design_system.dc.html` | pd-1, pd-2 | Design system (tokens + atoms) | P0-14 | ✅ |
| `mobile-athlete/athlete-planning_semaine.dc.html` | pd-9 | Planning athlète — vue semaine | P3 | ✅ |
| `web-coach/coach_builder_planification.dc.html` | pd-7 | Builder de planification (coach) | P3 | ✅ |
| `shared/` _(à produire)_ | pd-3 | Auth & onboarding (connexion, inscription, rôle, invitation) | P1 | ⬜ |
| `web-coach/` _(à produire)_ | pd-4 | Dashboard coach + liste des athlètes | P1 | ⬜ |
| `web-coach/` _(à produire)_ | pd-5 | Fiche athlète (AthleteProfile) | P1 | ⬜ |
| `web-coach/` _(à produire)_ | pd-6 | Bibliothèque : Exercise (liste + form) + SessionBuilder | P2 | ⬜ |
| `web-coach/` _(à produire)_ | pd-8 | Émission & suivi de factures (Invoice) | P6 | ⬜ |
| `mobile-athlete/` _(à produire)_ | pd-10 | Débrief de séance (SessionFeedback + médias) | P4 | ⬜ |
| `mobile-athlete/` _(à produire)_ | pd-11 | Consultation factures (athlète) | P6 | ⬜ |
| `mobile-athlete/` + `web-coach/` _(à produire)_ | pd-12 | Conversation 1:1 (Composer texte/audio/médias) | P5 | ⬜ |
