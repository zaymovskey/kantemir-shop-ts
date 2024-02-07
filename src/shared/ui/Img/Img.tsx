import {
  type FC,
  type ImgHTMLAttributes,
  type ReactNode,
  useEffect,
  useState
} from 'react';

interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  skeleton: ReactNode;
}
export const Img: FC<IImageProps> = ({
  className,
  src,
  skeleton,
  ...defaultImageProps
}) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <>
      {imageSrc !== '' ? (
        <img src={imageSrc} className={className} {...defaultImageProps} alt='' />
      ) : (
        <>{skeleton}</>
      )}
    </>
  );
};
