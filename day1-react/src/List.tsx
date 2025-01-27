interface ListProps {
  laListe: string[];
}
export const List: React.FC<ListProps> = ({ laListe }) => {
  return (
    <div>
      {laListe.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </div>
  );
};
