export const Home = () => {
  return (
    <section className="home-section">
      <div className="latest-posts">
        <div className="posts">
          <img src="../src/assets/images/workout1.jpg" alt="" />
          <img src="../src/assets/images/workout2.jpg" alt="" />
          <img src="../src/assets/images/workout3.jpg" alt="" />
          <img src="../src/assets/images/workout4.jpg" alt="" />
        </div>
        <article>
          <h2>Mina senaste inlägg.</h2>
          <p>Här är mina senaste inlägg från instagram.</p>
        </article>
      </div>
      <div className="quote">
        <h2 className="quote-one">
          "Att våga är att förlora fotfästet för en stund,
        </h2>
        <h2 className="quote-two">att inte våga är att förlora sig själv!"</h2>
        <p>- kierkegaard</p>
      </div>
      <div className="latest-recipes">
        <h2>Latest recipes</h2>
        <div className="recipes">
          <img src="../src/assets/images/recipe1.jpg" alt="" />
          <img src="../src/assets/images/recipe2.jpg" alt="" />
          <img src="../src/assets/images/recipe3.jpg" alt="" />
          <img src="../src/assets/images/recipe4.jpg" alt="" />
          <img src="../src/assets/images/recipe5.jpg" alt="" />
          <img src="../src/assets/images/recipe6.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Home;
