import type {Metadata} from 'next';
import {Inter as FontSans} from 'next/font/google';
import {FC, PropsWithChildren} from 'react';

import './globals.css';

const fontSans = FontSans({subsets: ['latin'], variable: "--font-sans"});

export const metadata: Metadata = {
  title: 'SHERP',
  description: 'An Software House Enterprize Resources Planning solution',
};

type Props = PropsWithChildren;

const RootLayout: FC<Props> = ({
  children,
}) => {
  return (
    <html
lang="en"
suppressHydrationWarning>
      <body className={fontSans.className}>
        {children}
      </body>
    </html>
  );
};
RootLayout.displayName = 'RootLayout';

export default RootLayout;