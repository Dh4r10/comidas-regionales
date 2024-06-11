import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "./SelectForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export function SelectForm(props) {
  const { form, name, label, setOpenI, desabilitar } = props;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="select-representate">
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1">SHANDE ANDRES</SelectItem>
                <SelectItem value="2">ISMAEL NEHEMIAS</SelectItem>
                <SelectItem value="3">MARICIELO CASTRO</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          <FormDescription>
            {desabilitar && (
              <Button className="button" type="button" onClick={setOpenI}>
                Agregar Representante
              </Button>
            )}
          </FormDescription>
        </div>
      )}
    />
  );
}
