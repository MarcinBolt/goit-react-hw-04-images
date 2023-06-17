import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, src, alt, data, onClick }) => {
  return (
    <li className={css.item}>
      <img
        className={css.itemImage}
        id={id}
        src={src}
        alt={alt}
        data-source={data}
        onClick={onClick}
      ></img>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
