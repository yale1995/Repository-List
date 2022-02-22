import { Footer } from "./components/Footer";
import { Header } from "./components/Header/index";
import { RepositoriesProvider } from "./components/hooks/RepositoriesContext";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";
export function App() {
  return (
    <RepositoriesProvider>
      <Header />
      <GlobalStyle />
      <Main />
      <Footer />
    </RepositoriesProvider>
  );
}
