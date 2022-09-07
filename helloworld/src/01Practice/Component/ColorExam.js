export default function ColorExam(props) {
  const { data , color } = props;

  const render

  return (
    <>
      {data.map((id, name) => (
        <render key={data.id} input={data.name} color={color.map[name]} />
      ))}
    </>
  );
}
