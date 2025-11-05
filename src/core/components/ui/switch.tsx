import * as React from "react";
import { cn } from "@/utils/cn";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, defaultChecked, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false);

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (checked === undefined) {
        setIsChecked(event.target.checked);
      }
      onChange?.(event);
    };

    return (
      <label
        className={cn(
          "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[checked=true]:bg-primary data-[checked=false]:bg-input",
          className
        )}
        data-checked={isChecked}
      >
        <input
          type="checkbox"
          className="sr-only"
          ref={ref}
          checked={checked ?? isChecked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          {...props}
        />
        <span
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
            isChecked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </label>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
