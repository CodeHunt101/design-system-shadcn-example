import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Badge as ShadcnBadge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
        success: "border-transparent bg-green-500 text-white",
        warning: "border-transparent bg-amber-500 text-white",
        danger: "border-transparent bg-red-500 text-white",
        info: "border-transparent bg-blue-500 text-white",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      rounded: {
        default: "rounded-full",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      withIcon: {
        true: "gap-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "default",
      withIcon: false,
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, rounded, withIcon, leftIcon, rightIcon, children, ...props }, _ref) => {
    // Automatically set withIcon to true if icons are provided
    const hasIcon = Boolean(leftIcon || rightIcon)

    return (
      <ShadcnBadge
        // ref={ref}
        className={cn(badgeVariants({ variant, size, rounded, withIcon: hasIcon }), className)}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </ShadcnBadge>
    )
  },
)

Badge.displayName = "Badge"

export { Badge, badgeVariants }
