# FASE 01 — Análisis y requisitos

## 1. Objetivo de la fase

Definir con precisión qué problema resolverá SalesIA Enterprise, quiénes utilizarán el sistema, qué procesos cubrirá y qué condiciones deberán cumplirse para considerar terminada la solución.

El proyecto plantea un sistema empresarial para gestionar operaciones de ventas y convertir los datos generados por dichas operaciones en información analítica mediante estadística y probabilidad.

## 2. Problema identificado

Las operaciones de clientes, productos, ventas, pagos e inventario generan datos que deben ser almacenados y posteriormente analizados. SalesIA Enterprise propone centralizar estas operaciones y utilizar los datos registrados para obtener indicadores, análisis estadísticos, probabilidades, visualizaciones e insights de negocio.

## 3. Justificación

La solución integra en un mismo sistema:

- Gestión de clientes.
- Gestión de productos y categorías.
- Gestión de vendedores.
- Registro de ventas y detalle de ventas.
- Pagos.
- Inventario y movimientos de inventario.
- Análisis estadístico.
- Probabilidad y teorema de Bayes.
- Variables y variables aleatorias.
- Dashboards, gráficos, reportes e insights.
- Seguridad, roles y auditoría.

La propuesta se relaciona con los contenidos de la Semana 07 de Fundamentos y Algoritmia para Inteligencia Artificial: variables estadísticas, media, mediana, teorema de Bayes y variables aleatorias.

## 4. Objetivo general

Diseñar y desarrollar una plataforma empresarial que gestione el ciclo de ventas y permita transformar los datos operativos en información estadística y probabilística útil para el análisis del negocio.

## 5. Alcance

### Incluido

- Autenticación y autorización por roles.
- Usuarios y roles.
- Clientes.
- Productos y categorías.
- Vendedores.
- Ventas y detalle de ventas.
- Pagos.
- Inventario y movimientos.
- Dashboard de indicadores.
- Datasets analíticos.
- Media y mediana.
- Comparación estadística.
- Variables y variables aleatorias.
- Probabilidades.
- Teorema de Bayes.
- Gráficos.
- Generación de insights.
- Reportes.
- Historial y auditoría.

### Fuera del alcance definido en esta fase

El documento base no especifica integraciones concretas con servicios externos, proveedores de pago externos, despliegue en un proveedor cloud determinado ni reglas comerciales específicas de una empresa real. Esos puntos deberán definirse si se requieren posteriormente.

## 6. Actores del sistema

| Actor | Responsabilidad definida |
|---|---|
| Administrador | Gestionar sistema, usuarios, roles y parámetros. |
| Gerente | Consultar indicadores, Analytics, reportes y resultados comerciales. |
| Vendedor | Gestionar clientes, registrar pedidos y realizar ventas autorizadas. |
| Analista | Ejecutar análisis estadísticos, generar insights y reportes. |
| Almacén | Gestionar stock y movimientos de inventario. |

## 7. Flujo principal del negocio

```text
CLIENTE
   ↓
PEDIDO
   ↓
VENTA
   ↓
PAGO
   ↓
ACTUALIZACIÓN DE INVENTARIO
   ↓
POSTGRESQL
   ↓
DATASET ANALÍTICO
   ↓
MEDIA / MEDIANA / VARIABLES / PROBABILIDAD / BAYES
   ↓
GRÁFICOS
   ↓
INSIGHTS
   ↓
DASHBOARD / REPORTES
```

## 8. Casos de uso principales

### CU-01 — Autenticarse
El usuario proporciona sus credenciales y el sistema valida su acceso y determina los permisos correspondientes a su rol.

### CU-02 — Gestionar clientes
Permite registrar, consultar y administrar información de clientes.

### CU-03 — Gestionar productos
Permite administrar productos y categorías.

### CU-04 — Registrar venta
El vendedor autorizado registra una venta con su detalle. La operación debe producir la actualización correspondiente del inventario.

### CU-05 — Registrar pago
El sistema registra el pago asociado a una venta mediante el método correspondiente.

### CU-06 — Gestionar inventario
El personal autorizado consulta existencias y movimientos de inventario.

### CU-07 — Analizar datos
El usuario autorizado selecciona datos/datasets y ejecuta operaciones estadísticas y probabilísticas.

### CU-08 — Consultar Analytics
El sistema presenta indicadores y gráficos derivados de los datos registrados.

### CU-09 — Generar insights
El sistema transforma resultados analíticos en información interpretable para el negocio.

### CU-10 — Generar reportes
El usuario autorizado consulta o genera reportes del sistema.

### CU-11 — Auditar operaciones
El sistema conserva trazabilidad de las operaciones relevantes mediante registros de auditoría.

## 9. Reglas de negocio iniciales

Estas reglas se derivan del flujo y criterios definidos en el plan; las reglas comerciales específicas deberán parametrizarse cuando el proyecto las defina.

1. Una operación de venta debe estar asociada a los datos necesarios de la venta y su detalle.
2. Una venta confirmada debe reflejarse en el inventario correspondiente.
3. Los análisis estadísticos deben utilizar datos registrados en el sistema o datasets definidos para análisis.
4. Los resultados de media y mediana deben ser reproducibles a partir de los datos de entrada.
5. El acceso a operaciones debe respetar los roles y permisos definidos.
6. Las operaciones relevantes deben mantener trazabilidad mediante auditoría.
7. Los datos persistidos deben respetar las restricciones de integridad de PostgreSQL.

## 10. Requisitos funcionales

| ID | Requisito |
|---|---|
| RF-01 | Autenticación y gestión de roles. |
| RF-02 | Gestión de usuarios. |
| RF-03 | Gestión de clientes. |
| RF-04 | Gestión de productos y categorías. |
| RF-05 | Gestión de vendedores. |
| RF-06 | Gestión de ventas y detalle de ventas. |
| RF-07 | Gestión de pagos. |
| RF-08 | Gestión de inventario. |
| RF-09 | Dashboard de indicadores. |
| RF-10 | Gestión de datasets analíticos. |
| RF-11 | Cálculo de media. |
| RF-12 | Cálculo de mediana. |
| RF-13 | Comparación estadística. |
| RF-14 | Análisis de variables. |
| RF-15 | Análisis de variables aleatorias. |
| RF-16 | Cálculo/análisis de probabilidades. |
| RF-17 | Análisis mediante teorema de Bayes. |
| RF-18 | Visualización mediante gráficos. |
| RF-19 | Generación de insights. |
| RF-20 | Generación/consulta de reportes. |
| RF-21 | Historial de análisis. |
| RF-22 | Auditoría de operaciones. |

## 11. Requisitos no funcionales

| ID | Requisito |
|---|---|
| RNF-01 | Arquitectura modular. |
| RNF-02 | Validación en frontend y backend. |
| RNF-03 | Integridad de datos mediante PostgreSQL. |
| RNF-04 | Autenticación y autorización seguras. |
| RNF-05 | API documentada. |
| RNF-06 | Diseño responsive. |
| RNF-07 | Trazabilidad de operaciones. |
| RNF-08 | Separación de responsabilidades. |
| RNF-09 | Pruebas automatizadas y de integración según el plan. |
| RNF-10 | Variables de entorno para configuración sensible. |
| RNF-11 | Manejo centralizado de errores. |
| RNF-12 | Rendimiento adecuado para el procesamiento analítico. |

## 12. Criterios de aceptación de la fase

La fase se considera definida cuando:

- Los actores y responsabilidades están identificados.
- El flujo principal del negocio está documentado.
- Los requisitos funcionales RF-01 a RF-22 están identificados.
- Los requisitos no funcionales RNF-01 a RNF-12 están identificados.
- Los casos de uso principales están documentados.
- Las reglas de negocio iniciales están documentadas.
- Los criterios de aceptación del sistema permiten comprobar autenticación, ventas, actualización de inventario, Analytics y análisis estadístico/probabilístico.

## 13. Trazabilidad con el plan

Este documento operacionaliza la Fase 01 del Plan de Desarrollo de SalesIA Enterprise: análisis del problema, alcance, actores, flujo de negocio, casos de uso, reglas, requisitos y criterios de aceptación.
