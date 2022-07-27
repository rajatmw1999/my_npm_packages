function MyComp () {
  const publicaton = 'yo'
  const myfunc = () => {
    throw new Error("some random error");
  }
  return (
    <>
      <h1>Home {myfunc()}</h1>
    </>
  )
}

export default MyComp
