# 📊 Migration vers Supabase - Guide Complet

**Auteur:** ThePhoenixAgency
**Date:** 2026-01-07
**Version:** 1.0.0

---

## 🎯 Vue d'ensemble

Ce guide explique comment migrer le système d'analytics d'AI-Pulse de localStorage vers Supabase, une base de données PostgreSQL sécurisée avec Row Level Security (RLS).

### Avantages de Supabase

✅ **Persistance** : Les données survivent aux vidages de cache
✅ **Multi-device** : Stats synchronisées entre tous les utilisateurs
✅ **Sécurité** : RLS (Row Level Security) intégré
✅ **Performance** : Indexes optimisés pour requêtes rapides
✅ **GDPR Compliant** : Anonymisation automatique après 90 jours
✅ **Gratuit** : 500 MB de stockage + 2 GB de transfert/mois

---

## 📋 Prérequis

1. **Compte Supabase** : [supabase.com](https://supabase.com) (gratuit)
2. **Projet créé** : Créer un nouveau projet Supabase
3. **GitHub Secrets** : Accès aux secrets de votre repo

---

## 🚀 Étape 1 : Configuration Supabase

### 1.1 Créer un projet Supabase

1. Allez sur [app.supabase.com](https://app.supabase.com)
2. Cliquez sur "New Project"
3. Remplissez :
   - **Name:** `ai-pulse-analytics`
   - **Database Password:** (généré automatiquement, notez-le)
   - **Region:** Choisir la plus proche (Paris pour Europe)
4. Cliquez sur "Create new project"
5. Attendez ~2 minutes que le projet soit prêt

### 1.2 Récupérer les clés API

Une fois le projet créé :

1. Allez dans **Settings** → **API**
2. Notez ces 3 valeurs :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon public key** : `eyJhbGc...` (clé publique)
   - **service_role key** : `eyJhbGc...` (clé privée, JAMAIS dans le code client)

---

## 🔒 Étape 2 : Configurer GitHub Secrets

### 2.1 Ajouter les secrets

1. Allez sur votre repo GitHub : `https://github.com/ThePhoenixAgency/AI-Pulse`
2. Cliquez sur **Settings** → **Secrets and variables** → **Actions**
3. Cliquez sur **New repository secret**
4. Ajoutez ces 3 secrets :

| Secret Name | Valeur | Usage |
|-------------|--------|-------|
| `SUPABASE_URL` | `https://xxxxx.supabase.co` | URL du projet |
| `SUPABASE_ANON_KEY` | `eyJhbGc...` | Clé anonyme (client) |
| `SUPABASE_SERVICE_KEY` | `eyJhbGc...` | Clé admin (serveur) |

⚠️ **Important** : Ne partagez JAMAIS `SUPABASE_SERVICE_KEY` publiquement !

---

## 🗄️ Étape 3 : Créer la base de données

### 3.1 Exécuter le schéma SQL

1. Dans Supabase, allez dans **SQL Editor**
2. Cliquez sur **New query**
3. Copiez TOUT le contenu de `database/supabase-analytics-schema.sql`
4. Collez-le dans l'éditeur
5. Cliquez sur **Run** (ou `Ctrl+Enter`)
6. Vérifiez qu'il n'y a pas d'erreurs

### 3.2 Vérifier les tables créées

Dans l'onglet **Table Editor**, vous devriez voir :

- ✅ `pulse_analytics` : Événements de tracking
- ✅ `pulse_sessions` : Sessions agrégées
- ✅ `pulse_countries` : Statistiques par pays

### 3.3 Vérifier Row Level Security (RLS)

Dans **Authentication** → **Policies**, vérifiez que chaque table a :

- ✅ Policy "Allow anonymous inserts" (INSERT pour anon)
- ✅ Policy "Allow authenticated reads" (SELECT pour authenticated)

---

## 💻 Étape 4 : Installer Supabase Client

### 4.1 Installer la dépendance

```bash
npm install @supabase/supabase-js
```

### 4.2 Vérifier package.json

Assurez-vous que `@supabase/supabase-js` est dans les dépendances :

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.39.0",
    ...
  }
}
```

---

## 🔧 Étape 5 : Activer Supabase dans le code

### 5.1 Décommenter le code Supabase dans tracker.js

Le code Supabase est déjà écrit mais commenté. Pour l'activer :

1. Ouvrez `tracker.js`
2. Cherchez le bloc commenté :
   ```javascript
   /*
   // SUPABASE INTEGRATION (Ready for production)
   ```
3. **Décommentez** tout le bloc (lignes 200-250 environ)
4. **Commentez** la partie localStorage (lignes 180-195)

### 5.2 Code à décommenter

```javascript
// Décommentez ce bloc dans tracker.js :
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

const { data, error } = await supabase
    .from('pulse_analytics')
    .insert([data]);

if (error) {
    console.error('Supabase error:', error);
}
```

---

## 📊 Étape 6 : Mettre à jour stats.html

### 6.1 Remplacer la fonction de récupération

Dans `stats.html`, remplacez `getAggregatedStats()` par :

```javascript
async function getAggregatedStats() {
    const { data, error } = await supabase
        .from('vw_session_summary')
        .select('*')
        .order('date', { ascending: false })
        .limit(30);

    if (error) {
        console.error('Erreur Supabase:', error);
        return getEmptyStats();
    }

    return aggregateData(data);
}
```

---

## 🧪 Étape 7 : Tester la migration

### 7.1 Test en local

1. Démarrez le serveur : `npm start` (si vous avez un serveur)
2. Ouvrez `reader.html` dans le navigateur
3. Ouvrez la console développeur (`F12`)
4. Vérifiez les logs : `📊 Event tracked to Supabase: pageview`

### 7.2 Vérifier dans Supabase

1. Allez dans **Table Editor** → `pulse_analytics`
2. Vous devriez voir des nouvelles lignes avec vos événements
3. Vérifiez que `country_code`, `session_id`, etc. sont remplis

### 7.3 Tester les stats

1. Ouvrez `stats.html`
2. Les statistiques doivent se charger depuis Supabase
3. Vérifiez que les graphiques s'affichent correctement

---

## 🔄 Étape 8 : Jobs automatiques (optionnel)

### 8.1 Créer une Edge Function pour les agrégations

Créez un fichier `supabase/functions/aggregate-stats/index.ts` :

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  )

  // Agréger les stats
  const { error } = await supabase.rpc('aggregate_country_stats')

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

### 8.2 Configurer un cron job

1. Allez dans **Database** → **Functions**
2. Créez une nouvelle fonction
3. Configurez un cron : `0 0 * * *` (tous les jours à minuit)
4. Appelez votre Edge Function

---

## 🛡️ Étape 9 : Sécurité et GDPR

### 9.1 Anonymisation automatique

Le script `anonymize_old_sessions()` supprime les données > 90 jours.

Pour l'exécuter manuellement :

```sql
SELECT anonymize_old_sessions();
```

### 9.2 Configurer l'anonymisation automatique

Créez un cron job qui exécute cette fonction chaque semaine.

### 9.3 Vérifier la conformité GDPR

✅ **Pas d'IP stockée** : Seulement le pays
✅ **Anonymisation** : Après 90 jours
✅ **Opt-out** : Les utilisateurs peuvent vider leur localStorage
✅ **Transparence** : Badge "Données anonymisées" visible

---

## 📈 Étape 10 : Monitoring

### 10.1 Supabase Dashboard

Surveillez :
- **Database** → **Usage** : Taille de la DB
- **API** → **Logs** : Requêtes et erreurs
- **Auth** → **Users** : Si vous activez l'authentification

### 10.2 Métriques à surveiller

| Métrique | Limite gratuite | Alerte si > |
|----------|-----------------|-------------|
| Stockage DB | 500 MB | 400 MB |
| Transfert | 2 GB/mois | 1.8 GB |
| Requêtes | Illimité | - |

---

## ❌ Rollback (en cas de problème)

Si vous devez revenir à localStorage :

1. **Recommentez** le code Supabase dans `tracker.js`
2. **Décommentez** le code localStorage
3. **Redéployez** le site

Vos données Supabase resteront intactes.

---

## 🎉 Migration terminée !

Vous avez maintenant :

✅ Base de données Supabase configurée
✅ RLS activé pour la sécurité
✅ Code tracker prêt à l'emploi
✅ Stats en temps réel
✅ GDPR compliant

### Prochaines étapes

- [ ] Configurer les jobs d'agrégation
- [ ] Ajouter un dashboard admin
- [ ] Exporter les stats en CSV
- [ ] Créer des alertes personnalisées

---

## 📞 Support

En cas de problème :

1. Vérifiez les logs Supabase : **API** → **Logs**
2. Vérifiez la console navigateur (`F12`)
3. Vérifiez que les secrets GitHub sont corrects
4. Testez les policies RLS manuellement

---

**Auteur:** ThePhoenixAgency
**Licence:** MIT
**Dernière mise à jour:** 2026-01-07
