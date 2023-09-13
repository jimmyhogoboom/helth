import { toast } from '@zerodevx/svelte-toast';
import ConfirmDialog from '$lib/misc/ConfirmDialog.svelte';

export const success = message => toast.push(message, {
  duration: 3000,
  theme: {
    '--toastColor': 'mintcream',
    '--toastBackground': 'rgba(72,187,120,0.9)',
    '--toastBarBackground': '#2F855A',
    '--toastBarHeight': 0
  }
});

export const error = message => toast.push(message, {
  duration: 3000,
  theme: {
    '--toastBackground': '#F25E5E',
    '--toastColor': 'white',
    '--toastBarHeight': 0
  }
});


export const info = message => toast.push(message, {
  duration: 3000,
  theme: {
    '--toastBackground': '#3783F9',
    '--toastColor': 'white',
    '--toastBarHeight': 0
  }
});

export const confirmDialog = ( message, confirm, deny ) => {
    toast.push({
      component: {
        src: ConfirmDialog,
        props: {
          message: message,
          callbackConfirm: confirm,
          callbackDeny: deny,
        }
      },
      dismissable: false,
      initial: 0,
      theme: {
        '--toastBackground': '#3783F9',
        '--toastColor': 'white',
        '--toastBarHeight': '0'
      },
    });
}
