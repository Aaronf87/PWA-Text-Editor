const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
event.preventDefault();
const deferredPrompt = event;
butInstall.addEventListener('click',()=>
deferredPrompt.prompt());
deferredPrompt.userChoice
.then((choiceResult) => {
if (choiceResult.outcome === 'accepted') {
console.log('User accepted the install prompt');
} else {
console.log('User dismissed the install prompt');
}
deferredPrompt = null;

});
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
