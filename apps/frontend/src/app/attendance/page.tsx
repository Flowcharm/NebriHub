import { AsideMenu } from '@/components/AsideMenu';
import { TooltipProvider } from '@/components/ui/tooltip';
import Header from '@/components/Header';

export default function Attendance() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <AttendanceComponentStudent />
    </div>
  );
}

function AttendanceComponentStudent() {
  return (
    <TooltipProvider>
      <Header />
      <AsideMenu />
    </TooltipProvider>
  )
}