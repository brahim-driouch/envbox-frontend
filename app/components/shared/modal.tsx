import { X } from "lucide-react";
import { ReactNode } from "react";

type ModalProps = {
  element: ReactNode;
  onClose: () => void;
}

export const Modal = ({ element, onClose }: ModalProps) => {

 

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-zinc-950 border-4 border-emerald-400 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-zinc-950 border-b-4 border-zinc-800 p-6 flex justify-between items-center">
          <h2 className="text-3xl font-black uppercase tracking-tight">
            Add/Edit Project
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-500 hover:text-black transition-all duration-200 border-2 border-zinc-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {element}
      </div>
    </div>
  );
}
