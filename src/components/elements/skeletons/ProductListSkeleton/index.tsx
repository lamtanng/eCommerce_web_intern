import ContentLoader from 'react-content-loader';

export default function ProductListSkeleton() {
  return (
    <div className="">
      <ContentLoader height={150} width={480} backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
        <rect x="0" y="14" rx="3" ry="3" width="135" height="135" />
        <rect x="153" y="14" rx="3" ry="3" width="340" height="23" />
        <rect x="153" y="40" rx="3" ry="3" width="280" height="10" />
        <rect x="153" y="55" rx="3" ry="3" width="280" height="10" />
        <rect x="153" y="70" rx="3" ry="3" width="280" height="10" />
        <rect x="153" y="85" rx="3" ry="3" width="74" height="10" />
        <rect x="153" y="115" rx="0" ry="0" width="140" height="30" />
      </ContentLoader>
    </div>
  );
}
