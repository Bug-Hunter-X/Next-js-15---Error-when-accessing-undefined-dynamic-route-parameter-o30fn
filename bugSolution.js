```javascript
// pages/[[...param]].js

export default function DynamicRoute({ params }) {
  const param = params?.param?.[0]; // Accessing the first parameter

  if (!param) {
    return <div>No parameter provided.</div>; // Handle undefined parameter
  }

  return (
    <div>
      <h1>Dynamic Route Parameter: {param}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params);

  //Further logic
  return { props: {} };
}
```