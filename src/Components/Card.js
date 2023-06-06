import Icon1 from '../../src/icon-supervisor.svg';
import Icon2 from '../../src/icon-team-builder.svg';
import Icon3 from '../../src/icon-karma.svg';
import Icon4 from '../../src/icon-calculator.svg';

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
        <div className={classes.cyanLine}></div>
        <h3>Supervisor</h3>
        <p className={classes.description}>Monitors activity to identify project roadblocks</p>
        <img src={Icon1} className={classes.icon} />
      </div>
      <div className={classes.secondCard}>
        <div className={classes.redLine}></div>
        <h3>Team Builder</h3>
        <p className={classes.description}>Scans our talent network to create the optimal team for your project</p>
        <img src={Icon2} className={classes.icon} />
      </div>
      <div className={classes.thirdCard}>
        <div className={classes.orangeLine}></div>
        <h3>Karma</h3>
        <p className={classes.description}>Regularly evaluates our talent to ensure quality</p>
        <img src={Icon3} className={classes.icon} />
      </div>
      <div className={classes.fourthCard}>
        <div className={classes.blueLine}></div>
        <h3>Calculator</h3>
        <p className={classes.description}>Uses data from past projects to provide better delivery estimates</p>
        <img src={Icon4} className={classes.icon} />
      </div>
      <div className={classes.whiteSpace}></div>
    </div>
  );
};

export default Card;
