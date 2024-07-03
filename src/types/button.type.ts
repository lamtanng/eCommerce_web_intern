export default interface ButtonProps {
  text: string;
  variant?: 'text' | 'outlined' | 'contained';
  type?: HTMLButtonElement['type'];
}
