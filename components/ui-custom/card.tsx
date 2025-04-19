import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const cardVariants = cva("rounded-lg border bg-card text-card-foreground shadow-sm", {
  variants: {
    variant: {
      default: "",
      outline: "border-2",
      filled: "bg-muted",
      elevated: "shadow-lg",
      ghost: "border-0 bg-transparent shadow-none",
    },
    size: {
      sm: "p-3",
      md: "p-5",
      lg: "p-7",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    interactive: {
      true: "transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    rounded: "lg",
    interactive: false,
  },
})

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, rounded, interactive, ...props }, ref) => (
    <ShadcnCard ref={ref} className={cn(cardVariants({ variant, size, rounded, interactive }), className)} {...props} />
  ),
)
Card.displayName = "Card"

// Export the shadcn/ui card subcomponents
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

// Create custom card layouts
export const SimpleCard = ({
  title,
  description,
  children,
  footer,
  className,
  ...props
}: CardProps & {
  title?: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
}) => {
  return (
    <Card className={className} {...props}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}

export const HorizontalCard = ({
  title,
  description,
  media,
  children,
  footer,
  className,
  ...props
}: CardProps & {
  title?: React.ReactNode
  description?: React.ReactNode
  media?: React.ReactNode
  footer?: React.ReactNode
}) => {
  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <div className="flex flex-col md:flex-row">
        {media && <div className="md:w-1/3 flex-shrink-0">{media}</div>}
        <div className={cn("flex flex-col", media ? "md:w-2/3" : "w-full")}>
          {(title || description) && (
            <CardHeader>
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          )}
          <CardContent>{children}</CardContent>
          {footer && <CardFooter>{footer}</CardFooter>}
        </div>
      </div>
    </Card>
  )
}
