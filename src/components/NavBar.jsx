function NavBar({ currentCardIndex, setCurrentCardIndex, CardList }) {
  const handleClickPrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleClickNext = () => {
    if (currentCardIndex < CardList.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <>
      <button onClick={handleClickPrev} disabled={currentCardIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleClickNext}
        disabled={currentCardIndex === CardList.length - 1}
      >
        Suivant
      </button>
    </>
  );
}

export default NavBar;
