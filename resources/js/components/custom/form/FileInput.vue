
<template>
    <div class="card">
        <Toast />
        <FileUpload :multiple="multiple" :accept="accept" :maxFileSize="maxFileSize"  @select="onSelectedFiles" >
            <input type="hidden" name="_token" value="{{ $page.props.csrf_token }}" />

            <template #header="{ chooseCallback, clearCallback }">
                <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
                    <div class="flex gap-2">
                        <Button @click="chooseCallback()"  rounded outlined severity="secondary"><Images/></Button>
                      
                        <Button @click="onClearTemplatingUpload(clearCallback)" icon="pi pi-times" rounded outlined severity="danger" :disabled="!files || files.length === 0"><X/></Button>
                    </div>
                    <ProgressBar :value="totalSizePercent" :showValue="false" >
                        <span class="">{{ totalSize }}B / {{maxFileSize/1024/1024}}Mb</span>
                    </ProgressBar>
                </div>
            </template>
            <template #content="{removeFileCallback}">
                <div    class="flex flex-col gap-8 pt-4">
                    <div v-if="files.length > 0">
                       
                        <div class="flex flex-wrap gap-4">
                            <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="p-8 rounded-border flex flex-col border border-surface items-center gap-4">
                                <div>
                                    <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
                                </div>
                                <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                                <div>{{ formatSize(file.size) }}</div>
                                <Badge value="Pending" severity="warn" />
                                <Button @click="onRemoveTemplatingFile(file,index,removeFileCallback)"  outlined rounded severity="danger" ><X color="red"/></Button>
                            </div>
                        </div>
                    </div>

             
                </div>

                <div v-if="files.length == 0" class="flex items-center justify-center flex-col">
                    <i class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color" />
                    <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
                </div>

            </template>
           
        </FileUpload>
    </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import { usePrimeVue } from 'primevue/config';
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button'
import Badge from 'primevue/badge'
import ProgressBar from 'primevue/progressbar'
import {X , CloudUpload ,Images} from 'lucide-vue-next'
import {FileConfig} from '@/Config/file'
import {router}from '@inertiajs/vue3'
import { convertToFileObject } from '@/Composables/files/convertPathToFile';


const props = defineProps({
    form: {
    type: Array,
    required: true
  },
    name: {
    type: String,
    required: true
  },
    files: {
   
  
  },

  ...FileConfig.defaults
});
// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up

const files =ref([])


 

const $primevue = usePrimeVue();
const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);


if(props.files){
  

  props.files.forEach(element => {
      convertToFileObject(element).then(function(res){
              files.value.push(res);
      });


  });

  files.value.forEach((file) => {
      totalSize.value += parseInt(formatSize(file.size));
  });
}

const onRemoveTemplatingFile = (file, index,removeFileCallback) => {
    
    removeFileCallback(index)
    files.value.splice(index,1);

    totalSize.value -= parseInt(formatSize(file.size));
    totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear) => {
    clear();
    totalSize.value = 0;
    totalSizePercent.value = 0;
    files.value=[];
   
};




const onSelectedFiles =  (event) => {
    files.value.push(...event.files);
  
    files.value.forEach((file) => {
        totalSize.value += parseInt(formatSize(file.size));
    });
 
   
   
};






const formatSize = (bytes) => {
    const k = 1024;
    const dm = 3;
    const sizes = $primevue.config.locale.fileSizeTypes;

    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
};


function updateFormValues(newData,oldData){
    props.form.setFieldValue(props.name,newData)
}

// update form values when user add or delete files
watch(files,updateFormValues,{deep:true})



</script>
