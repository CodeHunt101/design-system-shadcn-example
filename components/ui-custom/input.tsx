import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Input as ShadcnInput } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-md",
        filled: "bg-muted border-transparent focus-visible:bg-background",
        flushed: "rounded-none border-0 border-b px-0 focus-visible:border-b-2 focus-visible:ring-0",
        outline: "border-2",
      },
      size: {
        sm: "h-8 text-xs px-2",
        md: "h-10 text-sm px-3",
        lg: "h-12 text-base px-4",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      state: {
        default: "",
        error: "border-red-500 focus-visible:ring-red-500",
        success: "border-green-500 focus-visible:ring-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      state: "default",
    },
  },
)

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
}

const InputWrapper = ({
  children,
  leftElement,
  rightElement,
  className,
}: {
  children: React.ReactNode
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  className?: string
}) => {
  if (!leftElement && !rightElement) return children

  return (
    <div className={cn("relative flex items-center", className)}>
      {leftElement && (
        <div className="absolute left-3 flex h-full items-center text-muted-foreground">{leftElement}</div>
      )}
      {children}
      {rightElement && (
        <div className="absolute right-3 flex h-full items-center text-muted-foreground">{rightElement}</div>
      )}
    </div>
  )
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, rounded, state, leftElement, rightElement, ...props }, ref) => {
    const paddingLeft = leftElement ? "pl-10" : ""
    const paddingRight = rightElement ? "pr-10" : ""

    return (
      <InputWrapper leftElement={leftElement} rightElement={rightElement}>
        <ShadcnInput
          className={cn(inputVariants({ variant, size, rounded, state }), paddingLeft, paddingRight, className)}
          ref={ref}
          {...props}
        />
      </InputWrapper>
    )
  },
)

Input.displayName = "Input"

export { Input, inputVariants }
