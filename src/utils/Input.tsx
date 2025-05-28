import { useState } from 'react';

function Input() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full border border-primary bg-transparent px-2 pt-5 pb-2 text-[16px] text-white placeholder-transparent focus:outline-none"
        placeholder="Name"
      />
      <label
        htmlFor="name"
        className={`absolute left-4 text-primary text-[16px] transition-all duration-200
          ${isFocused || value ? 'bottom-10 text-sm text-highlight bg-theme-bg' : 'top-3.5 text-[16px] text-primary'}
        `}
      >
        Name
      </label>
    </div>
  );
}


export default Input;