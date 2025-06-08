<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm as useValidationForm } from 'vee-validate';
import * as z from 'zod';
import OrderList from 'primevue/orderlist';
import Avatar from 'primevue/avatar';
import Button from '@/components/ui/button/Button.vue';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel
} from '@/components/ui/form';
import { Reply } from 'lucide-vue-next';
import { useForm } from '@inertiajs/vue3';
import { store } from '@/actions/Modules/Customer/Http/Controllers/PostController';
import { search as userSearch } from '@/actions/App/Http/Controllers/UserController';
import DefaultItemImage from '@vendor/images/items/default/item.png'

import axios from 'axios';
import { search as itemSearch } from '@/actions/Modules/Vendor/Http/Controllers/ItemController';
import { usePostStore } from '@customer/js/Stores/Post';

const emit = defineEmits(['commentAdded', 'replyAdded']);

const props = defineProps({
  postId: { type: Number, default: 0 },
  grandPostId: { type: Number, default: 0 },
  mention: { type: String, default: '' },
  label: { type: String },
  type: { type: String, default: 'comment' },
});

const schema = toTypedSchema(z.object({
  content: z.string().min(2).max(500),
}));


const {
  handleSubmit,
  resetForm,
  setFieldValue,
  values,
  setErrors,
  isFieldDirty,
} = useValidationForm({
  validationSchema: schema,
  initialValues: { content: props.value },
});

const editor = ref<HTMLElement | null>(null);
const mentionQuery = ref('');
const mentionType = ref<'item' | 'user' | null>(null);
const mentionResults = ref<any[]>([]);
const showMentionBox = ref(false);
const mentionBoxPosition = ref({ top: 0, left: 0 });



onMounted(() => {
  if (editor.value && editor.value.innerHTML.trim() === '') {
    editor.value.innerHTML = '<br>';
  }
});


watch(() => props.mention, async (newValue) => {


  if (newValue && editor.value) {
    // Clear editor and form field
    editor.value.innerHTML = '';
    setFieldValue('content', '');

    await nextTick();

    // Insert the mention
    const mention = `@${newValue.replace(/\s+/g, '_')} `;
    editor.value.innerHTML = `<b>${mention}</b>`;
    setFieldValue('content', mention);

    // Move caret to the end
    const textNode = editor.value.childNodes[editor.value.childNodes.length - 1];
    if (textNode) {
      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(textNode, textNode.textContent?.length || 0);
      range.collapse(true);
      sel?.removeAllRanges();
      sel?.addRange(range);
    }


  }


});





function handleInput() {
  const div = editor.value;
  if (!div) return;

  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;

  const range = sel.getRangeAt(0);
  const preCaretRange = range.cloneRange();
  preCaretRange.selectNodeContents(div);
  preCaretRange.setEnd(range.endContainer, range.endOffset);
  const caretPos = preCaretRange.toString().length;

  const rawText = div.innerText;
  setFieldValue('content', rawText);

  // === mention detection ===
  const words = rawText.substring(0, caretPos).split(/\s/);
  const lastWord = words[words.length - 1];

  if (lastWord.startsWith('@') && lastWord.length > 1) {
    mentionQuery.value = lastWord.slice(1);
    mentionType.value = 'user'
    showMentionBox.value = true;
    fetchMentionData(mentionQuery.value, 'user');
    nextTick(() => {
      setMentionBoxPosition();
    });
  } else if (lastWord.startsWith('&') && lastWord.length > 1) {
    mentionQuery.value = lastWord.slice(1);
    mentionType.value = 'item'
    showMentionBox.value = true;
    fetchMentionData(mentionQuery.value, 'item');
    nextTick(() => {
      setMentionBoxPosition();
    });
  }
  else {
    showMentionBox.value = false;
  }
  const htmlText = rawText
    .split('\n')
    .map(line => line
      .replace(/@(\w+)/g, '<b>@$1</b>')
      .replace(/&(\w+)/g, '<b>&$1</b>')
    )
    .join('<br>');

  div.innerHTML = htmlText;
  setCaretPosition(div, caretPos);
}

async function fetchMentionData(query: string, resource: 'user' | 'item') {
  try {


    axios.get(resource == 'user' ? userSearch().url : itemSearch().url, {
      params: {
        query: query
      }
    }).then(function (res) {
      mentionResults.value = res.data;

    }).catch(function (err) {
      console.error(err);
    });


  } catch (e) {
    console.error('Failed to fetch mentions:', e);
  }
}


function setMentionBoxPosition() {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;

  const range = sel.getRangeAt(0).cloneRange();
  range.collapse(true);

  const rect = range.getBoundingClientRect();
  mentionBoxPosition.value = {
    top: rect.bottom + window.scrollY + 5,
    left: rect.left + window.scrollX,
  };
}

function selectMention(mention: any) {
  const div = editor.value;
  if (!div) return;

  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;

  const range = sel.getRangeAt(0);
  const rawText = div.innerText;

  const words = rawText.split(/\s/);
  const lastWord = words[words.length - 1];
  if (mentionType.value == 'user') {
    const newWord = `@${mention.username}`;

    words[words.length - 1] = newWord;

    const updatedText = words.join(' ');

    setFieldValue('content', updatedText);
    div.innerHTML = updatedText.replace(/@(\w+)/g, '<b>@$1</b>')
      .replace(/&(\w+)/g, '<b>&$1</b>');
  } else if (mentionType.value == 'item') {
    const newWord = `&${mention.code}`;

    words[words.length - 1] = newWord;

    const updatedText = words.join(' ');

    setFieldValue('content', updatedText);
    div.innerHTML = updatedText.replace(/@(\w+)/g, '<b>@$1</b>')
      .replace(/&(\w+)/g, '<b>&$1</b>');
  }

  showMentionBox.value = false;

  // Move caret to end
  const textNode = div.childNodes[div.childNodes.length - 1];
  if (textNode) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(textNode, textNode.textContent?.length || 0);
    range.collapse(true);
    sel?.removeAllRanges();
    sel?.addRange(range);
  }
}




function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    e.preventDefault();
    insertNewLine();
  }
}

function insertNewLine() {
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount) return;

  const range = sel.getRangeAt(0);
  range.deleteContents();

  // Create a new div with br inside
  const div = document.createElement('div');
  const br = document.createElement('br');
  div.appendChild(br);

  range.insertNode(div);
  range.setStart(div, 0);
  range.setEnd(div, 0);

  sel.removeAllRanges();
  sel.addRange(range);
}

function getCaretCharacterOffsetWithin(element: Node) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return 0;

  const range = selection.getRangeAt(0);
  const preCaretRange = range.cloneRange();
  preCaretRange.selectNodeContents(element);
  preCaretRange.setEnd(range.endContainer, range.endOffset);
  return preCaretRange.toString().length;
}

function setCaretPosition(element: Node, offset: number) {
  const range = document.createRange();
  const selection = window.getSelection();
  let currentOffset = 0;

  function walk(node: Node): boolean {
    if (node.nodeType === Node.TEXT_NODE) {
      const nextOffset = currentOffset + (node.textContent?.length || 0);
      if (offset <= nextOffset) {
        range.setStart(node, offset - currentOffset);
        range.collapse(true);
        return true;
      }
      currentOffset = nextOffset;
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        if (walk(node.childNodes[i])) return true;
      }
    }
    return false;
  }

  walk(element);
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

const onSubmit = handleSubmit((values) => {

  type PostData = {
    content: string,
    post_id?: number
  }
  const data: PostData = {
    content: values.content
  };

  if (props.postId) {
    data['post_id'] = props.postId;

  }

  const postStore = usePostStore();
  

  axios.post(store().url,data).then((response)=>{
    const emitData =ref([]);
    
    if (props.postId) {
       emitData.value = props.grandPostId ? [props.grandPostId, props.postId] : [props.postId]
        
      }
      
      
      postStore.addPost(response.data,...emitData.value)
      
      resetForm()
      if (editor.value) editor.value.innerHTML = '';
  })



});
</script>

<template>
  <div class="flex items-center mt-2">
    <Avatar image="https://via.placeholder.com/40" shape="circle" class="mr-2" />
    <form class="flex items-center justify-between w-full" @submit.prevent="onSubmit">
      <FormField v-slot="{ componentField }" name="content" :validate-on-blur="!isFieldDirty">
        <FormItem class="w-2/3 ">
          <FormLabel v-if="type=='post'">{{ label }}</FormLabel>
          <FormControl>
            <div ref="editor" contenteditable="true" @input="handleInput" @keydown="handleKeydown"
              class="bg-white w-full mr-2 border rounded p-2 focus:outline-none whitespace-pre-wrap break-words min-h-[40px]"
              ></div>

     

            <div class="card sm:flex sm:justify-center">
              <div v-if="showMentionBox && mentionType=='item'"
                class="absolute z-10 w-1/2 p-5 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                <div v-for="option in mentionResults" class="flex flex-wrap items-center w-full gap-4 p-1 pb-5 border-b-2 cursor-pointer"@click="selectMention(option)" >
                  <img class="w-12 rounded shrink-0" :src="option.image ? '/storage/' + option.image : DefaultItemImage"
                    :alt="option.title" />
                  <div class="flex flex-col flex-1">
                    <span class="text-sm font-medium">{{ option.title }}</span>
                    <!-- <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span> -->
                  </div>
                  <span class="font-bold sm:ml-8">${{ option.price }}</span>
                </div>
              </div>
              <div v-else-if="showMentionBox && mentionType=='user'"
                class="absolute z-10 w-1/2 p-5 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                <div v-for="option in mentionResults" class="flex flex-wrap items-center w-full gap-4 p-1 pb-5 border-b-2 cursor-pointer"@click="selectMention(option)" >
                  <img class="w-12 rounded shrink-0" :src="option.image ? '/storage/' + option.image : '/storage/user/default.png'"
                    :alt="option.title" />
                  <div class="flex flex-col flex-1">
                    <span class="text-sm font-medium">{{ option.name }}</span>
                    <span class="text-sm text-surface-500 dark:text-surface-400">{{ option.username }}</span>
                  </div>
               
                </div>
              </div>



            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" size="xs">
        <Reply v-if="type=='comment'"/>
        <span v-else>{{$t('Post')}}</span>
      </Button>
    </form>
  </div>




</template>
