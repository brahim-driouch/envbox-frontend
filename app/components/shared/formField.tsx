
type FormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  textarea?: boolean;
  inputType?: string;
};

export function FormField({ label, value, onChange, placeholder, textarea = false, inputType = 'text' }: FormFieldProps) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          className="w-full bg-zinc-900 border-2 border-zinc-700 p-3 text-white 
                   focus:border-emerald-400 outline-none min-h-[100px] resize-y"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={inputType}
          className="w-full bg-zinc-900 border-2 border-zinc-700 p-3 text-white 
                   focus:border-emerald-400 outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}