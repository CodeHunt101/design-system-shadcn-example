"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

// Navigation Menu
const navMenuVariants = cva("flex gap-1 items-center", {
  variants: {
    variant: {
      horizontal: "flex-row",
      vertical: "flex-col items-start",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    spacing: {
      tight: "gap-2",
      normal: "gap-4",
      loose: "gap-6",
    },
  },
  defaultVariants: {
    variant: "horizontal",
    size: "md",
    spacing: "normal",
  },
})

export interface NavMenuProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof navMenuVariants> {
  items: {
    label: string
    href: string
    active?: boolean
    icon?: React.ReactNode
  }[]
}

export const NavMenu = React.forwardRef<HTMLElement, NavMenuProps>(
  ({ className, variant, size, spacing, items, ...props }, ref) => {
    return (
      <nav ref={ref} className={cn(navMenuVariants({ variant, size, spacing }), className)} {...props}>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex items-center gap-2 transition-colors hover:text-primary",
              item.active ? "font-medium text-primary" : "text-muted-foreground",
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    )
  },
)

NavMenu.displayName = "NavMenu"

// Breadcrumb
const breadcrumbVariants = cva("flex items-center", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    separator: {
      slash: "divide-x",
      chevron: "gap-1",
      dot: "gap-1",
    },
  },
  defaultVariants: {
    size: "md",
    separator: "chevron",
  },
})

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof breadcrumbVariants> {
  items: {
    label: string
    href?: string
    active?: boolean
  }[]
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, size, separator, items, ...props }, ref) => {
    const getSeparator = () => {
      switch (separator) {
        case "slash":
          return <span className="px-2">/</span>
        case "dot":
          return <span className="px-2">•</span>
        case "chevron":
        default:
          return <ChevronRight className="h-4 w-4 text-muted-foreground" />
      }
    }

    return (
      <nav
        ref={ref}
        className={cn(breadcrumbVariants({ size, separator }), className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center gap-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && getSeparator()}
              {item.href && !item.active ? (
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-primary",
                    item.active ? "font-medium text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={cn(item.active ? "font-medium text-foreground" : "text-muted-foreground")}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  },
)

Breadcrumb.displayName = "Breadcrumb"

// Tabs Navigation
const tabsVariants = cva("flex", {
  variants: {
    variant: {
      default: "border-b",
      pills: "gap-2",
      underline: "border-b",
      enclosed: "border rounded-lg p-1 bg-muted",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

const tabItemVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground",
        pills:
          "rounded-md px-3 py-1.5 hover:bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground",
        underline:
          "border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground",
        enclosed: "rounded-md px-3 py-1.5 hover:bg-background data-[active=true]:bg-background",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tabsVariants> {
  items: {
    label: string
    value: string
    icon?: React.ReactNode
  }[]
  value: string
  onValueChange: (value: string) => void
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, variant, size, items, value, onValueChange, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(tabsVariants({ variant, size }), className)} {...props}>
        {items.map((item) => (
          <button
            key={item.value}
            className={cn(tabItemVariants({ variant, size }), "flex items-center gap-2")}
            data-active={value === item.value}
            onClick={() => onValueChange(item.value)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    )
  },
)

Tabs.displayName = "Tabs"
