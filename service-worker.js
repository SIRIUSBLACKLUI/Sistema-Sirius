/* SIRIUS v2.22.76 // self-destruct service worker. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>{event.waitUntil((async()=>{try{const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));}catch(_){ }try{await self.registration.unregister();}catch(_){ }try{const cs=await self.clients.matchAll({type:'window',includeUncontrolled:true});await Promise.all(cs.map(c=>c.navigate(c.url)));}catch(_){ }})());});
