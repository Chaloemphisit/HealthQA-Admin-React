import React from 'react';
import {Link} from 'react-router-dom';

export default class Page404 extends React.Component {
  render() {
    return (
      <div id="main">
        <div class="fof">
          <h1>Error 404</h1>
          <h2><code>{window.location.pathname}</code></h2>
          <h3>Nothing to see here, move along, move along...</h3>
          <Link to="/" className="back404page"><div className="button3">กลับหน้าหลัก</div></Link>
        </div>
      </div>
    );
  }
}