import { Footer } from '@/components/Footer';
import { PlayListOne } from '@/components/PlayListOne';
import { PlayListTwo } from '@/components/PlayListTwo';
import { Sidebar } from '@/components/Sidebar';
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
  Maximize2,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <PlayListOne
              title="Wasting Light"
              image="/album.jpg"
              alt="Capa do álbum Wasting Light"
            />
            <PlayListOne
              title="Wasting Light"
              image="/album.jpg"
              alt="Capa do álbum Wasting Light"
            />
            <PlayListOne
              title="Wasting Light"
              image="/album.jpg"
              alt="Capa do álbum Wasting Light"
            />
            <PlayListOne
              title="Wasting Light"
              image="/album.jpg"
              alt="Capa do álbum Wasting Light"
            />
            <PlayListOne
              title="Wasting Light"
              image="/album.jpg"
              alt="Capa do álbum Wasting Light"
            />
            <PlayListOne
              title="Wasting Light"
              image="/album.jpg"
              alt="Capa do álbum Wasting Light"
            />
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Victor Bruno Fernandes
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <PlayListTwo />
            <PlayListTwo />
            <PlayListTwo />
            <PlayListTwo />
            <PlayListTwo />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
