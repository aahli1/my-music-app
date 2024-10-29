import { Calendar, Home, Inbox, Search, Settings, User, Bell, Music, Play, Radio} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Header menu items
const headerItems = [
  {
    title: "Music",
    url: "#",
    icon: User,
  },
  {
    title: "File",
    url: "#",
    icon: Bell,
  },
  {
    title: "View",
    url: "#",
    icon: Bell,
  },
]

// Sidebar menu items
const items = [
  {
    title: "Listen Now",
    url: "#",
    icon: Play,
  },
  {
    title: "Browse",
    url: "#",
    icon: Music,
  },
  {
    title: "Radio",
    url: "#",
    icon: Radio,
  },
 
  
]

// Sidebar menu items
const items1 = [
  {
    title: "Playlists",
    url: "#",
    icon: Play,
  },
  {
    title: "Songs",
    url: "#",
    icon: Music,
  },
  {
    title: "Made for you",
    url: "#",
    icon: Home,
  },
  {
    title: "Artist",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Albums",
    url: "#",
    icon: Calendar,
  },
 
  
]

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Horizontal Header Menu */}
      <div className="flex items-center justify-around p-4 border-b border-gray-200">
        {headerItems.map((item) => (
          <a key={item.title} href={item.url} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <item.icon className="w-5 h-5" />
            <span>{item.title}</span>
          </a>
        ))}
      </div>

      {/* Main Application Menu */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Discover</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Library</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Playlists</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>

    
  )
}
