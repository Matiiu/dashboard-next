import clsx from 'clsx';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, 'antialiased')}>{children}</body>
		</html>
	);
}
