# FASE 02 — Arquitectura técnica

## 1. Objetivo de la fase

Definir la estructura técnica de SalesIA Enterprise antes de implementar los módulos funcionales. La arquitectura separa presentación, API, lógica de negocio, análisis estadístico y persistencia.

## 2. Stack tecnológico definido

| Capa | Tecnología |
|---|---|
| Frontend | React + TypeScript |
| Backend/API | Python + FastAPI |
| Base de datos | PostgreSQL |
| Análisis | Python con NumPy / Pandas / SciPy |
| Comunicación | HTTPS + REST |

## 3. Arquitectura general

```text
┌─────────────────────────────────────┐
│          FRONTEND                   │
│       React + TypeScript            │
│  UI · rutas · formularios · charts  │
└──────────────────┬──────────────────┘
                   │ HTTPS / REST
                   ▼
┌─────────────────────────────────────┐
│            BACKEND                  │
│            FastAPI                  │
│ Auth · Customers · Products         │
│ Sales · Inventory · Statistics      │
│ Probability · Insights · Reports    │
└───────────────┬─────────┬───────────┘
                │         │
                │         ▼
                │  ┌───────────────────┐
                │  │ Motor analítico   │
                │  │ Python            │
                │  │ NumPy/Pandas/     │
                │  │ SciPy             │
                │  └───────────────────┘
                │
                ▼
┌─────────────────────────────────────┐
│           PostgreSQL                │
│ usuarios · clientes · productos     │
│ ventas · pagos · inventario         │
│ datasets · análisis · auditoría     │
└─────────────────────────────────────┘
```

## 4. Separación de responsabilidades

### Frontend
Responsable de presentación, navegación, formularios, validaciones de interfaz, consumo de API, estados de carga/error y visualización de resultados.

### Backend
Responsable de exponer endpoints REST, autenticar/autorización usuarios, validar datos, ejecutar reglas de negocio y coordinar persistencia y análisis.

### Motor analítico
Responsable de cálculos estadísticos y probabilísticos, incluyendo media, mediana, comparación, variables, variables aleatorias y Bayes.

### Base de datos
Responsable de persistir las entidades operativas, datasets, resultados analíticos, reportes y auditoría.

## 5. Módulos del backend

```text
backend/app/
├── api/
├── core/
├── models/
├── schemas/
├── services/
├── statistics/
├── probability/
└── reports/
```

### api/
Define las rutas/endpoints REST.

### core/
Configuración transversal de la aplicación, seguridad y dependencias centrales.

### models/
Modelos asociados a la persistencia y entidades del sistema.

### schemas/
DTOs/esquemas de entrada y salida para los contratos de la API.

### services/
Lógica de negocio y coordinación de operaciones.

### statistics/
Operaciones estadísticas.

### probability/
Operaciones probabilísticas y análisis de Bayes.

### reports/
Generación y gestión de reportes.

## 6. Módulos funcionales de API

- Auth
- Customers
- Products
- Sales
- Inventory
- Statistics
- Probability
- Insights
- Reports

## 7. Contratos iniciales de API

| Método | Endpoint | Propósito |
|---|---|---|
| POST | `/auth/login` | Autenticación. |
| GET/POST | `/customers` | Consultar/crear clientes. |
| GET | `/products` | Consultar productos. |
| POST/GET | `/sales` | Registrar/consultar ventas. |
| GET | `/dashboard/summary` | Obtener resumen de indicadores. |
| POST | `/statistics/mean` | Calcular media. |
| POST | `/statistics/median` | Calcular mediana. |
| POST | `/statistics/compare` | Comparar datos estadísticos. |
| POST | `/probability/bayes` | Ejecutar análisis de Bayes. |
| POST | `/random-variables/analyze` | Analizar variables aleatorias. |
| GET | `/insights` | Consultar insights. |
| GET | `/reports` | Consultar reportes. |

Estos endpoints son el contrato inicial indicado por el plan; los esquemas detallados de request/response se implementarán durante la construcción del backend.

## 8. Flujo de una petición

```text
React
  ↓
HTTP request
  ↓
FastAPI Router
  ↓
Validación / autenticación / autorización
  ↓
Service
  ↓
┌───────────────┬──────────────────┐
│ PostgreSQL    │ Motor analítico  │
└───────────────┴──────────────────┘
  ↓
Resultado
  ↓
FastAPI response
  ↓
React
```

## 9. Modelo de datos inicial

Entidades contempladas por el plan:

```text
users
roles
companies
customers
products
categories
sales
sale_details
payments
inventory
inventory_movements
employees
datasets
dataset_variables
observations
statistical_analyses
statistical_results
bayes_analyses
random_variables
insights
reports
audit_logs
```

Las relaciones concretas, claves, cardinalidades, índices y restricciones se definirán en la Fase 04 — PostgreSQL.

## 10. Seguridad y autorización

La arquitectura contempla:

- Autenticación de usuarios.
- Autorización mediante roles/permisos.
- Validación de datos en frontend y backend.
- Variables de entorno para configuración sensible.
- Manejo centralizado de errores.
- Auditoría y trazabilidad.

Los mecanismos concretos de tokens, expiración, hash de contraseñas y política de permisos deben definirse durante la implementación del módulo de seguridad.

## 11. Entornos y configuración

Variables previstas:

```text
DATABASE_URL
SECRET_KEY
CORS_ORIGINS
API_BASE_URL
ENVIRONMENT
```

La configuración sensible no debe quedar codificada directamente en el código fuente.

## 12. Estructura técnica propuesta

```text
salesia-enterprise/
├── frontend/
│   └── src/
│       ├── app/
│       ├── components/
│       ├── layouts/
│       ├── modules/
│       │   ├── auth/
│       │   ├── dashboard/
│       │   ├── customers/
│       │   ├── products/
│       │   ├── sales/
│       │   ├── inventory/
│       │   ├── analytics/
│       │   ├── probability/
│       │   ├── insights/
│       │   └── reports/
│       ├── services/
│       ├── hooks/
│       ├── types/
│       └── utils/
│
├── backend/
│   └── app/
│       ├── api/
│       ├── core/
│       ├── models/
│       ├── schemas/
│       ├── services/
│       ├── statistics/
│       ├── probability/
│       └── reports/
│
├── database/
│   ├── migrations/
│   └── seeds/
│
└── docs/
```

## 13. Decisiones de arquitectura

1. React + TypeScript se utilizará como capa de presentación.
2. FastAPI será el punto de entrada de la API REST.
3. PostgreSQL será la fuente principal de persistencia.
4. Python concentrará la lógica estadística y probabilística.
5. La comunicación frontend/backend se realizará mediante REST sobre HTTPS.
6. La lógica de negocio se mantendrá separada de las rutas HTTP.
7. Los esquemas/DTOs definirán contratos de entrada y salida.
8. La configuración por entorno se manejará mediante variables de entorno.
9. La auditoría se considerará parte transversal del sistema.

## 14. Criterios de aceptación de la fase

La fase se considera definida cuando:

- La arquitectura por capas está documentada.
- Las tecnologías principales están definidas.
- Los módulos del backend están identificados.
- Los contratos iniciales de API están identificados.
- La estructura de frontend/backend/database está definida.
- La estrategia de configuración y variables de entorno está documentada.
- Las responsabilidades de cada capa están separadas.
- Las entidades iniciales del modelo de datos están identificadas.

## 15. Dependencias con las siguientes fases

| Fase | Relación |
|---|---|
| Fase 03 | Utiliza la arquitectura para definir la UX/UI. |
| Fase 04 | Implementa el modelo PostgreSQL definido conceptualmente aquí. |
| Fase 05 | Implementa la API FastAPI y sus contratos. |
| Fase 06 | Implementa el frontend React y su integración con la API. |
| Fase 09 | Implementa el motor estadístico definido como componente arquitectónico. |
| Fase 10 | Consume los resultados analíticos para Analytics. |
