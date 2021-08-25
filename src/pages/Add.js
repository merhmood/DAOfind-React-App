import React, { Component } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default class Add extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="add-body">
          <Nav />
          <section>
            <div className="add-header">
              <div className="hyphen-left"></div>
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/plus-1.png`}
                  alt=""
                />
                Add DAO
              </p>
              <div className="hyphen-right"></div>
            </div>
            <form action="">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Category" />
              <input type="text" placeholder="Date Founded" />
              <input type="text" placeholder="Token Symbol" />
              <input type="text" placeholder="Governance Token Name" />
              <input type="text" placeholder="Twitter Handle" />
              <input type="text" placeholder="Discord" />
              <input type="text" placeholder="Website" />
              <input type="text" placeholder="TVL" />
              <input type="text" placeholder="Blockchain" />
              <input type="text" placeholder="Headquaters" />
              <textarea
                name=""
                id=""
                placeholder="Brief Description"
              ></textarea>
              <button>Submit</button>
            </form>
          </section>
          <aside>
            <div className="no-dao__assets">
              <div className="no-of__daos">
                <p className="no-of__daos-header">Number of DAOs</p>
                <div>
                  {" "}
                  <p>
                    111 <span>from 84</span>
                  </p>
                  <p>27</p>
                </div>
              </div>
              <div className="total-assets">
                <p className="total-assets__header">Total Assets (USD)</p>
                <div>
                  <p>
                    $7,747,011,573 <span>from $3,152,000</span>
                  </p>
                  <p>$7,743,859,573</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
