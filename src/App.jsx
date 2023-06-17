import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Button } from './components/Button/Button';
import { Loader } from './components/Loader/Loader';
import { Modal } from './components/Modal/Modal';
import { useImageGalleryContext } from './components/ImageGalleryContext/ImageGalleryContext';

const App = () => {
  const { images, actualPage, lastPage, modalIsOpen, hasError, isLoading } =
    useImageGalleryContext();

  //On App error
  if (hasError) {
    return <h1>Something went wrong, please try again later, or contact the service :(</h1>;
  }

  // App run with no error
  return (
    <>
      <Searchbar />
      <ImageGallery />
      {actualPage !== lastPage && images.length > 0 && !isLoading ? <Button /> : null}
      {isLoading && <Loader />}
      {modalIsOpen && <Modal />}
    </>
  );
};

export default App;
