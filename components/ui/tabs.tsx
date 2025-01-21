// tabs.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
}

interface TabsContextValue {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

function Tabs({ defaultValue, className, children, ...props }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue || "");

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn("tabs", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

function TabsList({ className, children, ...props }: TabsListProps) {
  return (
    <div
      className={cn("tabs-list flex space-x-4 border-b", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }

  const { value: activeValue, setValue } = context;

  const isActive = value === activeValue;

  return (
    <button
      onClick={() => setValue(value)}
      className={cn(
        "tabs-trigger px-4 py-2 text-sm font-medium",
        isActive
          ? "border-b-2 border-blue-600 text-blue-600"
          : "text-gray-600 hover:text-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }

  const { value: activeValue } = context;

  if (value !== activeValue) {
    return null;
  }

  return (
    <div className={cn("tabs-content", className)} {...props}>
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
