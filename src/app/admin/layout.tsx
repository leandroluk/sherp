import {FC, PropsWithChildren} from 'react';

type Props = PropsWithChildren;

const AdminLayout: FC<Props> = ({
  children,
}) => {
  return (
    <main>
      {children}
    </main>
  );
};
AdminLayout.displayName = 'AdminLayout';

export default AdminLayout;