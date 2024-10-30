// app/layout.tsx
import './globals.css'; // Import global styles if you have any
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import the SidebarProvider

export const metadata = {
  title: 'My Music App',
  description: 'Explore your favorite music and playlists',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 p-4">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
