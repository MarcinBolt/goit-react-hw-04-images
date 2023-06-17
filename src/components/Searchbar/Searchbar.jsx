import css from './Searchbar.module.css';
import notification from '../../utils/notification';
import { useImageGalleryContext } from '../ImageGalleryContext/ImageGalleryContext';

export const Searchbar = () => {
  const { setStateOnFormSubmit } = useImageGalleryContext();

  const handleSubmit = e => {
    e.preventDefault();
    const formDOM = e.currentTarget;
    const query = formDOM.elements.search.value.trim();

    if (!query) {
      notification.notifyEmptyQuery();
      return;
    }

    setStateOnFormSubmit(query);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.formButton}>
          <span className={css.formButtonLabel}>Search</span>
        </button>
        <input
          className={css.formInput}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
