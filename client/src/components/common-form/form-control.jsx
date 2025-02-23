import { useContext } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { AdminContext } from "@/context/admin-context";

function FormControls({ formControls = [], formData, setFormData }) {
  const { isGroupToggled, isSharedGroupToggled } = useContext(AdminContext);

  function renderComponentByType(getControlItem) {
    let element = null;
    const currentControlItemValue = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            disabled={
              getControlItem.name === "groupPoints"
                ? !isGroupToggled && !isSharedGroupToggled
                : false
            }
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            value={currentControlItemValue}
            className={`${!isGroupToggled ? "bg-gray-300" : ""}  ${
              isSharedGroupToggled ? "bg-white" : ""
            } bg-white`}
            onChange={(event) => {
              const value = event.target.value;
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              });
            }}
          />
        );
        break;
      case "select":
        element = (
          <Select
            disabled={
              getControlItem.name === "groupGrade" ||
              getControlItem.name === "groupCollegeName"
                ? !isGroupToggled || isSharedGroupToggled
                : false
            }
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
            value={currentControlItemValue}
          >
            <SelectTrigger
              className={`${
                getControlItem.name === "groupGrade" ||
                getControlItem.name === "groupCollegeName"
                  ? !isGroupToggled
                    ? "bg-gray-300"
                    : ""
                  : ""
              } ${isSharedGroupToggled ? "bg-gray-300" : ""}  ${
                getControlItem.name === "eventName" ? "bg-white" : ""
              }  w-full`}
            >
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent className="text-ellipsis overflow-hidden max-w-3xs sm:max-w-lg">
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.label}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controleItem) => (
        <div key={controleItem.name}>
          <Label htmlFor={controleItem.name}>{controleItem.label}</Label>
          {renderComponentByType(controleItem)}
        </div>
      ))}
    </div>
  );
}

export default FormControls;
