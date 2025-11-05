import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

interface AccordionContextValue {
  activeItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null
);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

const Accordion = React.memo(
  React.forwardRef<HTMLDivElement, AccordionProps>(
    (
      {
        className,
        type = "single",
        defaultValue = [],
        value,
        onValueChange,
        children,
        ...props
      },
      ref
    ) => {
      const [activeItems, setActiveItems] = React.useState<string[]>(
        value || defaultValue
      );

      React.useEffect(() => {
        if (value !== undefined) {
          setActiveItems(value);
        }
      }, [value]);

      const toggleItem = React.useCallback(
        (itemValue: string) => {
          const newValue = activeItems.includes(itemValue)
            ? activeItems.filter((v) => v !== itemValue)
            : type === "single"
            ? [itemValue]
            : [...activeItems, itemValue];

          if (value === undefined) {
            setActiveItems(newValue);
          }

          onValueChange?.(newValue);
        },
        [activeItems, onValueChange, type, value]
      );

      const contextValue = React.useMemo(
        () => ({ activeItems, toggleItem }),
        [activeItems, toggleItem]
      );

      return (
        <AccordionContext.Provider value={contextValue}>
          <div
            ref={ref}
            className={cn("space-y-1", className)}
            {...props}
            role="region"
            aria-label="Accordion"
          >
            {children}
          </div>
        </AccordionContext.Provider>
      );
    }
  )
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.memo(
  React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ className, value, children, ...props }, ref) => {
      const context = React.useContext(AccordionContext);
      if (!context)
        throw new Error("AccordionItem must be used within Accordion");

      const isActive = context.activeItems.includes(value);

      return (
        <div
          ref={ref}
          data-state={isActive ? "open" : "closed"}
          className={cn("border-b", className)}
          role="presentation"
          {...props}
        >
          {children}
        </div>
      );
    }
  )
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const AccordionTrigger = React.memo(
  React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ className, children, value, ...props }, ref) => {
      const context = React.useContext(AccordionContext);
      if (!context)
        throw new Error("AccordionTrigger must be used within Accordion");

      const isActive = context.activeItems.includes(value);
      const handleClick = React.useCallback(() => {
        context.toggleItem(value);
      }, [context, value]);

      return (
        <button
          ref={ref}
          type="button"
          onClick={handleClick}
          data-state={isActive ? "open" : "closed"}
          className={cn(
            "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            className
          )}
          aria-expanded={isActive}
          role="button"
          {...props}
        >
          {children}
          <ChevronDown
            className="h-4 w-4 shrink-0 transition-transform duration-200"
            aria-hidden="true"
          />
        </button>
      );
    }
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, value, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within Accordion");
  }

  const isActive = value ? context.activeItems.includes(value) : false;

  return (
    <div
      ref={ref}
      data-state={isActive ? "open" : "closed"}
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
