import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { items } from "./AppSidebar.data";
import { Logo } from "@/components/Shared";
import { BtnCreateInterview } from "@/components/Shared/BtnCreateInterview";
import { AccessStatus } from "./AccessStatus";

export function AppSidebar() {
  return (
    <Sidebar className="text-white">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <BtnCreateInterview />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <a href={item.url}>
                      <item.icon className="w-10 h-10 shrink-0 !text-3xl" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AccessStatus />
      </SidebarFooter>
    </Sidebar>
  );
}
