## Custom Design System

A Next.js 15 app showcasing a design system built around [shadcn/ui](https://ui.shadcn.com/) and Tailwind CSS, with a collection of fully themed, highly configurable components and utilities.

### 🚀 Features

- **Theming** via CSS variables & [next-themes](https://github.com/pacocoursey/next-themes)  
- Base components from **shadcn/ui** extended with **CVA** and **clsx + tw‑merge**  
- A set of **ui‑custom** components (Button, Badge, Input, Card, Navigation, etc.)  
- Utility hooks (e.g. `useIsMobile`, `useToast`)  
- Tailwind CSS v3 configuration with CSS variables for light/dark mode  

---

## 📦 Prerequisites

- Node.js ≥ 16  
- pnpm / npm / yarn  
- Git  

---

## 🛠️ Installation

1. Clone the repo  
   ```bash
   git clone git@github.com:your‑org/shadcn‑design‑system.git
   cd shadcn
   ```
2. Install dependencies  
   ```bash
   pnpm install
   # or npm install
   ```
3. Run dev server  
   ```bash
   pnpm dev
   # visits http://localhost:3000
   ```

---

## 📂 Project Structure

```
/
├── app/                # Next.js App Router
│   ├── globals.css     # Tailwind base, CSS variable definitions
│   ├── layout.tsx      # RootLayout + ThemeProvider
│   ├── page.tsx        # Demo playground
│   └── loading.tsx     # Optional loading UI
├── components/
│   ├── theme-provider.tsx
│   └── ui/             # shadcn/ui primitives
├── components/ui-custom/
│   ├── button.tsx
│   ├── badge.tsx
│   ├── input.tsx
│   ├── card.tsx
│   └── navigation.tsx
├── lib/
│   └── utils.ts        # `cn()` helper (clsx + tw‑merge)
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.tsx
├── public/             # Static assets & placeholders
├── styles/
│   └── globals.css     # alternate global styles, if used
├── tailwind.config.ts  # Tailwind configuration
└── components.json     # shadcn CLI config
```

---

## 🧰 Scripts

| Script     | Description                |
| :--------- | :------------------------- |
| `dev`      | Start Next.js in development |
| `build`    | Build for production        |
| `start`    | Run production build        |
| `lint`     | Run ESLint                  |

---

## 🎨 Theming & CSS Variables

All colors, radii, borders, charts, etc. are defined as CSS custom properties in `app/globals.css` (and mirrored in `styles/globals.css`). Tailwind’s `theme.extend.colors` reads from these variables, so toggling `.dark` class switches modes automatically.

---

## ✨ Creating Custom Components

To add a new component on top of shadcn/ui:

1. **Choose a primitive**  
   Look under `components/ui/` for the base Radix‑powered component—for instance, `@/components/ui/button`.

2. **Create your wrapper**  
   In `components/ui-custom/`, create a file, e.g. `my-component.tsx`.  
   ```tsx
   import React from "react"
   import { cva, type VariantProps } from "class-variance-authority"
   import { MyPrimitive as ShadcnMyPrimitive } from "@/components/ui/my-primitive"
   import { cn } from "@/lib/utils"

   const myPrimitiveVariants = cva("base-styles", {
     variants: {
       variant: { default: "bg-primary text-primary-foreground", ... },
       size: { sm: "p-2", md: "p-4", lg: "p-6" },
     },
     defaultVariants: { variant: "default", size: "md" },
   })

   export interface MyComponentProps
     extends React.HTMLAttributes<HTMLDivElement>,
       VariantProps<typeof myPrimitiveVariants> {
     icon?: React.ReactNode
   }

   const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
     ({ className, variant, size, icon, children, ...props }, ref) => {
       return (
         <ShadcnMyPrimitive
           ref={ref}
           className={cn(myPrimitiveVariants({ variant, size }), className)}
           {...props}
         >
           {icon}
           {children}
         </ShadcnMyPrimitive>
       )
     }
   )

   MyComponent.displayName = "MyComponent"
   export { MyComponent }
   ```

3. **Register in components.json**  
   If you’re using the shadcn CLI to scaffold, update `components.json` so it knows where new files live.

4. **Use in your pages**  
   ```tsx
   import { MyComponent } from "@/components/ui-custom/my-component"

   function Demo() {
     return <MyComponent variant="outline" size="lg" icon={<SomeIcon />} />
   }
   ```

5. **Document your API**  
   Update your README or Storybook with prop tables, variant lists, and example usages.

---

## 🔧 Utilities & Hooks

- **`cn(...inputs)`**: merge and dedupe Tailwind classes  
- **`useIsMobile()`**: track mobile breakpoint  
- **`useToast()`**: lightweight toast system  
