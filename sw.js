/* SIRIUS v2.22.74 // self-destruct service worker.
   If an older SIRIUS release registered /sw.js, this update removes it and its caches. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    try{const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));}catch(_){ }
    try{await self.registration.unregister();}catch(_){ }
    try{
      const clientsList=await self.clients.matchAll({type:'window',includeUncontrolled:true});
      await Promise.all(clientsList.map(c=>c.navigate(c.url)));
    }catch(_){ }
  })());
});
