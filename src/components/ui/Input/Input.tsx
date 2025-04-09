import erroricon from '../../../assets/inputicon/Icon (10).png'
import { InputProps } from '../../../types/input';

export default function Input({ type, plac, value, id, error, onChange }: InputProps) {
    return (
      <div className="flex flex-col gap-1 ">
        <div className="relative">
          <input
            type={type}
            required
            value={value}
            id={id}
            placeholder={plac}
            onChange={onChange}
            className={`w-full p-3 focus:border-[#CAD5E2] rounded-lg border text-base placeholder:text-label text-label focus:outline-none bg-input
              ${error ? 'border-red-600 bg-red-900/30' : 'border-border focus:outline-[#CAD5E2]'}
            `}
          />
          {error && (
            <img src={erroricon} alt="error" className="absolute top-3 w-6 h-6 right-3" />
          )}
        </div>
        {error && (
          <p className="text-red-500 text-sm font-mono">{error}</p>
        )}
      </div>
    );
  }
  