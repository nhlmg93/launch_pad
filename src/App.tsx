import { createRouter } from "@nanostores/router";
import { useStore } from "@nanostores/solid";
import { ErrorBoundary, Match, Switch, lazy } from "solid-js";

export const $router = createRouter({
  base: "/",
  info: "/info",
  license: "/license",
  privacy: "/privacy",
} as const);

const Information = lazy(() => import("@Pages/information"));
const Landing = lazy(() => import("@Pages/landing"));
const License = lazy(() => import("@Pages/license"));
const Privacy = lazy(() => import("@Pages/privacy"));

function App() {
  const page = useStore($router);

  return (
    <ErrorBoundary fallback={<h1>Error</h1>}>
      <Switch fallback={<h1>Not Found</h1>}>
        <Match when={page()?.route === "base"}>
          <Landing />
        </Match>
        <Match when={page()?.route === "info"}>
          <Information />
        </Match>
        <Match when={page()?.route === "license"}>
          <License />
        </Match>
        <Match when={page()?.route === "privacy"}>
          <Privacy />
        </Match>
      </Switch>
    </ErrorBoundary>
  );
}

export default App;
