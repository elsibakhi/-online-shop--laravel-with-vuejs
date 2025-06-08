<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { SidebarProps } from '@/components/ui/sidebar'

import NavMain from '@/components/NavMain.vue'
import NavProjects from '@/components/NavProjects.vue'
import NavUser from '@/components/NavUser.vue'
import TeamSwitcher from '@/components/TeamSwitcher.vue'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-vue-next'
import { usePage } from '@inertiajs/vue3'
import { useSidebarStore } from '@/Stores/Sidebar';
import { getFormattedNotification } from '@customer/js/Composables/notifications/getFormattedNotification'



 const sidebarStore = useSidebarStore();




const { t } = useI18n()
const page = usePage()
const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})



// This is sample data.
const data = {
  user: {
    name: page.props.auth.user.name,
    email: page.props.auth.user.email,
    // avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: sidebarStore.routes,

 
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
     
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
