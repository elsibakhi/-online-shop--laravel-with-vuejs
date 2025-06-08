<script setup lang="ts">
import { useItemStore } from '@vendor/js/Stores/Item';
import { Button } from 'primevue';
import ItemController from '@/actions/Modules/Vendor/Http/Controllers/ItemController';
import { Item } from '@vendor/js/types/Item';
import axios from 'axios';


const props =defineProps<{
  item: Item,

}>()

const itemStore = useItemStore();

const onPreview = async () => {
        const show = ItemController.show(props.item.id) 
        await axios.get(show.url).then(res => {itemStore.changeItemInDrawer(res.data)})
   
}

</script>

<template>
      <div class="flex flex-col justify-between lg:flex-row card ">
      
        <Button @click="onPreview()"  :label="$t('Preview')" class="m-1" />
      
    </div>
</template>















