import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Breadcrumbs from "@/components/breadcrumbs";

export default function Page() {
  return (
    <>
      <div className="testing w-full px-[6%]">
        <Breadcrumbs />
        <div className="flex flex-col justify-center items-center pb-5">
          <h1 className="text-center">Shad Block: Dashboard 1</h1>
          <Button className="text-center" asChild variant="link">
            <Link href="https://ui.shadcn.com/blocks#dashboard-01">
              Documentation
            </Link>
          </Button>
        </div>
      </div>
      <Separator className="bg-foreground "></Separator>
      <SidebarProvider
        className="h-fit"
        style={
          {
            padding: "0",
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2 !p-[var(--page-padding)]">
              <div className="flex flex-col gap-4 !py-4 md:gap-6 !md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div>
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
