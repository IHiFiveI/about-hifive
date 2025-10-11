import { Home } from "@/pages/home";
import { Layout } from "@/ui/layout";
import { ThemeProvider } from "@/ui/theme-provider";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};
