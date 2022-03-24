import React from 'react';

export default function HomePage(props) {
  const { user } = props;
  return (
    <>
      <h1>Home</h1>
      <h2>
        Bienvenido
        {user}
      </h2>
    </>
  );
}
