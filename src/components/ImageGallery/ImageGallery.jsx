import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { useImageGalleryContext } from '../ImageGalleryContext/ImageGalleryContext';

export const ImageGallery = () => {
  const { images, openModal } = useImageGalleryContext();

  return (
    <ul className={css.imageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            src={image.small}
            data={image.large}
            alt={image.alt}
            onClick={openModal}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};
