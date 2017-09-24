var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
      // remember you can only return one "root" element (in this case, a 'div')
      <div>
        <div>
          <div>
            <Nav/>
            <p>Main.jsx Rendered</p>
            {props.children}
          </div>
        </div>
      </div>
      // adding 'this.props.children' tells Main where to place children components
  );
};

module.exports = Main;
