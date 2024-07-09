import { toast } from 'react-toastify';

export const displaySuccess = (content: string | null) => {
  toast.success(content);
};
export const displayError = (content: string | null) => {
  toast.error(content);
};
