export interface ProductCardImageProps {
  selectedFile?: Blob;
  oldPicture?: string | undefined;
  height?: number | string;
  width?: number | string;
  alt?: string;
  url: string;
  discountPercentage: number;
}
