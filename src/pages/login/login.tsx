import { AuthorizationForm } from '@/features/auth';
import { useNavigate, useLocation } from 'react-router';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  return (
    <AuthorizationForm onSuccess={() => navigate(from, { replace: true })} />
  );
}
