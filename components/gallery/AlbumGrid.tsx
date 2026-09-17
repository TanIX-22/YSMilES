import { AlbumCard } from './AlbumCard';
import type { GalleryAlbum } from './content';

interface AlbumGridProps {
  albums: GalleryAlbum[];
}

export function AlbumGrid({ albums }: AlbumGridProps) {
  return (
    <div id="albums" className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {albums.map((album) => (
        <AlbumCard key={album.slug} album={album} />
      ))}
    </div>
  );
}
