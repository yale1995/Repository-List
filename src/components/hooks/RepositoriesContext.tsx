import { createContext, useEffect, useState, ReactNode } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

interface RepositoriesProviderProps {
  children: ReactNode;
}

export const RepositoriesContext = createContext<Repository[]>([]);

export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/yureesantos/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <RepositoriesContext.Provider value={repositories}>
      {children}
    </RepositoriesContext.Provider>
  );
}
