import './App.css';
import '@/shared/styles/variables.css';
import '@/shared/styles/color-palette.css';
import '@/shared/styles/common-styles.css';
import { MyToolbar } from '@/features';
import { Outlet } from 'react-router';
import { HintOverlay, ModalOverlay } from '@/shared';
import { AuthToolbarButton } from '../features/auth';

export default function App() {
  return (
    <>
      <ModalOverlay>
        <header>
          <MyToolbar>
            <AuthToolbarButton />
          </MyToolbar>
        </header>
        <main>
          <Outlet />
        </main>
      </ModalOverlay>
      {/* <HintOverlay /> */}
    </>
  );
}
