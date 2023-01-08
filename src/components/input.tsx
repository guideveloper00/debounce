import "./styles.css";

type InputProps = {
  setInputValue: (value: string) => void;
};

export function Input({ setInputValue }: InputProps) {
  return (
    <input
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
    ></input>
  );
}
