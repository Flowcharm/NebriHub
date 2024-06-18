import { AsideMenu } from '@/components/AsideMenu';
import { TooltipProvider } from '@/components/ui/tooltip';
import Header from '@/components/Header';
import {ProjectsComponent} from "@/app/projects/page";
import {DataTable} from "@/app/members/data-table";
import {columns} from "@/app/members/columns";
import {Grid} from "lucide-react";

interface AttendanceProps {
    type: string;
}

const userType = "";

export default function Attendance() {
  return (
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <TooltipProvider>
              <Header/>
              <AsideMenu/>
          </TooltipProvider>
          <div className="flex mr-9">
              <AttendanceComponent type={userType}/>
          </div>
      </div>
  );
}

export function AttendanceComponent({type}: AttendanceProps) {
    return (
        <div className="">

        </div>
    )
}