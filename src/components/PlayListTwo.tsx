import Image from 'next/image';

export function PlayListTwo() {
  return (
    <a
      href=""
      className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <Image
        src="/album.jpg"
        className="w-full"
        width={104}
        height={104}
        alt="Capa do álbum Wasting Light"
      />
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">
        Wallows, COIN, girl in red and more
      </span>
    </a>
  );
}
