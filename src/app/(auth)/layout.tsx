import {cn} from '#/components/utils';
import {FC, PropsWithChildren} from 'react';

type Props = PropsWithChildren;

const AuthLayout: FC<Props> = ({
  children,
}) => {
  return (
    <div className={cn`
      h-full w-full grid grid-cols-1 md:grid-cols-[auto_600px]
      bg-sky-50 dark:bg-sky-950`}>
      <aside
        data-testid="feature"
        className={cn`h-full hidden md:block`}>
      </aside>

      <article
        data-testid="page"
        className={cn`flex justify-center flex-col items-center h-full bg-white shadow-[0_0_1rem_rgba(0,0,0,0.25)] p-4`}>
        {children}
      </article>
    </div>
  );
};
AuthLayout.displayName = 'AuthLayout';

export default AuthLayout;