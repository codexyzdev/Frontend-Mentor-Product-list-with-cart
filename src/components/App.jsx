import ConfirmOrder from "./ConfirmOrder";
import Main from "./Main";
import { StoreProvider } from "./StoreContext";

export default function App() {
  return (
    <StoreProvider>
      <ConfirmOrder />
      <Main />
    </StoreProvider>
  );
}
