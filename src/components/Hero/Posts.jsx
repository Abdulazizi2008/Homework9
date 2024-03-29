import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <div className="posts">
        <div className="title">
          <h1>Our Latest Posts</h1>
          <form>
            <input required type="search" placeholder="Search" id="search" />
            <button htmlFor="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <linearGradient
                  id="SVGID_1_"
                  x1="34.598"
                  x2="15.982"
                  y1="15.982"
                  y2="34.598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#60e8fe" />
                  <stop offset=".033" stop-color="#6ae9fe" />
                  <stop offset=".197" stop-color="#97f0fe" />
                  <stop offset=".362" stop-color="#bdf5ff" />
                  <stop offset=".525" stop-color="#dafaff" />
                  <stop offset=".687" stop-color="#eefdff" />
                  <stop offset=".846" stop-color="#fbfeff" />
                  <stop offset="1" stop-color="#fff" />
                </linearGradient>
                <path
                  fill="url(#SVGID_1_)"
                  d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164	S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331	c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"
                />
                <path
                  fill="none"
                  stroke="#10cfe3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0	l-4.331-4.331"
                />
                <path
                  fill="none"
                  stroke="#10cfe3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"
                />
                <path
                  fill="none"
                  stroke="#10cfe3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="cards">
          {posts.map((post) => (
            <div className="card">
              <div className="card-img"></div>
              <p className="id">ID: {post.id}</p>
              <h5>{post.body}</h5>
              <p className="data">Floyd Miles 3 Days Ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
