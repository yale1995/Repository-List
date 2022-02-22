import { useContext } from "react";
import { Container } from "./style";
import { RepositoriesContext } from "../hooks/RepositoriesContext";

export const Main = () => {
  const repositories = useContext(RepositoriesContext);

  return (
    <Container>
      <ul>
        {repositories.map((repository) => {
          return (
            <li>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
              <a href={repository.html_url}>Press Here</a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
