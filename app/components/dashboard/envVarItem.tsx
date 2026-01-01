import { EnvVar } from "@/types/project";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";


export const EnvVarItem=({ envVar }: { envVar: EnvVar }) =>{
  const [showValue, setShowValue] = useState(false);

  return (
    <div className="grid grid-cols-[1fr_2fr_auto] gap-4 items-center bg-zinc-900 border border-zinc-800 p-3 text-sm">
      <span className="font-bold text-emerald-400 uppercase truncate">{envVar.key}</span>
      <span className="text-zinc-500 truncate font-mono">
        {showValue ? envVar.value : '••••••••••'}
      </span>
      <button
        onClick={() => setShowValue(!showValue)}
        className="text-zinc-600 hover:text-emerald-400 transition-colors"
      >
        {showValue ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
}
