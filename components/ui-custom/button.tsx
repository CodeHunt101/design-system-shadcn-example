import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

// Extended button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-green-600 text-white hover:bg-green-700",
        warning: "bg-amber-500 text-white hover:bg-amber-600",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        xs: "h-7 rounded-md px-2 text-xs",
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-10 rounded-md px-4 py-2 text-sm",
        lg: "h-12 rounded-md px-6 py-3 text-base",
        xl: "h-14 rounded-md px-8 py-4 text-lg",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      withIcon: {
        true: "gap-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
      withIcon: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, withIcon, isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
    // Automatically set withIcon to true if icons are provided
    const hasIcon = Boolean(leftIcon || rightIcon || isLoading)

    return (
      <ShadcnButton
        className={cn(
          buttonVariants({
            variant,
            size,
            rounded,
            withIcon: hasIcon,
            className,
          }),
        )}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon}
        {children}
        {rightIcon}
      </ShadcnButton>
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants }
