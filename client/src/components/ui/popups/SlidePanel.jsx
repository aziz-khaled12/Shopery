import React from "react";
import { X } from "lucide-react";
import Button from "../buttons/Button";

export default function SlidePanel({
  open,
  onClose,
  children,
  buttons,
  title = "Title",
  side = "right" // default to right
}) {
  const handleKeyDown = (event) => {
    if (event.key === "Escape" && open) {
      onClose();
    }
  };

  // Determine justify class based on side prop
  const justifyClass = {
    right: "justify-end",
    left: "justify-start",
    top: "justify-start items-start",
    bottom: "justify-start items-end"
  }[side];

  // Determine panel width/height classes based on side
  const panelSizeClass = {
    right: `${open ? 'w-96 md:w-[500px]' : 'w-0'}`,
    left: `${open ? 'w-96 md:w-[500px]' : 'w-0'}`,
    top: `${open ? 'h-96 md:h-[500px]' : 'h-0'} w-full`,
    bottom: `${open ? 'h-96 md:h-[500px]' : 'h-0'} w-full`
  }[side];

  return (
    <div
      className={`fixed inset-0 z-50 flex ${justifyClass} transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`relative ${panelSizeClass} bg-white shadow-xl flex flex-col transition-all duration-300 ease-out`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close panel"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className={`flex-1 custom-scrollbar overflow-y-auto p-6 transition-opacity duration-200 ${
          open ? 'opacity-100 delay-150' : 'opacity-0'
        }`}>
          {children}
        </div>

        {/* Footer Buttons */}
        {buttons && buttons.length > 0 && (
          <div className={`p-6 border-t border-gray-200 space-y-3 transition-opacity duration-200 ${
            open ? 'opacity-100 delay-150' : 'opacity-0'
          }`}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                onClick={button.onClick}
                fullWidth
                variant={button.variant || "fill"}
                size="small"
              >
                {button.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}