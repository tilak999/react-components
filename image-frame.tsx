export function ImageFrame({ src }:{ src: string }) {
  return (<div className="relative origin-center -translate-x-3 rotate-6 p-6 duration-500 group-hover:rotate-0">
    <div className="absolute top-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10" />
    <div className="absolute top-0 left-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10" />
    <img
      src={src}
      className="shadow-[-5px_10px_15px_-3px_var(--shadow-color),_-5px_4px_6px_-4px_var(--shadow-color)] duration-500 [--shadow-color:var(--color-black)]/10 dark:[--shadow-color:var(--color-black)]"
      style={{ color: "transparent" }}
    />
    <div className="absolute top-0 right-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10" />
    <div className="absolute bottom-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10" />
  </div>)
}
