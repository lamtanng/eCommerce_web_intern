import { toast } from 'react-toastify';

export const displaySuccess = (content: string) => {
  toast.success(content);
};
export const displayError = (content: string) => {
  toast.error(content);
};
