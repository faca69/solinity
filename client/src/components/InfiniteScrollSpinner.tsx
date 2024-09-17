export default function InfiniteScrollSpinner() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex space-x-2">
        <div className="h-5 w-5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-5 w-5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-5 w-5 bg-emerald-600 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
