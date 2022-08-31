import { CroctProvider } from '@croct/plug-react';
import Router from './Routes/Router'
export default function App() {
  return (
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
      <Router />
    </CroctProvider>
  );
}
