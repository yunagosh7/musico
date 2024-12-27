import {  RegisterOptions } from "react-hook-form";

type Rules = Omit<RegisterOptions<T, V>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;