export default function ErrorPage() {
  return (
    <div id="error-page" className="text-center my-10  font-medium">
      <h1 className="text-3xl">Oops!</h1>
      <p className="text-2xl text-red-500 my-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-xl text-red-500">
        <i>Something went wrong</i>
      </p>
    </div>
  );
}
