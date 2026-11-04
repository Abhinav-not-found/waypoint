# Frontend File Conventions

- All folders names will be in lower-case.
  ex: hooks/, components/, etc

- Pages will have "page" in their file name and component name.
  ex: <HomePage>, <LandingPage>, etc
  ex: const LoginPage = () => {}

- Sections will have "section" in their filename and component name.
  ex: <HeroSection>, <PricingSection>, etc
  ex: const HeroSection = () => {}

- Reusable components will be in Kabab-case.(Inside shared/components folder)
  ex: mode-toggle.tsx, theme-provider.tsx

- Hooks name will be like this: 'use'<Name>.hook.ts
  ex: useAuth.hook.ts, useLogin.hook.ts, etc

# How to make Components

- HomePage/ \*anyPage : Only UI related things will be there, no logic; all logic will be fetched from hooks.
- useHome.hook.ts : all the logic will be stored/declared here.

- auth.store.ts : all the logics related to Zustand of for the corresponding feature/component will be here.

- auth.types.ts : all the typescript custom or defined types will be here.
