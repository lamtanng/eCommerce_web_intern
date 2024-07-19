import { CardMedia } from '@mui/material';
import { Row } from '@tanstack/react-table';
import ImageDefault from '../../../../assets/product_default.jpg';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import InputFileUpload from '../../../../components/elements/buttons/FileUploadButton';
import { ProductProps } from '../../../../types/product.type';

export function ImageButton({ row }: { row: Row<ProductProps> }) {
  const { id, picture, urlName } = row.original;
  return (
    <DialogFormButton
      dialogButton={
        <CardMedia
          component="img"
          className="aspect-square w-16 transform transition-transform duration-200 ease-in-out hover:scale-110"
          alt={row.original.name}
          image={`http://${row.original.picture}`}
          ref={(img) => (img = img)}
          onError={(e) => (e.currentTarget.src = ImageDefault)}
        />
      }
    >
      <InputFileUpload id={id} oldPicture={picture} discountPercentage={0} url={urlName} />
    </DialogFormButton>
  );
}
