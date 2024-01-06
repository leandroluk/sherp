import {FC} from 'react';

import AuthFooter from '#/components/molecules/auth-footer';
import AuthHeader from '#/components/molecules/auth-header';
import LoginForm from '#/components/organisms/login-form';

const LoginPage: FC = () => {
  return (
    <div
      data-testid="LoginPage"
      className="grid grid-rows-[min-content_auto_min-content] gap-8">
      <AuthHeader />
      <LoginForm />
      <AuthFooter />
    </div>
  );
};
LoginPage.displayName = 'LoginPage';

export default LoginPage;