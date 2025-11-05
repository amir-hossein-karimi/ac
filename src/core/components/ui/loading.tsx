import * as React from "react";
import { cn } from "@/utils/cn";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4 border-2",
      md: "h-6 w-6 border-2",
      lg: "h-8 w-8 border-3",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin rounded-full border-primary border-t-transparent",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);
Spinner.displayName = "Spinner";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rectangular" | "circular";
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "text", ...props }, ref) => {
    const variantClasses = {
      text: "h-4 w-full",
      rectangular: "h-full w-full",
      circular: "rounded-full",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse bg-muted/50",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Spinner.displayName = "Skeleton";
