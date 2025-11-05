# BluePro - Feature-Based Architecture

This project has been restructured using a **core and feature** architecture pattern for better scalability and maintainability.

## Project Structure

```
├── App.tsx                      # Main application entry point
├── core/                        # Shared code across features
│   ├── components/             # Shared components
│   │   ├── Navigation.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   ├── layouts/                # Layout components
│   │   └── PrivateRoute.tsx
│   ├── store/                  # Redux store configuration
│   │   └── store.ts
│   └── ui/                     # ShadCN UI components
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── avatar.tsx
│       ├── button.tsx
│       └── ... (all shadcn components)
│
├── features/                    # Feature-specific code
│   ├── auth/                   # Authentication feature
│   │   ├── components/
│   │   │   └── LoginPage.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   └── store/
│   │       └── authSlice.ts
│   │
│   ├── home/                   # Home page feature
│   │   └── components/
│   │       └── HomePage.tsx
│   │
│   ├── services/               # Services page feature
│   │   └── components/
│   │       └── ServicesPage.tsx
│   │
│   └── profile/                # Profile page feature
│       └── components/
│           └── ProfilePage.tsx
│
└── styles/                      # Global styles
    └── globals.css
```

## Architecture Benefits

### 1. **Separation of Concerns**
- **Core**: Contains shared utilities, components, and configurations used across multiple features
- **Features**: Each feature is self-contained with its own components, hooks, and state management

### 2. **Scalability**
- Easy to add new features without affecting existing ones
- Clear boundaries between different parts of the application

### 3. **Maintainability**
- Related code is grouped together
- Easier to locate and modify feature-specific code
- Reduced coupling between features

### 4. **Team Collaboration**
- Different team members can work on different features independently
- Clear ownership and responsibility for each feature

## Import Patterns

### Core Imports
```tsx
// UI Components
 import { Button } from '@/core/components/ui/button';
 import { Card } from '@/core/components/ui/card';

// Shared Components
 import { Navigation } from '@/core/components/Navigation';
 import { ImageWithFallback } from '@/core/components/figma/ImageWithFallback';

// Store
 import { store } from '@/core/store/store';
```

### Feature Imports
```tsx
// From auth feature
 import { useAppSelector } from '@/features/auth/hooks/useAuth';
 import { login, logout } from '@/features/auth/store/authSlice';

// Feature components
 import { HomePage } from '@/features/home/components/HomePage';
 import { ProfilePage } from '@/features/profile/components/ProfilePage';
```

## Key Features

### Authentication System
- Redux-based state management
- Custom localStorage persistence
- Protected routes
- Mock authentication for demo

### Pages
1. **Home** - Landing page with features, testimonials, and CTAs
2. **Services** - Service offerings, pricing plans, and FAQs
3. **Profile** - User profile with settings, notifications, security, and billing

### UI Components
- Full set of shadcn/ui components
- Consistent blue-based design system
- Responsive navigation with mobile menu
- Toast notifications

## Development

The application uses:
- React with TypeScript
- Tailwind CSS for styling
- Redux Toolkit for state management
- React Router for navigation
- shadcn/ui for UI components
- Lucide React for icons
