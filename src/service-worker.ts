//Listen for the skip_waiting event
//this will activate the service worker
/// <reference lib="webworker" />
import { skipWaiting, clientsClaim } from "workbox-core"
self.addEventListener('message', (event) => { 
    console.log(event) 
    //check first if data bestaat zodat app niet crashed zou data geen .type hebbens
    if (event.data && event.data.type === 'SKIP_WAITING') { 
      skipWaiting();  //self.skipXaiting()
    } 
  });