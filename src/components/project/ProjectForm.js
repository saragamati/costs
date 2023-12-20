import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        placeholder="Insira o nome do projeto"
        name="name"
        text="Nome do projeto"
      />
      <Input
        type="number"
        placeholder="Insira o orçamento total"
        name="budget"
        text="Orçamento do projeto"
      />
      <div>
        <Select name="category_id" text="Selecione a categoria" />
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
