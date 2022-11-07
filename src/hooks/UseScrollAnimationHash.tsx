import { createContext, useContext, useState, useEffect } from "react";

const startingState = {
  haveProvider: false,
  hash: "",
  setHash: (value: string) => {},
};

export interface ScrollAnimationHashState {
  haveProvider: boolean;
  hash: string;
  setHash: (value: string) => void;
}

export const ScrollAnimationHashContext = createContext(startingState);

export const ScrollAnimationHashProvider: React.FC = ({ children }) => {
  const [PostAnimationHash, setScrollAnimationHash] =
    useState<ScrollAnimationHashState>(startingState);

  useEffect(() => {
    setScrollAnimationHash({
      ...startingState,
      haveProvider: true,
      setHash: (value: string) => {
        setScrollAnimationHash((current) => {
          return {
            ...current,
            hash: value,
          };
        });
      },
    });
  }, [setScrollAnimationHash]);

  return (
    <ScrollAnimationHashContext.Provider value={PostAnimationHash}>
      {children}
    </ScrollAnimationHashContext.Provider>
  );
};

export const useScrollAnimationHash = () => {
  return useContext(ScrollAnimationHashContext);
};
