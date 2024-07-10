import { MutatingDots } from 'react-loader-spinner';
export default function PageSkeleton() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#4747ff"
      secondaryColor="#4747ff"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  );
}
