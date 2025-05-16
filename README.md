# Pärnu Linna Areng

## Projekti struktuur

Projektil on kaks osa:
- **Backend**: Express.js + Supabase
- **Frontend**: Next.js

## Seadistamine

### Backend

1. Liigu backend kausta:
   ```
   cd backend
   ```

2. Installeeri sõltuvused:
   ```
   npm install
   ```

3. Kopeeri `.env.example` fail nimega `.env` ja seadista vajalikud väärtused:
   ```
   cp .env.example .env
   ```

4. Käivita arendusserver:
   ```
   npm run dev
   ```

### Frontend

1. Liigu frontend kausta:
   ```
   cd frontend
   ```

2. Installeeri sõltuvused:
   ```
   npm install
   ```

3. Kopeeri `.env.example` fail nimega `.env.local` ja seadista vajalikud väärtused:
   ```
   cp .env.example .env.local
   ```

4. Käivita arendusserver:
   ```
   npm run dev
   ```

## Ideedehaldus

Rakendus võimaldab:
1. Külastajatel saata ideid
2. Adminil ideede haldust (lisamine, muutmine, kustutamine)
3. Admini ligipääsu parooli abil

## Supabase andmebaasi struktuur

Projektis on kasutatud järgmiseid tabeleid:

### `idee`
- `id`: number (primary key)
- `pealkiri`: string 
- `kirjeldus`: string
- `nimi`: string
- `email`: string
- `hääletusel`: boolean
- `sektorId`: number (foreign key → sektor.id)
- `createdAt`: timestamp

### `sektor`
- `id`: number (primary key)
- `nimi`: string

## Offlaini tugi

Rakendus on disainitud nii, et see töötaks ka siis, kui backend pole kättesaadav. 
Sellisel juhul kasutatakse testandmeid mõlemas rakenduse osas.
