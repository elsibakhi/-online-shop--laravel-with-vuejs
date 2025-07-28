<template>
    <Menubar :model="menuItems" class="px-4 py-2 border-b shadow-sm">
      <template #start>
        <Link href="/" class="text-lg font-bold">MyShop</Link>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <form action="/">
            
            <InputText  :default-value="searchQuery" name="search"  placeholder="Search..." class="w-64"  />
          </form>
          <Button label="Login" @click="goToLogin" severity="secondary" />
        </div>
      </template>
    </Menubar>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { router, Link, usePage } from '@inertiajs/vue3'
  import  Menubar  from 'primevue/menubar'
  import InputText from 'primevue/inputtext'
  import Button from 'primevue/button'
  
  const search = ref('')
  const page = usePage()
  
  const categories = computed(() => page.props.categories || [])
  const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('search');
  const buildMenuItems = () => {
    const categoryItems = categories.value.map(category => ({
      label: category.name,
      items: category.subcategories.map(sub => ({
        label: sub.name,
        url: `?category=${sub.slug}`,
      }))
    }))
  
    return [
      { label: 'Home', icon: 'pi pi-home', url: '/' },
      { label: 'Categories', icon: 'pi pi-tags',  items: categoryItems },
    
      // { label: 'About Us', icon: 'pi pi-info-circle', url: '/about' },
      // { label: 'Contact', icon: 'pi pi-envelope', url: '/contact' },
    ]
  }
  
  const menuItems = computed(() => buildMenuItems())
  
  const goToLogin = () => {
    router.visit('/login')
  }

  </script>
  
  <style scoped>
  .router-link-active {
    font-weight: bold;
    color: var(--primary-color);
  }
  </style>