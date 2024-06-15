// // pages/_app.js
// import { useState, createContext, useContext } from 'react';
// import { useRouter } from 'next/router';

// export const PostsContext = createContext();

// function MyApp({ Component, pageProps }) {
//   const [posts, setPosts] = useState([]);
//   return (
//     <PostsContext.Provider value={{ posts, setPosts }}>
//       <Component {...pageProps} />
//     </PostsContext.Provider>
//   );
// }

// export default MyApp;
