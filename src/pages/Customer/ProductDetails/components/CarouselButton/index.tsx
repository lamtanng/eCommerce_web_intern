interface CarouselButtonProps {
  handleClick?: () => void;
  icon?: React.ReactNode;
}

export default function CarouselButton({ handleClick, icon }: CarouselButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer border border-solid bg-white px-3 py-2 transition-all duration-200 ease-in-out hover:scale-110`}
    >
      {icon}
    </button>
  );
}
