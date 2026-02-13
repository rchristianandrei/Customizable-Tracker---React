import { createContext, useContext, useState } from "react";

const TrackerComponentContext = createContext<
  | {
      isClicked: number;
      setIsClicked: React.Dispatch<React.SetStateAction<number>>;
      isDisabled: boolean;
      setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
      onSelectComponent: number;
      setOnSelectComponent: React.Dispatch<React.SetStateAction<number>>;
    }
  | undefined
>(undefined);

export function TrackerComponentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClicked, setIsClicked] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [onSelectComponent, setOnSelectComponent] = useState(0);

  return (
    <TrackerComponentContext.Provider
      value={{
        isClicked,
        setIsClicked,
        isDisabled,
        setIsDisabled,
        onSelectComponent,
        setOnSelectComponent,
      }}
    >
      {children}
    </TrackerComponentContext.Provider>
  );
}

export function useTrackerComponent() {
  const context = useContext(TrackerComponentContext);
  if (!context) {
    throw new Error(
      "useTrackerComponent must be used within TrackerComponentProvider",
    );
  }
  return context;
}
