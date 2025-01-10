export function createStoragePlugin(storage: Storage): (context: any) => void {
    return (context) => {
        context.store.$subscribe((_mutation: any, state: any) => {
            try {
                storage.setItem(context.store.$id, JSON.stringify(state));
            } catch (error) {
                console.error('Error saving state to localStorage:', error);
            }
        });

        const storedState = storage.getItem(context.store.$id);
        if (storedState) {
            try {
                context.store.$state = JSON.parse(storedState);
            } catch (error) {
                console.error('Error restoring state from localStorage:', error);
            }
        }
    };
}