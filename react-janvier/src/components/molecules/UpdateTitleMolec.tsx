import { Title } from "@atoms/Title";
import { ButtonTest } from "@atoms/ButtonTest";
import { useState } from "react";

export const UpdateTitleMolec = () => {
  const [title, setTitle] = useState<string>("");

  const updateTitle = () => {
    setTitle((previous) => previous + "x");
  };
  return (
    <div>
      <Title title={title} />
      <ButtonTest onClick={updateTitle} />
    </div>
  );
};
