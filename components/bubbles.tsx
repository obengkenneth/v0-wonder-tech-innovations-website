"use client"

export default function Bubbles() {
  const bubbles = [
    { size: 'w-40 h-40', top: 'top-16', left: 'left-10', delay: '0s', opacity: 'opacity-18' },
    { size: 'w-32 h-32', top: 'top-32', left: 'right-20', delay: '2s', opacity: 'opacity-15' },
    { size: 'w-24 h-24', top: 'top-48', left: 'left-1/2', delay: '4s', opacity: 'opacity-12' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`absolute ${bubble.size} ${bubble.top} ${bubble.left} ${bubble.opacity} bg-primary/20 rounded-full animate-bubble-pulse blur-sm`}
          style={{
            animationDelay: bubble.delay,
            animationDuration: '6s',
          }}
        />
      ))}
    </div>
  )
}

