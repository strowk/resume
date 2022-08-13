export const EntryDate = ({ date }: { date: Date }) => {
    return (
      <>
        <span>{date.toLocaleString("en-us", { month: "short" })}</span>
        &nbsp;
        <span>{date.getFullYear()}</span>
      </>
    );
  };