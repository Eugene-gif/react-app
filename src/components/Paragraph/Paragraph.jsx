import './Paragraph.css';

function Paragraph({ children, fontSize }) {
  return (
    <p className='paragraph' style={{ fontSize: fontSize }}>{children}</p>
  );
}

export default Paragraph;
