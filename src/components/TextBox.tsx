interface TextBoxProps {
  onChange: (text: string) => void;
  value: string;
}

const TextBox: React.FC<TextBoxProps> = ({ onChange, value }) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <textarea
        className="notes-box"
        name="notes"
        placeholder="Add a Note"
        value={value}
        onChange={handleTextChange}
      ></textarea>
    </>
  );
};

export default TextBox;
