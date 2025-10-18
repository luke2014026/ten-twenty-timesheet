import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/LoginForm';
import LoginHero from '@/components/LoginHero';
import { getStoredAuth } from '@/lib/api/auth';
import './styles.css';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getStoredAuth();
    if (auth) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="login-page">
      <div className="login-left">
        <LoginForm />
      </div>
      <div className="login-right">
        <LoginHero />
      </div>
    </div>
  );
};

export default Login;
