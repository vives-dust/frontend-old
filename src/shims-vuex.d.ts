// import { Store } from '@/store/index.ts';// path to store file

//import { Store } from 'vuex'

// declare module '@vue/runtime-core' {
//   // declare your own store states
//   interface State {
//     currentlySelectedPin: object,
//     devices: object,
//     device: object,
//     time: string,
//     timeData:object
//   }

//   // provide typings for `this.$store`
//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
// }

// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $store: Store;
//   }
// }



import { Store } from 'vuex'
import { State } from './store'

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<State>
	}
}

// Vuex@4.0.0-beta.1 is missing the typing for `useStore`. See https://github.com/vuejs/vuex/issues/1736
declare module 'vuex' {
	export function useStore(key?: string): Store<State>
}
