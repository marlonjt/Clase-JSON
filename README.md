# Clase-JSON — Mapa de Personas

App web con Node.js, Express, PostgreSQL y Leaflet que muestra personas registradas como marcadores en un mapa de Quito.

## ¿Qué hace?

| Página | Ruta | Descripción |
|--------|------|-------------|
| Mapa | `/` | Muestra el mapa con un marcador por cada persona |
| Registrar | `/crear.html` | Formulario para agregar personas con geocoding automático |

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/personas` | GET | Lista todas las personas |
| `/api/personas` | POST | Crea una persona con coordenadas |

## Requisitos

- Node.js >= 18
- PostgreSQL corriendo en `localhost:5432`

## Instalación

```bash
git clone https://github.com/marlonjt/Clase-JSON.git
cd Clase-JSON
npm install
```

Crea la base de datos:

```bash
sudo -u postgres psql -c "ALTER USER postgres PASSWORD '1234';"
sudo -u postgres psql -c "CREATE DATABASE mapa;"
```

Crea el archivo `.env`:

```bash
DB_NAME=mapa
DB_USER=postgres
DB_PASSWORD=1234
DB_HOST=localhost
PORT=4000
```

## Levantar

```bash
npm start
```

Servidor en **http://localhost:4000**

## Probar

1. Abre **http://localhost:4000/crear.html**
2. Registra una persona con un sector de Quito, por ejemplo: `La Mariscal, Quito`
3. El sistema busca las coordenadas automáticamente (geocoding via OpenStreetMap)
4. Abre **http://localhost:4000** — aparece el marcador azul en el mapa

## Dependencias

| Paquete | Rol |
|---------|-----|
| express | Servidor HTTP |
| sequelize | ORM para PostgreSQL |
| pg / pg-hstore | Driver PostgreSQL |
| dotenv | Variables de entorno |
| nodemon | Recarga automática |

---
**Autor:** Marlon Tituaña
