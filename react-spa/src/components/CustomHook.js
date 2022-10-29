import useFetch from "../hooks/useFetch";

const CustomHook = () => {
  const [data] = useFetch("/posts")

  return (
    <>
      <h2>Custom Hook</h2>

      {data &&
        data.map((item) => {
          return <p key={item.id}>title: {item.title}, body: {item.body}</p>;
        })}
    </>
  )
}

export default CustomHook