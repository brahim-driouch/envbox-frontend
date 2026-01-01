
type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  textarea?: boolean;
  inputType?: string;
  required?: boolean;
};

export function FormField({ label, name, value, onChange, placeholder, textarea = false, inputType = 'text', required = false }: FormFieldProps) {
  return (
    <>
      <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          className="w-full bg-zinc-900 border-2 border-zinc-700 p-3 text-white 
                   focus:border-emerald-400 outline-none min-h-25 resize-y"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          required={required}
        />
      ) : (
        <input
          type={inputType}
          className="w-full bg-zinc-900 border-2 border-zinc-700 p-3 text-white 
                   focus:border-emerald-400 outline-none"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          required={required}
        />
      )}
    </>
  );
}