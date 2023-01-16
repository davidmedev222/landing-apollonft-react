import { useContext } from 'react';
import { GlobalContext } from '../../context/global/GlobalContext';
import { Card } from '../card/Card';
import { CardUser } from '../card/CardUser';
import { Button } from '../button/Button';

const Creations = () => {
  const { creations } = useContext(GlobalContext);

  const { create, creator } = creations;

  const createArticles = create.articles.map((cadaArt) => (
    <Card key={cadaArt.id} {...cadaArt} className={'create-art'} />
  ));

  const creatorUsers = creator.users.map((cadaUser) => (
    <CardUser key={cadaUser.id} {...cadaUser} className={'creator-users'} />
  ));

  return (
    <>
      <section className="create">
        {/* TITLE */}
        <h3 className="create-title">{create.title}</h3>
        {/* ARTICLES */}
        {createArticles}
      </section>
      <section className="creator">
        {/* TITLE */}
        <h3 className="creator-title">{creator.title}</h3>
        {/* USERS */}
        {creatorUsers}
        {/* BUTTON */}
        <Button>{creator.button}</Button>
      </section>
    </>
  );
};

export { Creations };
