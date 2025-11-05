import * as React from "react";
import { cn } from "@/utils/cn";

const DropdownMenuContext = React.createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
} | null>(null);

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </DropdownMenuContext.Provider>
  );
};

const DropdownMenuTrigger = ({ children, asChild, className }: any) => {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx) return null;
  const { open, setOpen } = ctx;

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  React.useEffect(() => {
    const onDoc = () => setOpen(false);
    if (open) document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [open, setOpen]);

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      onClick: toggle,
      className: cn(child.props?.className, className),
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn("inline-flex items-center", className)}
    >
      {children}
    </button>
  );
};

const DropdownMenuContent = ({ children, className }: any) => {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx) return null;
  const { open } = ctx;
  if (!open) return null;

  return (
    <div
      className={cn(
        "absolute right-0 z-50 mt-2 min-w-[12rem] rounded-md border bg-white p-1 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, onClick, ...props }, ref) => {
  const ctx = React.useContext(DropdownMenuContext);
  const handle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.(e as any);
    ctx?.setOpen(false);
  };
  return (
    <div
      ref={ref}
      onClick={handle}
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-sm hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuLabel = ({ className, children }: any) => (
  <div
    className={cn("px-3 py-1.5 text-sm font-semibold text-gray-700", className)}
  >
    {children}
  </div>
);

const DropdownMenuSeparator = ({ className }: any) => (
  <div className={cn("my-1 h-px bg-gray-100", className)} />
);

const DropdownMenuCheckboxItem = (props: any) => (
  <DropdownMenuItem {...props} />
);
const DropdownMenuRadioItem = (props: any) => <DropdownMenuItem {...props} />;
const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
    {...props}
  />
);

// Expose group/portal/sub compat names as no-ops or passthroughs to keep imports stable
const DropdownMenuGroup = ({ children }: any) => <div>{children}</div>;
const DropdownMenuPortal = ({ children }: any) => <>{children}</>;
const DropdownMenuSub = ({ children }: any) => <div>{children}</div>;
const DropdownMenuSubContent = ({ children }: any) => <div>{children}</div>;
const DropdownMenuSubTrigger = ({ children, ...props }: any) => (
  <div {...props}>{children}</div>
);
const DropdownMenuRadioGroup = ({ children }: any) => <div>{children}</div>;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
