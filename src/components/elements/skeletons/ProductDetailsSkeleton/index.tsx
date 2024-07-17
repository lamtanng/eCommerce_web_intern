import ContentLoader from 'react-content-loader';

export default function ProductDetailsSkeleton() {
  return (
    <div className="ml-56 mt-24 w-full">
      <ContentLoader height={400} className="scale-150 w-full mx-auto">
        <circle cx="472" cy="159" r="7" />
        <rect x="487" y="154" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="190" r="7" />
        <rect x="487" y="184" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="219" r="7" />
        <rect x="487" y="214" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="249" r="7" />
        <rect x="487" y="244" rx="5" ry="5" width="220" height="10" />
        <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
        <rect x="229" y="300" rx="0" ry="0" width="0" height="0" />
        <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
        <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
       
        <rect x="194" y="329" rx="0" ry="0" width="0" height="0" />
        <rect x="192" y="323" rx="0" ry="0" width="0" height="0" />
        <rect x="185" y="323" rx="0" ry="0" width="0" height="0" />
        <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
        <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
        <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
        <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />
        <rect x="798" y="135" rx="0" ry="0" width="0" height="0" />
        <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />
        <rect x="470" y="99" rx="0" ry="0" width="70" height="30" />
        <rect x="560" y="99" rx="0" ry="0" width="70" height="30" />
      </ContentLoader>
    </div>
  );
}
