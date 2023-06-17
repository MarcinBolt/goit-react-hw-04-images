import { createContext, useContext, useState, useEffect } from 'react';
import fetchImages from '../../utils/fetchImages';
import PropTypes from 'prop-types';

const ImageGalleryContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useImageGalleryContext = () => useContext(ImageGalleryContext);

export const ImageGalleryProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [actualPage, setActualPage] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [modalImageInfo, setModalImageInfo] = useState({
    imgSrc: null,
    imgAlt: null,
  });

  const setStateOnFormSubmit = query => {
    setQuery(query);
    setActualPage(1);
  };

  const openModal = e => {
    setModalIsOpen(true);

    setModalImageInfo(() => ({
      imgSrc: e.target.dataset['source'],
      imgAlt: e.target.alt,
    }));
  };

  const closeModalOnOutsideClick = e => {
    if (e.target.nodeName !== 'IMG') {
      setModalIsOpen(false);
    }
  };

  const closeModalOnPressEsc = e => {
    if (e.key === 'Escape') {
      setModalIsOpen(false);
    }
  };

  const incrementActualPage = () => {
    setActualPage(actualPage + 1);
  };

  const handleSetImages = response => {
    setImages(response.images);
    setActualPage(response.actualPage);
    setLastPage(response.lastPage);
    setIsLoading(response.isLoading);
  };

  const handleSetError = () => {
    setHasError(true);
  };

  useEffect(() => {
    setHasError(hasError);
  }, [hasError]);

  const handleSetIsLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!(query === '') || actualPage) {
      setIsLoading(true);
      fetchImages(images, query, actualPage, handleSetImages, handleSetError, handleSetIsLoading);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, actualPage]);

  useEffect(() => {
    if (images.length > 12) {
      window.scrollBy({ top: 520, behavior: 'smooth' });
    }
  }, [images.length]);

  return (
    <ImageGalleryContext.Provider
      value={{
        images,
        query,
        actualPage,
        lastPage,
        modalIsOpen,
        hasError,
        isLoading,
        modalImageInfo,
        setStateOnFormSubmit,
        openModal,
        closeModalOnOutsideClick,
        closeModalOnPressEsc,
        incrementActualPage,
        handleSetImages,
        handleSetError,
        handleSetIsLoading,
      }}
    >
      {children}
    </ImageGalleryContext.Provider>
  );
};

ImageGalleryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
