import { useEffect } from 'react';
import { useImageGalleryContext } from '../ImageGalleryContext/ImageGalleryContext';
import css from './Modal.module.css';

export const Modal = () => {
  const { modalIsOpen, modalImageInfo, closeModalOnOutsideClick, closeModalOnPressEsc } =
    useImageGalleryContext();
  const { imgSrc, imgAlt } = modalImageInfo;

  useEffect(() => {
    if (modalIsOpen) {
      document.addEventListener('keydown', closeModalOnPressEsc);
    }

    return () => {
      document.removeEventListener('keydown', closeModalOnPressEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen]);

  return (
    <div className={css.overlay} onClick={closeModalOnOutsideClick}>
      <div className={css.modal}>
        <img src={imgSrc} alt={imgAlt} className={css.image} />
      </div>
    </div>
  );
};