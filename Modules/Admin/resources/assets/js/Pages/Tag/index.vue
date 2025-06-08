<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import Modal from '@/components/form/modal.vue';
import { Tag } from '@admin/types/Tag';
import { getColumns } from '@admin/Components/Tag/table/columns';
import DataTable from '@/components/DataTable.vue';
import FormFields from '@admin/Components/Tag/form/fields.vue';
import AddMultiFormFields from '@admin/Components/Tag/form/addMulti/fields.vue';

import { onMounted, ref, watch, provide, computed } from 'vue'
import { watchEffect } from 'vue';
import { toast } from '@/components/ui/toast';
import { reactive } from 'vue';
import * as z from 'zod'
import {useI18n} from 'vue-i18n'
import { useSetRouteAsActive } from '@/Composables/sidebar/setRouteAsActive';

// set route item as active in sidebar
useSetRouteAsActive("tag")
const {t}=useI18n();
const page = usePage()
const Schema = z.object({
  tag: z.string({message: t('Please enter the tag you want to add.')}).min(2).max(80),
})


const tags_max_adds=page.props.tagsMaxAdds;
const tags_max_actions=page.props.tagsMaxActions;
const addMultiSchema = z.object({
  tags: z.array(z.string({message: t('The tag must be a text.')}))
  .min(1, { message: t('Please enter at least one tag.') })
  .max(tags_max_adds, { message: t('tags-number-range',{ min: 1 , max:tags_max_adds }) }),
})

const defaultFormStructure = {
  href: route("tag.store"),
  data: {
    tag: null,
    id: null,
  },
  method: "post",
  open: false,
}

const AddMultiDefaultFormStructure = {
  href: route("tag.store.multi"),
  data: {
    tags: []
  },
  method: "post",
  open: false,
}
const AddMultiFormStructure = reactive( {...AddMultiDefaultFormStructure})

const formModal = reactive({ ...defaultFormStructure });
provide("formModal", formModal);

const inProgress = ref(false);
provide("inProgress", inProgress);

const props = defineProps({ tags: Array<Tag>, message: String })

const data = ref<Tag[]>(props.tags)

watch(() => props.tags, (newTags) => {
  data.value = newTags
})
const dataTableProps = reactive({
  inProgress:inProgress,
  columns:getColumns(t),
  data:data,
  partialReloadData: ['tags'],
  multiActionsEnabled:true,
  maxActions: tags_max_actions,
  actionAllUrls: {"delete":"tag.delete.multi"}
});

const message = computed(() => page.props.message as string | undefined)


if (message.value) {
  toast({ title: message.value })
}
</script>

<template>
  <Head :title="$t('View All Tags')" />
  <AuthenticatedLayout :breadcrumb-titles="[{ title: $t('Tags') },]">
    <template #header>
      <div class="flex">
        <Modal  name="Tags" operation="Add Multiple" :default="AddMultiDefaultFormStructure" :meta-data="AddMultiFormStructure" :schema="addMultiSchema" v-slot="{ form }">
      
        <AddMultiFormFields :form="form" />
      </Modal>
      <Modal name="A Tag" :default="defaultFormStructure" :schema="Schema" v-slot="{ form }">
        <FormFields :form="form" />
      </Modal>
      </div>
     
    </template>
    <div class="py-10 mx-20 container-fluid ">
      <DataTable v-bind="dataTableProps"   />
    </div>
  </AuthenticatedLayout>
</template>