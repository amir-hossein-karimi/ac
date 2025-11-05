import * as React from "react";
import { cn } from "@/utils/cn";

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

const sizeMap: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, children, size = "md", ...props }, ref) => {
    const classes = cn(
      "relative flex shrink-0 overflow-hidden rounded-full",
      sizeMap[size],
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className="aspect-square h-full w-full object-cover"
          />
        ) : (
          // allow consumers to pass a fallback as child
          children ?? (
            <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-600">
              ?
            </div>
          )
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
