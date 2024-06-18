interface TextBoxProps {
  onChange: (text: string) => void;
}

const TextBox: React.FC<TextBoxProps> = ({ onChange }) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea onChange={handleTextChange}></textarea>
  );
};

export default TextBox;
