import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Technology</h2>
      <p className={classes.intro}>
        Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
        successful
      </p>
      <div className={classes.firstCard}>
        <h3>Supervisor</h3>
        <p className={classes.description}>Monitors activity to identify project roadblocks</p>
      </div>
      <div className={classes.secondCard}>
        <h3>Team Builder</h3>
        <p className={classes.description}>Scans our talent network to create the optimal team for your project</p>
      </div>
      <div className={classes.firstCard}>
        <h3>Karma</h3>
        <p className={classes.description}>Regularly evaluates our talent to ensure quality</p>
      </div>
      <div className={classes.firstCard}>
        <h3>Calculator</h3>
        <p className={classes.description}>Uses data from past projects to provide better delivery estimates</p>
      </div>
    </div>
  );
};

export default Card;
