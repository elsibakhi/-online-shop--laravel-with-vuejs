import { toast } from '@/components/ui/toast';
import { router } from '@inertiajs/vue3';
import { useConfirmStore } from '@/Stores/confirm';

export async function useDeleteMultiRows(url: string, ids: number[],t:Function, partialReloadData?: string[]): Promise<boolean> {
    const confirmStore = useConfirmStore();
    const only_data: string[] = ["message"];

    if (partialReloadData) {
        only_data.push(...partialReloadData);
    }

    confirmStore.changeVisibility(true);

    return new Promise((resolve) => {
        const unsubscribe = confirmStore.$onAction(({ name, store, after }) => {
            if (name === "changeStatus") {
                after((res) => {
                    if (confirmStore.isConfirmed) {
                        if (ids.length > 0) {
                            router.delete(route(url), {
                                data: { 'ids': ids },
                                onSuccess: () => {
        
                                    resolve(true);
                                },
                                onError: () => {
                                    toast({ title: t('An Error Occurred While Deleting') });
                                    resolve(false);
                                },
                                only: only_data
                            });
                        } else {
                            resolve(false);
                        }
                    } else {
                        store.resetState();
                        resolve(false);
                    }
                    unsubscribe();
                });
            }
        });
    });
}
