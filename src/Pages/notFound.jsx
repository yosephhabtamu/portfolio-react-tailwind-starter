

export default function NotFound (){
    return (
      <>
        <div className="container w-3/4 mx-auto">
          <h1 className=" p-4 text-6xl mb-6 font-bold text-center bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 text-transparent bg-clip-text">
            404
          </h1>
          <p className="text-slate-800 font-medium text-opacity-70 mb-1 first-line:tracking-widest text-center">
            The page you are looking for does not exist.
          </p>
        </div>
      </>
    );
}
