import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

interface SelectContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  onChange: (value: string) => void;
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children?: React.ReactNode;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ children, value, defaultValue, onValueChange, className }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(
      value || defaultValue || ""
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    const handleValueChange = React.useCallback(
      (newValue: string) => {
        if (value === undefined) {
          setSelectedValue(newValue);
        }
        onValueChange?.(newValue);
        setIsOpen(false);
      },
      [value, onValueChange]
    );

    return (
      <SelectContext.Provider
        value={{
          open: isOpen,
          setOpen: setIsOpen,
          value: selectedValue,
          onChange: handleValueChange,
        }}
      >
        <div ref={ref} className={className}>
          {children}
        </div>
      </SelectContext.Provider>
    );
  }
);
Select.displayName = "Select";

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used within Select");

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => context.setOpen(!context.open)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectContent must be used within Select");
  if (!context.open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
});
SelectContent.displayName = "SelectContent";

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error("SelectItem must be used within Select");

    const isSelected = context.value === value;

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
          isSelected && "bg-accent text-accent-foreground",
          className
        )}
        onClick={() => context.onChange(value)}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected && <Check className="h-4 w-4" />}
        </span>
        {children}
      </div>
    );
  }
);
SelectItem.displayName = "SelectItem";

const SelectGroup = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-1", className)} {...props}>
    {children}
  </div>
);
SelectGroup.displayName = "SelectGroup";

const SelectLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = "SelectLabel";

const SelectSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = "SelectSeparator";

// Compatibility exports
const SelectValue = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  return (
    <span ref={ref} {...props}>
      {children || context?.value}
    </span>
  );
});
SelectValue.displayName = "SelectValue";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
