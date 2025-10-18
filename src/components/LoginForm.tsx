import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, storeAuth } from '@/lib/api/auth';
import { toast } from '@/hooks/use-toast';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await login({ email, password });

      if (response.success && response.token && response.user) {
        storeAuth(response.token, response.user);
        toast({
          title: 'Success',
          description: 'Logged in successfully',
        });
        navigate('/dashboard');
      } else {
        toast({
          title: 'Error',
          description: response.error || 'Login failed',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">Welcome back</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-inputs">
            <div className="input-field">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                disabled={isLoading}
              />
            </div>

            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="remember-me">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="checkbox"
                disabled={isLoading}
              />
              <span className="checkbox-label">Remember me</span>
            </label>
          </div>

          <div className="button-container">
            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
