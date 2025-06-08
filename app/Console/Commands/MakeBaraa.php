<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class MakeBaraa extends Command
{
    protected $signature = 'make:baraa {name} {--all} {--repo} {--service} {--model} {--store-request} {--update-request} {--delete} {--migration} {--vue}';

    protected $description = 'Create or delete controller, model, requests, migration, Vue components, and optionally repository and service for the given name';

    public function handle()
    {
        $name = $this->argument('name');

        $filesystem = new Filesystem;

        // If -delete flag is provided, delete the files
        if ($this->option('delete')) {
            $this->deleteFiles($name, $filesystem);

            return;
        }

        // If -all flag is provided, generate all files
        if ($this->option('all')) {
            $this->createController($name, $filesystem);
            $this->createModel_migration($name, $filesystem);
            $this->createStoreRequest($name, $filesystem);
            $this->createUpdateRequest($name, $filesystem);
            $this->createRepository($name, $filesystem);
            $this->createService($name, $filesystem);
            $this->addResourceRouteToWeb($name, $filesystem);
            $this->addToLang($name, $filesystem);
            $this->createVueFiles($name, $filesystem);
        } else {
            // Generate files based on individual options
            if ($this->option('model')) {
                $this->createModel_Requests_migration($name, $filesystem);
            }

            if ($this->option('repo')) {
                $this->createRepository($name, $filesystem);
            }

            if ($this->option('service')) {
                $this->createService($name, $filesystem);
            }

            if ($this->option('vue')) {
                $this->createVueFiles($name, $filesystem);
            }

            // Create controller if requested
            if ($this->option('service') || $this->option('repo')) {
                $this->createController($name, $filesystem);
            }
        }

        $this->info("Files for {$name} created successfully!");
    }

    private function deleteFiles($name, Filesystem $filesystem)
    {
        $this->info("Deleting files for {$name}...");

        // Delete Controller
        $controllerPath = app_path("Http/Controllers/{$name}Controller.php");
        if ($filesystem->exists($controllerPath)) {
            $filesystem->delete($controllerPath);
            $this->info("Deleted Controller: {$name}Controller.php");
        }

        // Delete store request
        $storeRequestPath = app_path("Http/Requests/Store{$name}Request.php");
        if ($filesystem->exists($storeRequestPath)) {
            $filesystem->delete($storeRequestPath);
            $this->info("Deleted Request: Store{$name}Request.php");
        }
        // Delete update request
        $updateRequestPath = app_path("Http/Requests/Update{$name}Request.php");
        if ($filesystem->exists($updateRequestPath)) {
            $filesystem->delete($updateRequestPath);
            $this->info("Deleted Request: Update{$name}Request.php");
        }

        // Delete Model
        $modelPath = app_path("Models/{$name}.php");
        if ($filesystem->exists($modelPath)) {
            $filesystem->delete($modelPath);
            $this->info("Deleted Model: {$name}.php");
        }

        // Delete StoreRequest
        $storeRequestPath = app_path("Http/Requests/Store{$name}Request.php");
        if ($filesystem->exists($storeRequestPath)) {
            $filesystem->delete($storeRequestPath);
            $this->info("Deleted StoreRequest: Store{$name}Request.php");
        }

        // Delete UpdateRequest
        $updateRequestPath = app_path("Http/Requests/Update{$name}Request.php");
        if ($filesystem->exists($updateRequestPath)) {
            $filesystem->delete($updateRequestPath);
            $this->info("Deleted UpdateRequest: Update{$name}Request.php");
        }

        // Delete Repository
        $repositoryPath = app_path("Repositories/{$name}Repository.php");
        if ($filesystem->exists($repositoryPath)) {
            $filesystem->delete($repositoryPath);
            $this->info("Deleted Repository: {$name}Repository.php");
        }

        // Delete Service
        $servicePath = app_path("Services/{$name}Service.php");
        if ($filesystem->exists($servicePath)) {
            $filesystem->delete($servicePath);
            $this->info("Deleted Service: {$name}Service.php");
        }

        // Delete Migration
        // $migrationPath = database_path("migrations/*_create_{$name}_table.php");
        // if ($filesystem->exists($migrationPath)) {
        //     $filesystem->delete($migrationPath);
        //     $this->info("Deleted Migration: *_create_{$name}_table.php");
        // }

        // Delete Vue Files

        $vuePath = resource_path("js/Pages/{$name}");
        $vueComponentsPath = resource_path("js/Components/{$name}");
        $vuetypefilePath = resource_path("js/types/{$name}.ts");

        if ($filesystem->exists($vuetypefilePath)) {
            $filesystem->delete($vuetypefilePath);
            $this->info("Deleted Vue Type file for {$name}s.");
        }
        if ($filesystem->exists($vuePath)) {
            $filesystem->deleteDirectory($vuePath);
            $this->info("Deleted Vue files for {$name}s.");
        }
        if ($filesystem->exists($vueComponentsPath)) {
            $filesystem->deleteDirectory($vueComponentsPath);
            $this->info("Deleted Vue Components files for {$name}s.");
        }

        $this->info("All files for {$name} have been deleted.");
    }

    private function createController($name, Filesystem $filesystem)
    {
        $directory = app_path('Http/Controllers');
        $path = "{$directory}/{$name}Controller.php";
        $lowercase_name = strtolower((string) $name);
        $plural_name = Str::plural(strtolower((string) $name));
        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }

        $stub = <<<PHP
<?php

namespace App\Http\Controllers;

use App\Http\Requests\Store{$name}Request;
use App\Http\Requests\Update{$name}Request;
use App\Services\\{$name}Service;
use Inertia\Inertia;

class {$name}Controller extends Controller
{
    public function __construct(protected {$name}Service \${$name}Service) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        \${$plural_name} = \$this->{$name}Service->showAll();

        return Inertia::render("{$name}/index", compact('{$plural_name}'));
    }

       /**
     * Store a newly created resource in storage.
     */
    public function store(Store{$name}Request \$request)
    {
        \$this->{$name}Service->store(\$request->validated());

        return to_route("{$lowercase_name}.index")->with('message', __('The {$name} Added Successfully'));
    }

    /**
     * Display the specified resource.
     */
    public function show(\${$lowercase_name})
    {
        //
    }

      /**
     * Return data needed for editing the specified resource.
     */
    public function edit(\${$lowercase_name})
    {
        return \$this->{$name}Service->find(\${$lowercase_name});
    }

      /**
     * Update the specified resource in storage.
     */
    public function update(Update{$name}Request \$request, \${$lowercase_name})
    {
        \$this->{$name}Service->update(\${$lowercase_name}, \$request->validated());

        return to_route("{$lowercase_name}.index")->with('message', __('The {$name} Updated Successfully'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(\${$lowercase_name})
    {
        \$this->{$name}Service->delete(\${$lowercase_name});
        return to_route("{$lowercase_name}.index")->with('message', __('The {$name} Deleted Successfully'));
    }
}
PHP;

        $filesystem->put($path, $stub);
    }

    private function addToLang($name, Filesystem $filesystem)
    {
        $base_path = base_path('lang/en.json'); // ملف الترجمة الرئيسي
        $resource_path = resource_path('js/lang/en.json'); // ملف الترجمة في الـ Vue

        $lowercase_name = strtolower((string) $name);
        $plural_name = Str::plural($lowercase_name);
        $ucfirst_plural_name = ucfirst($plural_name);

        // التأكد من وجود الملفات، وإن لم تكن موجودة، يتم إنشاؤها
        if (! $filesystem->exists($base_path)) {
            $filesystem->put($base_path, json_encode([]));
        }

        if (! $filesystem->exists($resource_path)) {
            $filesystem->put($resource_path, json_encode([]));
        }

        // قراءة المحتوى الحالي لكل ملف
        $baseJson = json_decode($filesystem->get($base_path), true);
        $resourceJson = json_decode($filesystem->get($resource_path), true);

        // تعريف القيم الجديدة
        $baseNewEntries = [
            "The {$name} Added Successfully" => "The {$name} Added Successfully",
            "The {$name} Updated Successfully" => "The {$name} Updated Successfully",
            "The {$name} Deleted Successfully" => "The {$name} Deleted Successfully",
        ];

        $resourceNewEntries = [
            "{$ucfirst_plural_name}" => "{$ucfirst_plural_name}",
            "View All {$ucfirst_plural_name}" => "View All {$ucfirst_plural_name}",
            "Please enter the {$lowercase_name} you want to add." => "Please enter the {$lowercase_name} you want to add.",
        ];

        // دمج القيم الجديدة مع المحتوى القديم
        $updatedBaseJson = array_merge($baseJson, $baseNewEntries);
        $updatedResourceJson = array_merge($resourceJson, $resourceNewEntries);

        // تحديث الملفات مع تنسيق JSON
        $filesystem->put($base_path, json_encode($updatedBaseJson, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        $filesystem->put($resource_path, json_encode($updatedResourceJson, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

        $this->info("Localization entries for '{$name}' added successfully to both lang/en.json and js/lang/en.json!");
    }

    private function addResourceRouteToWeb($name, Filesystem $filesystem)
    {
        $path = base_path('routes/web.php');
        $lowercase_name = strtolower((string) $name);

        $stub = <<<PHP
            \n  use App\Http\Controllers\\{$name}Controller;
            \n Route::resource('{$lowercase_name}',{$name}Controller::class);
PHP;

        $filesystem->append($path, $stub);
    }

    private function createModel_migration($name, Filesystem $filesystem)
    {

        $this->call('make:model', ['name' => $name, '--migration' => true]);

    }

    private function createStoreRequest($name, Filesystem $filesystem)
    {
        $directory = app_path('Http/Requests');
        $path = "{$directory}/Store{$name}Request.php";

        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }

        $stub = <<<PHP
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Store{$name}Request extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            //
        ];
    }
}
PHP;

        $filesystem->put($path, $stub);
    }

    private function createUpdateRequest($name, Filesystem $filesystem)
    {
        $directory = app_path('Http/Requests');
        $path = "{$directory}/Update{$name}Request.php";

        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }

        $stub = <<<PHP
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Update{$name}Request extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            //
        ];
    }
}
PHP;

        $filesystem->put($path, $stub);
    }

    private function createRepository($name, Filesystem $filesystem)
    {
        $directory = app_path('Repositories');
        $path = "{$directory}/{$name}Repository.php";

        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }

        $stub = <<<PHP
<?php

namespace App\Repositories;

use App\Models\\{$name};

class {$name}Repository
{
    public function __construct(protected {$name} \${$name}Model) {}

    public function getAll()
    {
        return \$this->{$name}Model->all();
    }

    public function find(int \$id)
    {
        return \$this->{$name}Model->findOrFail(\$id);
    }

    public function addOne(array \$data)
    {
        return \$this->{$name}Model->create(\$data);
    }

    public function updateOne(int \$id, array \$data)
    {
        return \$this->{$name}Model->findOrFail(\$id)->update(\$data);
    }

    public function deleteOne(int \$id)
    {
        return \$this->{$name}Model->findOrFail(\$id)->delete();
    }
}
PHP;

        $filesystem->put($path, $stub);
    }

    private function createService($name, Filesystem $filesystem)
    {
        $directory = app_path('Services');
        $path = "{$directory}/{$name}Service.php";

        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }

        $stub = <<<PHP
<?php

namespace App\Services;

use App\Repositories\\{$name}Repository;

class {$name}Service
{
    public function __construct(protected {$name}Repository \${$name}Repository) {}

    public function showAll()
    {
        return \$this->{$name}Repository->getAll();
    }

    public function store(array \$data)
    {
        return \$this->{$name}Repository->addOne(\$data);
    }

    public function find(\$id)
    {
        return \$this->{$name}Repository->find(\$id);
    }

    public function update(\$id, array \$data)
    {
        return \$this->{$name}Repository->updateOne(\$id, \$data);
    }

    public function delete(\$id)
    {
        return \$this->{$name}Repository->deleteOne(\$id);
    }
}
PHP;

        $filesystem->put($path, $stub);
    }

    private function createVueFiles($name, $filesystem)
    {

        $this->createVueFormFields($name, $filesystem);
        $this->createVueTableColumns($name, $filesystem);
        $this->createVueTableActions($name, $filesystem);
        $this->createVuePage($name, $filesystem);
        $this->createVueTypes($name, $filesystem);
    }

    private function createVueFormFields($name, $filesystem)
    {
        $directory = resource_path("js/Components/{$name}/form");
        $filePath = "{$directory}/fields.vue";
        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }

        $stub = <<<'VUE'
    <script setup lang="ts">
    import {
      Form,
      FormControl,
      FormDescription,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
    } from '@/Components/ui/form'
    
    import { Input } from '@/Components/ui/input'
    
    const props = defineProps<{
      form: any
    }>();
    </script>
    
    <template>
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>{{$t('Name')}}</FormLabel>
          <FormControl>
            <Input v-model="form.name" type="text" :placeholder="$t('Enter Name')" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </template>
    VUE;

        $filesystem->put($filePath, $stub);
    }

    private function createVueTableColumns($name, $filesystem)
    {
        $directory = resource_path("js/Components/{$name}/table");
        $filePath = "{$directory}/columns.ts";
        $lowercase_name = strtolower((string) $name);
        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }
        $stub = <<<TS
    import { {$name} } from '@/types/{$name}'
    import DropdownAction from '@/Components/{$name}/table/actions.vue'
    import { ColumnDef } from '@tanstack/vue-table'
    import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
    
    import { h } from 'vue'
    import { Button } from '@/Components/ui/button'
    export function getColumns(t): ColumnDef<{$name}>[] {return [
      {
        accessorKey: 'name',
        header: ({ column }) => {
          return h(Button, {
            variant: 'ghost',
            onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
          }, () => [t('Name'), h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
        },
      },
      {
        header: () => t("Actions"),
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
          const {$lowercase_name} = row.original
          return h('div', { class: 'relative' }, h(DropdownAction, {
            {$lowercase_name},
          }))
        },
      },
    ]
    }
    TS;

        $filesystem->put($filePath, $stub);
    }

    private function createVueTableActions($name, $filesystem)
    {
        $directory = resource_path("js/Components/{$name}/table");
        $filePath = "{$directory}/actions.vue";
        $lowercase_name = strtolower((string) $name);
        $plural_name = Str::plural(strtolower((string) $name));
        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }
        $stub = <<<VUE
    <script setup lang="ts">
    import { Button } from '@/Components/ui/button'
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu'
    
    import Toaster from '@/Components/ui/toast/Toaster.vue';
    import {useDelete} from '@/Composables/actions/delete';
    import {useEdit} from '@/Composables/actions/edit';
    
    import { MoreHorizontal } from 'lucide-vue-next'
    import { inject } from "vue";
    
    defineProps<{
      {$lowercase_name}: {
        id: number
      }
    }>()
    
    const form = inject("formModal");
    
    const onEdit =(id:number) => useEdit(route('{$lowercase_name}.edit', id),route('{$lowercase_name}.update',id),form)
    
    const onDelete = (id:number) => useDelete('{$lowercase_name}.destroy',id,["{$plural_name}"])
    </script>
    
    <template>
      <Toaster />
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" class="w-8 h-8 p-0">
            <span class="sr-only">Open menu</span>
            <MoreHorizontal class="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>{{\$t('Actions')}}</DropdownMenuLabel>
          <DropdownMenuItem>
            <a @click.prevent="onEdit({$lowercase_name}.id)">{{\$t('Edit')}}</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a @click.prevent="onDelete({$lowercase_name}.id)">{{\$t('Delete')}}</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </template>
    VUE;

        $filesystem->put($filePath, $stub);
    }

    private function createVuePage($name, $filesystem)
    {
        $directory = resource_path("js/Pages/{$name}");
        $filePath = "{$directory}/index.vue";
        $lowercase_name = strtolower((string) $name);
        $plural_name = Str::plural(strtolower((string) $name));
        $ucfirst_plural_name = ucfirst($plural_name);
        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }
        $stub = <<<VUE
    <script setup lang="ts">
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, usePage } from '@inertiajs/vue3';
    import Modal from '@/Components/form/modal.vue';
    import { {$name} } from '@/types/{$name}';
    import { getColumns } from '@/Components/{$name}/table/columns';
    import DataTable from '@/Components/DataTable.vue';
    import FormFields from '@/Components/{$name}/form/fields.vue';
    
    import { onMounted, ref, watch, provide, computed } from 'vue'
    import { watchEffect } from 'vue';
    import { toast } from '@/Components/ui/toast';
    import { reactive } from 'vue';
    import * as z from 'zod'
    import {useI18n} from 'vue-i18n'
    
    const {t}=useI18n();
    const Schema = z.object({
      name: z.string({message: t('Please enter the {$lowercase_name} you want to add.')}).min(2).max(80),
    })
    
    const defaultFormStructure = {
      href: route("{$lowercase_name}.store"),
      data: {
        name: null,
        id: null,
      },
      method: "post",
      open: false,
    }
    
    const formModal = reactive({ ...defaultFormStructure });
    provide("formModal", formModal);
    
    const inProgress = ref(false);
    provide("inProgress", inProgress);
    
    const props = defineProps({ {$plural_name}: Array<{$name}>, message: String })
    
    const data = ref<{$name}[]>(props.{$plural_name})
    
    watch(() => props.{$plural_name}, (new{$ucfirst_plural_name}) => {
      data.value = new{$ucfirst_plural_name}
    })
    
    const page = usePage()
    const message = computed(() => page.props.message as string | undefined)
    
    if (message.value) {
      toast({ title: message.value })
    }
    </script>
    
    <template>
      <Head :title="\$t('View All {$ucfirst_plural_name}')" />
      <AuthenticatedLayout :breadcrumb-titles="[{ title: \$t('{$ucfirst_plural_name}') },]">
        <template #header>
          <Modal name="{$name}" :default="defaultFormStructure" :schema="Schema" v-slot="{ form }">
            <FormFields :form="form" />
          </Modal>
        </template>
        <div class="container-fluid py-10 mx-20 ">
          <DataTable :in-progress="inProgress" :columns="getColumns(t)" :data="data" />
        </div>
      </AuthenticatedLayout>
    </template>
    VUE;

        $filesystem->put($filePath, $stub);
    }

    private function createVueTypes($name, $filesystem)
    {
        $directory = resource_path('js/types');
        $filePath = "{$directory}/{$name}.ts";
        if (! $filesystem->exists($directory)) {
            $filesystem->makeDirectory($directory, 0755, true);
        }
        $stub = <<<TS
    export interface {$name} {
        id: number;
        name: string;
    }
    TS;

        $filesystem->put($filePath, $stub);
    }
}
