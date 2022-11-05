import { createContext, useContext, useState, useEffect } from "react";

const startingState = {
  haveProvider: false,
  hash: "",
  setHash: (value: string) => {},
};

export interface PostAnimationHashState {
  haveProvider: boolean;
  hash: string;
  setHash: (value: string) => void;
}

export const PostAnimationHashContext = createContext(startingState);

export const PostAnimationHashProvider: React.FC = ({ children }) => {
  const [PostAnimationHash, setPostAnimationHash] =
    useState<PostAnimationHashState>(startingState);

  useEffect(() => {
    setPostAnimationHash({
      ...startingState,
      haveProvider: true,
      setHash: (value: string) => {
        setPostAnimationHash((current) => {
          return {
            ...current,
            hash: value,
          };
        });
      },
    });
  }, [setPostAnimationHash]);

  return (
    <PostAnimationHashContext.Provider value={PostAnimationHash}>
      {children}
    </PostAnimationHashContext.Provider>
  );
};

export const usePostAnimationHash = () => {
  return useContext(PostAnimationHashContext);
};
