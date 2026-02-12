import React from "react";

export default function SecurityCards() {
  return (
    <div className="w-full px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-2xl border border-green-500/40 bg-gradient-to-b from-black to-zinc-900 p-6 shadow-lg">
          <p className="mb-4 text-sm font-semibold text-green-400">
            SECURE AND GOVERN YOUR AI BEFORE RISK BECOMES REALITY
          </p>
          <h3 className="text-lg font-medium leading-snug text-white">
            Learn how to govern AI use, reduce exposure, and protect critical
            information
          </h3>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-black to-zinc-900 p-6 shadow-lg">
          <p className="mb-4 text-sm font-semibold text-gray-400">
            LEADER FOR EMAIL SECURITY
          </p>
          <h3 className="text-lg font-medium leading-snug text-white">
            Get the 2025 Gartner Magic Quadrant™ for Email Security
          </h3>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-black to-zinc-900 p-6 shadow-lg">
          <p className="mb-4 text-sm font-semibold text-cyan-300">
            PROOFPOINT PROTECT SERIES
          </p>
          <h3 className="text-lg font-medium leading-snug text-white">
            Join industry peers to discover how AI is redefining human-centric
            security
          </h3>
        </div>
      </div>
    </div>
  );
}
