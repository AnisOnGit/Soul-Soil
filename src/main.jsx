import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AllProvider from "./provider/AllProvider";
import { Toaster } from "react-hot-toast";
import Modal from 'react-modal';

Modal.setAppElement('#root');
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllProvider>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </AllProvider>
  </StrictMode>
);
