import { useImageGalleryContext } from '../ImageGalleryContext/ImageGalleryContext';
import css from './Button.module.css';

export const Button = () => {
  const { incrementActualPage } = useImageGalleryContext();

  return (
    <div className={css.wrapper}>
      <button type="button" onClick={incrementActualPage} className={css.button}>
        Load more
      </button>
    </div>
  );
};
