import { AsideMenu } from '@/components/AsideMenu';
import Header from '@/components/Header';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function Members() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <MembersComponent />
    </div>
  );
}

export function MembersComponent() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <TooltipProvider>
        <Header />
        <AsideMenu />
      </TooltipProvider>
    </div>
  )
}
