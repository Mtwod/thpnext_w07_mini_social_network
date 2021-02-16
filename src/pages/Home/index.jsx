/* eslint-disable react/jsx-one-expression-per-line */
const Home = () => {
  const title = 'Home';

  return (
    <div className="Home">
      <h1 className="Home__title">{title}</h1>
      <p className="Home__description">Welcome on <strong>M&C Social Network</strong>. This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>
      <p className="TODO">TODO: Add posts</p>
    </div>
  );
};

export default Home;
