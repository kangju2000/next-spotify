function Home() {
  return <div></div>;
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const token = req.cookies.access_token || null;
//   if (token) {
//     return {
//       props: { token },
//     };
//   }

//   const response = await postToken();
//   const data = response.data;
//   setToken(data.access_token);

//   return {
//     props: {
//       token: data.access_token,
//     },
//   };
// };

export default Home;
