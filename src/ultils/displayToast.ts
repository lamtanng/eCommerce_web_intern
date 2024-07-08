import { toast } from 'react-toastify';

export const displaySuccess = (content: string | undefined) => {
  toast.success(content);
};
export const displayError = (content: string | undefined) => {
  toast.error(content);
};
