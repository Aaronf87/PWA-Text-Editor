const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event ***DONE?***
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

// TODO: Implement a click event handler on the `butInstall` element ***DONE?***
butInstall.addEventListener('click', async () => {
if(deferredPrompt){
deferredPrompt.prompt();

// wait for the user to respond to the prompt
deferredPrompt.userChoice.then((choiceResult) => {
    if(choiceResult.outcome === "accepted"){
        console.log('User accepted the install')

    }else{
        console.log('User dismissed the install')
    }
    deferredPrompt = null;
});
}
});

// TODO: Add an handler for the `appinstalled` event **done?**
window.addEventListener('appinstalled', (event) => {
console.log('Application installed.')
alert('Application installed.')
});
