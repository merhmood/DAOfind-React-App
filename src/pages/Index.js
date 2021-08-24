import React, { useContext } from "react";
import Header from "../components/Header";
import { dataSort } from "../controllers/dataSort";
import { AppContext } from "../components/AppContext";
import Nav from "../components/Nav";
import { filterSizeLogic } from "../controllers/filterSizeLogic";
import { search } from "../controllers/search";

const Index = () => {
  const { appStateManager, dispatch } = useContext(AppContext);
  const { daoList, filter, searchValue } = appStateManager;
  const { bool, showId } = appStateManager.showDao;
  let daoListDisplayData = "";

  // toggle display data between filtered and non Filtered

  if (filter.data.length > 0 && filter.name !== "") {
    daoListDisplayData = filter.data;
  } else if (filter.data.length === 0 && filter.name === "All") {
    daoListDisplayData = daoList;
  } else if (filter.data.length === 0 && filter.name !== "") {
    daoListDisplayData = "";
  } else {
    daoListDisplayData = daoList;
  }

  daoListDisplayData = search(filter, searchValue, daoList);

  let filterSize = filterSizeLogic(daoListDisplayData);

  console.log(filter.data.length, filter.name, daoList.length);
  return (
    <div className="index" style={filterSize}>
      <Header />
      <div className="body">
        <Nav />
        <section>
          <div className="trophy">
            <div className="hyphen-left"></div>
            <img src={`${process.env.PUBLIC_URL}/assets/trophy.png`} alt="" />
            <p>DAO Leaderboard</p>
            <div className="hyphen-right"></div>
          </div>
          <div className="table-head">
            <p className="name-head">Name A-Z</p>
            <p>Aum</p>
            <p>Members</p>
            <p>Chain</p>
            <p>Category</p>
            <p></p>
          </div>
          <div></div>
          {daoListDisplayData === "" || daoListDisplayData.length === 0 ? (
            <p>No DAO List Available</p>
          ) : (
            daoListDisplayData.map((item) => {
              const { id, img, name, category, aum, twl, foundDate } = item;
              return (
                <div
                  key={id}
                  className={
                    bool && showId === id ? "daolist-open" : "daolist-close"
                  }
                >
                  <div
                    className="daolist-open__wrapper"
                    onClick={() => dispatch({ type: "SHOW-TOGGLER", id })}
                  >
                    <p className="name">
                      <img src={img} alt="" />
                      {name}
                    </p>
                    <p>{aum}</p>
                    <p className="member">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/user (2).png`}
                        alt=""
                      />
                      23
                    </p>
                    <p className="ethereum">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/ethereum.png`}
                        alt=""
                      />
                      Etherum
                    </p>
                    <p>{category}</p>
                    <p>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/browser.png`}
                        alt=""
                      />
                    </p>
                  </div>
                  {bool && showId === id && (
                    <div className="details">
                      <div className="border-left"></div>
                      <div className="details-heading__wrapper">
                        <div
                          className="details-heading"
                          style={{ cursor: "text" }}
                        >
                          <div
                            className="social-icons"
                            style={{ cursor: "default" }}
                          >
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/heart.png`}
                              alt=""
                            />
                            100{" "}
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/twitter.png`}
                              alt=""
                            />
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/send.png`}
                              alt=""
                            />
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/github.png`}
                              alt=""
                            />
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/google-docs (1).png`}
                              alt=""
                            />
                          </div>
                          <div className="date">
                            <p>{foundDate}</p>
                          </div>
                          <div className="recent-proposal">
                            <p>Recent Proposals</p>
                            <div className="recent-proposal__hypen"></div>
                          </div>
                        </div>
                        <div className="details-paragraph">
                          <div className="details-paragraph__wrapper">
                            <p>
                              Ad veniam deserunt eu sint nostrud occaecat
                              excepteur qui. Pariatur exercitation esse est
                              cillum ad sint velit in ipsum quis ea deserunt.
                              Eiusmod voluptate qui proident sint quis. Id ex
                              minim veniam ullamco exercitation dolor nisi
                              ullamco. Officia laborum id dolore ex fugiat
                              tempor.
                            </p>
                            <p>
                              Culpa magna fugiat ad elit. Adipisicing dolore
                              mollit consequat non reprehenderit laboris esse
                              incididunt commodo fugiat anim officia. Incididunt
                              voluptate id laborum dolor eu enim dolor ipsum
                              officia. Cillum consequat cupidatat ea laboris
                              amet eu dolore eiusmod excepteur ut laboris eu.
                              Enim nulla ea minim nisi ullamco mollit duis
                              commodo qui irure ipsum officia. Cupidatat ullamco
                              est exercitation tempor ea minim. Ipsum fugiat
                              velit exercitation dolor.
                            </p>
                            <div>
                              <p>Members (23)</p>
                              <p>Twitter followers ({twl})</p>
                            </div>
                            <div className="wallet-address">
                              <div className="wallet-address__wrapper">
                                <div className="image">
                                  <img
                                    src={`${process.env.PUBLIC_URL}/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg`}
                                    alt=""
                                  />
                                </div>
                                <div className="address">
                                  <p>0x122990820947765747736647553</p>
                                  <p>Since 02/13/2020</p>
                                </div>
                              </div>
                              <div className="wallet-address__wrapper">
                                <div className="image">
                                  <img
                                    src={`${process.env.PUBLIC_URL}/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg`}
                                    alt=""
                                  />
                                </div>
                                <div className="address">
                                  <p>0x122990820947765747736647553</p>
                                  <p>Since 02/13/2020</p>
                                </div>
                              </div>
                            </div>
                            <p className="member-load__more">load more</p>
                          </div>
                          <div className="recent-proposal__wrapper">
                            <div className="add-enzyme">
                              <p>Add Enzyme Vault for {name}</p>
                              <p>
                                0xxx...12{" "}
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg`}
                                  alt=""
                                />
                              </p>
                            </div>
                            <div className="test-proposal">
                              <p>Test Propsal To Go Here What...</p>
                              <p>
                                0xxx...12{" "}
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg`}
                                  alt=""
                                />
                              </p>
                            </div>
                            <div className="voting-dao__section">
                              <div className="voting-dao__thead">
                                <p>Voting Process</p>
                                <p>DAO Structure</p>
                              </div>
                              <div className="voting-dao__body">
                                <p>Single, Quadratic</p>
                                <p>Shares, Governance</p>
                              </div>
                              <div className="voting-dao__body">
                                <p>Off-Chain</p>
                                <p>Token, Social Tokens</p>
                              </div>
                            </div>
                            <div className="founding-member">
                              <div className="founding-member__wrapper">
                                <p>Founding Members</p>
                                <div className="founding-member__head-hypen"></div>
                              </div>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg`}
                                alt=""
                              />
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg`}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mint-dao__member">
                          <button>Mint Your DAO Membership As NFT</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
          {filter.name === "" ||
            (filter.name === "All" && (
              <p
                className="load-more"
                onClick={() => dispatch({ type: "LOAD-MORE", dataSort })}
              >
                Load More
              </p>
            ))}
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
          <div className="daos-filter">
            <div>
              <p
                onClick={() =>
                  dispatch({ type: "FILTER", name: "All", dataSort })
                }
                style={
                  filter.name === "All"
                    ? { backgroundColor: "#4cb8ff", color: "white" }
                    : {}
                }
              >
                All
              </p>
              <p
                onClick={() =>
                  dispatch({ type: "FILTER", name: "Protocol", dataSort })
                }
                style={
                  filter.name === "Protocol"
                    ? { backgroundColor: "#4cb8ff", color: "white" }
                    : {}
                }
              >
                Protocol
              </p>
              <p
                onClick={() =>
                  dispatch({ type: "FILTER", name: "Service", dataSort })
                }
                style={
                  filter.name === "Service"
                    ? { backgroundColor: "#4cb8ff", color: "white" }
                    : {}
                }
              >
                Service
              </p>
              <p
                onClick={() =>
                  dispatch({ type: "FILTER", name: "Grant", dataSort })
                }
                style={
                  filter.name === "Grant"
                    ? { backgroundColor: "#4cb8ff", color: "white" }
                    : {}
                }
              >
                Grant
              </p>
              <p
                onClick={() =>
                  dispatch({ type: "FILTER", name: "Media", dataSort })
                }
                style={
                  filter.name === "Media"
                    ? { backgroundColor: "#4cb8ff", color: "white" }
                    : {}
                }
              >
                Media
              </p>
              <p
                onClick={() =>
                  dispatch({ type: "FILTER", name: "Social", dataSort })
                }
                style={
                  filter.name === "Social"
                    ? { backgroundColor: "#4cb8ff", color: "white" }
                    : {}
                }
              >
                Social
              </p>
              <p
                onClick={() =>
                  dispatch({ type: "FILTER", name: "Investment", dataSort })
                }
                style={
                  filter.name === "Investment"
                    ? { backgroundColor: "#4cb8ff", color: "white" }
                    : {}
                }
              >
                Investment
              </p>
              <p
                onClick={() =>
                  dispatch({ type: "FILTER", name: "Platform", dataSort })
                }
                style={
                  filter.name === "Platform"
                    ? { backgroundColor: "#4cb8ff", color: "white" }
                    : {}
                }
              >
                Platform
              </p>
              <p
                onClick={() =>
                  dispatch({ type: "FILTER", name: "Collector", dataSort })
                }
                style={
                  filter.name === "Collector"
                    ? { backgroundColor: "#4cb8ff", color: "white" }
                    : {}
                }
              >
                Collector
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Index;
