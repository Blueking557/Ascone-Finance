import { useState } from "react";
import { X } from "lucide-react";

function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-[#143c36] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Center text */}
        <p className="mx-auto text-center">
          <span className="font-medium">Session 2024</span> — Early-bird registration now open →
        </p>

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 md:right-8 hover:opacity-70"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBar;
