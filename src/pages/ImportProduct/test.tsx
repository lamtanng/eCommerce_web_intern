import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { ProductFormSchema } from '../../types/product.type';
import * as Yup from 'yup';

const defaultValues = [
  { name: 'a', email: 'a@gmail.com' },
  { name: 'b', email: 'b@gmail.com' },
  { name: 'c', email: 'c@gmail.com' },
];

const validationSchema = Yup.object().shape({
  rows: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
  ),
});
interface Person extends Yup.InferType<typeof validationSchema> {}

export default function Test() {
  const { control, handleSubmit, register } = useForm({
    // resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'rows',
    control,
  });

  console.log('fields', fields);

  const onSubmit = (data) => console.log(data);

  const handleAddAll = () => {
    fields.forEach(() => append({ name: '', email: '' }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((row, index) => (
        <div key={row.id}>
          <input type="text" {...register(`rows.${index}.name`)} placeholder="Name" />
          <input type="email" {...register(`rows.${index}.email`)} placeholder="Email" />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddAll}>
        Add All
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
