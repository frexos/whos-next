import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(props) {
  const favoritesContext = useContext(FavoritesContext);
  const noFavsContent = <h3>You got no Favorites yet... Start adding some?</h3>;
  const content = favoritesContext.favorites.length ? (
    <MeetupList meetups={favoritesContext.favorites}></MeetupList>
  ) : (
    noFavsContent
  );

  return (
    <section>
      <h2>Favorites Page</h2>
      {content}
    </section>
  );
}

export default FavoritesPage;
