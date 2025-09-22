import {AppSidebar} from '@/components/app-sidebar'
import {ChartAreaInteractive} from '@/components/chart-area-interactive'
import {DataTable} from '@/components/data-table'
import {SectionCards} from '@/components/section-cards'
import {SiteHeader} from '@/components/site-header'
import {SidebarInset, SidebarProvider} from '@/components/ui/sidebar'

import data from './data.json'
import {Separator} from '@/components/ui/separator'
import Breadcrumbs from '@/components/breadcrumbs'

export default function Page() {
  return (
    <>
      <Separator className="bg-primary mb-px"></Separator>
      <Separator className="bg-foreground "></Separator>
      <SidebarProvider
        className="h-fit"
        style={
          {
            padding: '0',
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)',
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="testing w-full px-[6%]">
            <Breadcrumbs />
          </div>
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
  )
}
