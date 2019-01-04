var React = require("react");
var Link = require("react-router-dom").Link;
class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1> The Battle of Github </h1>
        <h2>Challenge your Friends/Rivals</h2>
        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}

module.exports = Home;
