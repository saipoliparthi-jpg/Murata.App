const Home = ({ userName, media, setMedia }) => {
  const changeMedia = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMedia(imageUrl);
    }
  };

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${
          media ||
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        })`,
      }}
    >
      <h1>Welcome to {userName}</h1>

      <input type="file" onChange={changeMedia} />
    </div>
  );
};

export default Home;