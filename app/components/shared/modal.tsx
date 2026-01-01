import { X } from "lucide-react";
import { ReactNode } from "react";

type ModalProps = {
  element: ReactNode;
  onClose: () => void;
}

export const Modal = ({ element, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-start justify-center p-4 animate-fade-in overflow-y-auto">
      {/* Click outside to close (optional) */}
      <div className="fixed inset-0" onClick={onClose} />
      
      {/* Modal content */}
      <div className="relative bg-zinc-950 border-4 border-emerald-400 max-w-2xl w-full my-8 animate-slide-up">
        {/* Header */}
        <div className="bg-zinc-950 border-b-4 border-zinc-800 p-6 flex justify-end items-center">
         
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-500 hover:text-black transition-all duration-200 border-2 border-zinc-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {element}
        </div>
      </div>
    </div>
  );
}