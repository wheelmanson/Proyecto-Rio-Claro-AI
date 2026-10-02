# Asistente Inteligente Río Claro

## Descripción

Asistente virtual desarrollado para Distribuidora Río Claro utilizando Microsoft AI Foundry y Node.js.

La solución permite consultar información relacionada con procesos operativos y administrativos mediante lenguaje natural, centralizando el acceso al conocimiento organizacional.

El sistema responde preguntas utilizando un agente de inteligencia artificial conectado a una base de conocimiento empresarial.

---

# Objetivo

Desarrollar una aplicación web capaz de proporcionar respuestas sobre procedimientos internos de la organización mediante un agente de inteligencia artificial implementado en Microsoft AI Foundry.

---

# Problema Identificado

Distribuidora Río Claro requiere acceso rápido y centralizado a información relacionada con:

- Facturación
- Inventario
- Compras
- Proveedores
- Devoluciones
- Atención a clientes

La dispersión de la información puede ocasionar retrasos en la consulta de procedimientos y generar errores operativos.

---

# Solución Implementada

Se desarrolló un chatbot empresarial denominado:

**Asistente Inteligente Río Claro**

La aplicación permite a los usuarios realizar consultas mediante una interfaz web y recibir respuestas basadas en la documentación de la empresa.

---

# Arquitectura de la Solución

```text
Usuario
   │
   ▼
Aplicación Web (Node.js + Express)
   │
   ▼
Microsoft AI Foundry
   │
   ▼
Agente: Asistente Inteligente Río Claro
   │
   ▼
Base de Conocimiento Empresarial
```

---

# Tecnologías Utilizadas

## Backend

- Node.js
- Express

## Frontend

- HTML5
- CSS3
- JavaScript

## Inteligencia Artificial

- Microsoft AI Foundry
- GPT-5 Mini
- Foundry Knowledge Base

## Control de Versiones

- Git
- GitHub

---

# Base de Conocimiento

El agente consulta información almacenada en los siguientes documentos:

- Facturación Río Claro
- Inventario Río Claro
- Compras Río Claro
- Proveedores Río Claro
- Devoluciones Río Claro
- Atención a Clientes Río Claro

---

# Funcionalidades

## Consultas sobre Facturación

Permite consultar procesos relacionados con:

- Registro de facturas
- Validación documental
- Errores comunes
- Procedimientos administrativos

---

## Consultas sobre Inventario

Permite obtener información relacionada con:

- Entradas de mercancía
- Salidas de mercancía
- Control de existencias
- Políticas de inventario

---

## Gestión de Compras

Permite consultar:

- Proceso de compras
- Autorizaciones
- Recepción de mercancía
- Órdenes de compra

---

## Gestión de Proveedores

Permite consultar:

- Alta de proveedores
- Requisitos necesarios
- Evaluación de proveedores

---

## Devoluciones

Permite conocer:

- Políticas de devolución
- Requisitos
- Autorizaciones

---

## Atención a Clientes

Permite consultar:

- Registro de incidencias
- Seguimiento de solicitudes
- Tiempos de respuesta

---

# Casos de Uso

### Caso 1

**Pregunta**

```text
¿Cómo se registra una factura?
```

**Resultado**

El agente proporciona el procedimiento correspondiente utilizando la documentación de facturación.

---

### Caso 2

**Pregunta**

```text
¿Cuál es la política de devoluciones?
```

**Resultado**

El agente responde utilizando el documento de devoluciones.

---

### Caso 3

**Pregunta**

```text
¿Qué requisitos se necesitan para registrar un proveedor?
```

**Resultado**

El agente recupera los requisitos desde la documentación de proveedores.

---

# Evidencias

## Evidencia 1

Configuración del agente en Microsoft AI Foundry.

## Evidencia 2

Configuración de instrucciones del agente.

## Evidencia 3

Creación de la base de conocimiento.

## Evidencia 4

Carga de documentos empresariales.

## Evidencia 5

Consulta sobre facturación.

## Evidencia 6

Consulta sobre inventario.

## Evidencia 7

Consulta sobre proveedores.

## Evidencia 8

Consulta sobre devoluciones.

## Evidencia 9

Consulta sobre atención a clientes.

## Evidencia 10

Funcionamiento de la aplicación web.

---

# Instalación

## Clonar repositorio

```bash
git clone <URL_REPOSITORIO>
```

## Instalar dependencias

```bash
npm install
```

## Configurar variables de entorno

Crear archivo `.env`

```env
FOUNDRY_PROJECT_ENDPOINT=<ENDPOINT_DEL_PROYECTO>
FOUNDRY_AGENT_NAME=Asistente-Inteligente-Rio-Claro
FOUNDRY_MODEL_DEPLOYMENT=gpt-5-mini
```

## Ejecutar aplicación

```bash
npm run dev
```

## Acceso

```text
http://localhost:3000
```

---

# Resultados

La aplicación permite realizar consultas en lenguaje natural utilizando una base de conocimiento empresarial centralizada.

El agente proporciona respuestas contextualizadas y mantiene el contexto de la conversación entre interacciones.

---

# Conclusiones

La implementación de un agente basado en Microsoft AI Foundry permitió centralizar el conocimiento organizacional de Distribuidora Río Claro y facilitar el acceso a información operativa mediante inteligencia artificial.

La solución demuestra el potencial de los agentes de IA para optimizar procesos internos y mejorar la disponibilidad de información en entornos empresariales.

---

# Autor

Proyecto académico desarrollado para la implementación de agentes inteligentes utilizando Microsoft AI Foundry.