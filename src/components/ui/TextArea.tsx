import { InputProps } from "../../types/input";
import erroricon from "../../assets/inputicon/Icon (10).png";

const TextArea = ({ plac, value, id, error, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 ">
      <div className="relative">
        <textarea
          placeholder={plac}
          id={id}
          value={value}
          required
          onChange={onChange}
          className={`w-full p-3 rounded-lg border text-base placeholder:text-label text-label focus:outline-none bg-input
              ${
                error
                  ? "border-red-600 bg-red-900/30"
                  : "border-border focus:outline-[#CAD5E2]"
              }
            `}
        ></textarea>
        {error && (
          <img
            src={erroricon}
            alt="error"
            className="absolute top-3 w-6 h-6 right-3"
          />
        )}
      </div>
      {error && <p className="text-red-500 text-sm font-mono">{error}</p>}
    </div>
  );
};

export default TextArea;
