import { motion } from 'motion/react';

interface TileData {
  id: number;
  correctPosition: number;
  currentPosition: number;
  imageData?: string;
}

interface PuzzleTileProps {
  tile: TileData;
  isClickable: boolean;
  onClick: () => void;
}

export function PuzzleTile({ tile, isClickable, onClick }: PuzzleTileProps) {
  const getGridPosition = (position: number) => {
    const row = Math.floor(position / 4) + 1;
    const col = (position % 4) + 1;
    return `${row} / ${col}`;
  };

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        gridArea: getGridPosition(tile.currentPosition)
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }}
      className={`
        bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px] cursor-pointer
        hover:brightness-110 transition-all duration-200 relative overflow-hidden
        border-2 border-white/20 hover:border-white/40
        ${isClickable ? 'hover:scale-[1.02]' : 'cursor-not-allowed'}
      `}
      style={{ 
        backgroundImage: tile.imageData ? `url('${tile.imageData}')` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={isClickable ? onClick : undefined}
      whileHover={isClickable ? { scale: 1.02, brightness: 1.1 } : undefined}
      whileTap={isClickable ? { scale: 0.98 } : undefined}
    >
      {/* Tile number for debugging (remove in production) */}
      <div className="absolute top-1 left-1 bg-black/20 text-white text-xs rounded px-1 opacity-0 hover:opacity-100 transition-opacity">
        {tile.id + 1}
      </div>
      
      {/* Highlight overlay when clickable */}
      {isClickable && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 pointer-events-none" />
      )}
    </motion.div>
  );
}