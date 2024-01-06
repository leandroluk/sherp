import {FC, PropsWithChildren} from 'react';

type Props = PropsWithChildren;

const OrganizationLayout: FC<Props> = ({
  children,
}) => {
  return (
    <main>
      {children}
    </main>
  );
};
OrganizationLayout.displayName = 'OrganizationLayout';

export default OrganizationLayout;