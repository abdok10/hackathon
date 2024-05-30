import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";
import UserProvider from "./context/UserContext.jsx";

function App() {
  return (
    <UserProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster
          position="bottom-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </ThemeProvider>
    </UserProvider>
  );
}
export default App;
