import { Button } from "../ui/button";
import FormControls from "./form-control";

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button className="mt-5 w-full" disabled={isButtonDisabled} type="submit">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
