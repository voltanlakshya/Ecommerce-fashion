import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Default toast options (edit to fit your UI)
let defaultOptions = {
  toast: true,
  position: 'top-end',         // top-start | top | top-end | center | bottom-start | bottom | bottom-end
  showConfirmButton: false,
  showCloseButton: false,
  timer: 1800,                 // ms; undefined for sticky
  timerProgressBar: true,
  background: '#088178',
  color: 'white',
};

const createToast = () =>
  Swal.mixin({
    ...defaultOptions,
    didOpen: (el) => {
      el.addEventListener('mouseenter', Swal.stopTimer);
      el.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

let Toast = createToast();

// Update defaults at runtime (optional)
export const configureToast = (opts = {}) => {
  defaultOptions = { ...defaultOptions, ...opts };
  Toast = createToast();
};

// Generic notify
export const notify = (opts = {}) => Toast.fire({ ...opts });

// Handy presets
export const toastSuccess = (title = 'Success', opts = {}) =>
  notify({ icon: 'success', title, ...opts });

export const toastInfo = (title = 'Info', opts = {}) =>
  notify({ icon: 'info', title, ...opts });

export const toastWarn = (title = 'Warning', opts = {}) =>
  notify({ icon: 'warning', title, ...opts });

export const toastError = (title = 'Error', opts = {}) =>
  notify({ icon: 'error', title, ...opts });

// Optional: confirm dialog (not a toast)
export const confirm = (options = {}) =>
  Swal.fire({
    icon: 'question',
    title: options.title || 'Are you sure?',
    text: options.text,
    showCancelButton: true,
    confirmButtonText: options.confirmButtonText || 'Yes',
    cancelButtonText: options.cancelButtonText || 'Cancel',
    reverseButtons: true,
    ...options,
  });

export default { notify, toastSuccess, toastInfo, toastWarn, toastError, configureToast, confirm };