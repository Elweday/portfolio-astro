import { atom } from 'nanostores';



const store = atom<string[]>([]);

const check = (name: string) => {store.set([...store.get(), name])}
const uncheck = (name: string) => {store.set(store.get().filter(c => c !== name))}
const toggle = (name: string) => store.get().includes(name) ? uncheck(name) : check(name)
const get = () => store.get()
const reset = () => store.set([])
export const $items = {
    store,
    get,
    check,
    uncheck,
    toggle,
    reset

}


