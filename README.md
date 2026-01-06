# Clean Architecture Counter

Este proyecto demuestra cómo aplicar los principios de Clean Architecture en una aplicación frontend. Aunque es un ejemplo simple (un contador), la estructura está diseñada para escalar y mantener la separación de responsabilidades.

## Arquitectura

El proyecto sigue los principios de Clean Architecture, organizando el código en capas bien definidas:

```
src/
├── domain/           # Capa de Dominio (Entidades y Reglas de Negocio)
│   └── counter/
│       ├── counter.entity.ts      # Entidad Counter
│       ├── counter.model.ts       # Modelo de datos
│       └── counter.repository.ts  # Interfaz del repositorio
│
├── aplication/       # Capa de Aplicación (Casos de Uso)
│   └── counter/
│       └── update-counter.usecase.ts  # Caso de uso: Incrementar contador
│
├── infraestructure/  # Capa de Infraestructura (Implementaciones)
│   └── counter/
│       ├── counter.adapter.ts     # Adaptador de datos
│       └── counter.store.ts       # Store con patrón Observer
│
└── ui/              # Capa de Presentación (React UI)
    ├── src/
    │   ├── app/
    │   │   ├── App.tsx           # Componente principal
    │   │   └── router.tsx        # Configuración de rutas
    │   ├── components/
    │   │   └── CounterView.tsx   # Vista del contador
    │   ├── hooks/
    │   │   └── useCounter.ts     # Hook personalizado
    │   └── pages/
    │       └── CounterPage.tsx   # Página del contador
    └── package.json
```

### Capas de la Arquitectura

#### 1. **Domain** (Dominio)
- Contiene las entidades y reglas de negocio fundamentales
- No tiene dependencias de otras capas
- Define interfaces (contratos) que otras capas deben implementar

#### 2. **Application** (Aplicación)
- Contiene los casos de uso de la aplicación
- Orquesta el flujo de datos entre capas
- Depende solo de la capa de dominio

#### 3. **Infrastructure** (Infraestructura)
- Implementa las interfaces definidas en el dominio
- Maneja el estado y la persistencia
- Implementa el patrón Observer para notificaciones de cambios

#### 4. **UI** (Interfaz de Usuario)
- Capa de presentación con React
- Consume los casos de uso a través de hooks
- No contiene lógica de negocio

## 🚀 Tecnologías

- **React 19.2.0** - Biblioteca de UI
- **TypeScript 5.9.3** - Tipado estático
- **Vite 7.2.4** - Build tool y dev server
- **React Router DOM 7.11.0** - Enrutamiento
- **ESLint** - Linting
- **Lodash.debounce** - Utilidades

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd clean-architecture-counter
   ```

2. **Instalar dependencias de la UI**
   ```bash
   cd src/ui
   npm install
   ```

## 🎯 Uso

### Modo Desarrollo

```bash
cd src/ui
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build de Producción

```bash
cd src/ui
npm run build
```

Los archivos compilados se generarán en `src/ui/dist/`

### Preview de Producción

```bash
cd src/ui
npm run preview
```

### Linting

```bash
cd src/ui
npm run lint
```

