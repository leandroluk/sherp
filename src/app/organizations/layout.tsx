import {FC, PropsWithChildren} from 'react';

type Props = PropsWithChildren;

const ChooseOrganizationLayout: FC<Props> = ({
  children,
}) => {
  return (
    <main>
      {children}
    </main>
  );
};
ChooseOrganizationLayout.displayName = 'ChooseOrganizationLayout';

export default ChooseOrganizationLayout;