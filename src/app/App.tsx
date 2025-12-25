import './App.css';
import '@/shared/styles/variables.css';
import '@/shared/styles/color-palette.css';
import { MyToolbar } from '@/widgets';
import { Outlet } from 'react-router';
import { MyOverlay } from '@/shared';
import { AuthToolbarButton } from '../features/auth';

export default function App() {
  return (
    <>
      <header>
        <MyToolbar>
          <AuthToolbarButton />
        </MyToolbar>
      </header>
      <main>
        <Outlet />
      </main>
      <MyOverlay />
    </>
  )
}
