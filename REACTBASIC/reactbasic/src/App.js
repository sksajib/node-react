// import { useState } from "react";
// const App = () => {
//   const [users, setUsers] = useState([]);
//   const fetchUserData = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "GET",
//     })
//       .then((Response) => {
//         return Response.json();
//       })
//       .then((data) => setUsers(data))
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div className="container">
//       {/* <pre>{JSON.stringify(users)}</pre> */}
//       {users &&
//         users.map((user) => (
//           <div className="alert alert-primary" key="user.id">
//             <div>{user.title}</div>
//             <div>{user.body}</div>
//           </div>
//         ))}
//       <button onClick={fetchUserData} className="btn btn-success">
//         Fetch User data
//       </button>
//     </div>
//   );
// };
// export default App;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("STATE=>", email, password);
//   };

//   return (
//     <div className="container">
//       <h1 className="display-4 text-center">Learning React</h1>
//       <br />

//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">email address</label>
//               <input
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 type="email"
//                 className="form-control"
//               />
//               <div className="form-text">
//                 We'll Never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 type="password"
//                 className="form-control"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/Button";
import { List } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostData();
  }, []);
  const fetchUserData = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:3020/api/users")
      .then(({ data }) => setUsers(data.GF))
      .catch((err) => console.log(err));
    //   fetch(`http://localhost:3020/api/users`, {
    //     method: "GET",
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => setUsers(data.GF))
    //     .catch((err) => console.log(err));
  };
  // jsonplaceholder.typicode.com/posts
  const fetchPostData = () => {
    axios
      .get("http://localhost:3003")
      .then(({ data }) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "GET",
    // })
    //   .then((Response) => {
    //     return Response.json();
    //   })
    //   .then((data) => setPosts(data))
    //   .catch((err) => console.log(err));
  };
  if (loading) {
    return (
      <LoadingOutlined
        className="display-1 text-danger  d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      />
    );
  }
  return (
    <div className="container">
      {/* <pre>{JSON.stringify(users.GF)}</pre> */}
      <div>
        <h2 className="display-4">Full Stack development</h2>
        <hr
          style={{ height: "5px", border: "none", backgroundColor: "#FF0000" }}
        ></hr>
      </div>
      <Button handleClick={fetchUserData} title="Fetch User Data" />
      <div className="mb-3">
        <button onClick={fetchUserData} className="btn btn-success">
          Fetch User Data
        </button>
      </div>

      {/* <div className="mb-3">
        <button onClick={fetchPostData} className="btn btn-primary">
          Fetch Post Data
        </button>
      </div> */}
      {users &&
        users.map((user) => (
          <div className="alert alert-primary" key={user.id}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.text}</div>
          </div>
        ))}
      {posts &&
        posts.map((user) => (
          <div className="alert alert-primary" key={user._id}>
            <div>{user._id}</div>
            <div>{user.title}</div>
            <div>{user.body}</div>
          </div>
        ))}
      <List
        bordered
        dataSource={posts}
        renderItem={(Item) => (
          <div>
            <List.Item>{Item.title}</List.Item>
            <List.Item>{Item.body}</List.Item>
          </div>
        )}
      />
    </div>
  );
};

export default App;
